import { mockEvents } from "@/data/mock-events";
import { formatDateLabel } from "@/lib/format";
import { hasSupabaseConfig, supabase } from "@/lib/supabase";
import type { ContentResult } from "@/types/content";
import type { Database } from "@/types/database";
import type { EventItem } from "@/types/events";

type EventRow = Database["public"]["Tables"]["eventos"]["Row"];

function parseImageUrls(value: string | null) {
  if (!value) {
    return undefined;
  }

  const urls = value
    .split(/[\n,|]+/)
    .map((url) => url.trim())
    .filter((url) => url.startsWith("/") || url.startsWith("http://") || url.startsWith("https://"));

  return urls.length > 0 ? urls : undefined;
}

function getEventCta(href: string, status: "proximo" | "pasado", isHackathon: boolean, category: string) {
  const isGoogleForm = href.includes("forms.gle") || href.includes("docs.google.com/forms");
  const isInstagram = href.includes("instagram.com");

  if (category.toLowerCase().includes("censo") && isGoogleForm) {
    return "Completar censo";
  }

  if (isHackathon || isGoogleForm) {
    return "Inscribirme";
  }

  if (isInstagram) {
    return status === "pasado" ? "Ver publicación" : "Ver invitación";
  }

  return status === "pasado" ? "Ver resumen" : "Ver más";
}

function getEventDate(row: EventRow, category: string) {
  const normalizedTitle = row.titulo.toLowerCase();

  if (normalizedTitle === "unse abre sus puertas") {
    return {
      date: "27 y 28 de agosto de 2026 · de 8:30 a 18",
      dateTitle: "Fecha"
    };
  }

  if (row.fecha_evento) {
    return {
      date: formatDateLabel(row.fecha_evento),
      dateTitle: "Fecha"
    };
  }

  const normalizedCategory = category.toLowerCase();

  if (normalizedCategory.includes("censo")) {
    return {
      date: "Disponible ahora",
      dateTitle: "Disponibilidad"
    };
  }

  if (normalizedCategory.includes("hack")) {
    return {
      date: "Un fin de semana de septiembre · fecha a definir",
      dateTitle: "Fecha"
    };
  }

  if (normalizedTitle.includes("portfolio")) {
    return {
      date: "Semana del Programador · septiembre, día a definir",
      dateTitle: "Fecha"
    };
  }

  return {
    date: "Fecha a definir",
    dateTitle: "Fecha"
  };
}

function mapEvent(row: EventRow): EventItem {
  const category = row.categoria ?? "Aviso";
  const isHackathon = category.toLowerCase().includes("hack");
  const status = row.estado === "pasado" ? "pasado" : "proximo";
  const storedHref = row.link?.trim();
  const normalizedHref =
    storedHref === "/eventos" || storedHref === "/oportunidades" ? "/novedades?seccion=agenda" : storedHref;
  const href = isHackathon ? "/hackathon" : (normalizedHref ?? "/novedades?seccion=agenda");
  const eventDate = getEventDate(row, category);
  const isAvailableCensus = category.toLowerCase().includes("censo") && href.includes("docs.google.com/forms");
  const isUnseOpenHouse = row.titulo.toLowerCase() === "unse abre sus puertas";

  return {
    id: row.id,
    title: row.titulo,
    description: row.descripcion ?? "Aviso publicado por la CEI.",
    date: eventDate.date,
    dateTitle: eventDate.dateTitle,
    sortDate: row.fecha_evento ?? undefined,
    place: row.lugar ?? "Lugar a confirmar",
    category,
    href,
    cta: getEventCta(href, status, isHackathon, category),
    status,
    statusLabel:
      status === "pasado"
        ? "Pasado"
        : isAvailableCensus
          ? "Disponible ahora"
          : isUnseOpenHouse
            ? "Participa la CEI"
            : row.fecha_evento
              ? "Próximo"
              : "Fecha a definir",
    highlighted: Boolean(row.destacado),
    imageUrls: parseImageUrls(row.imagen_url)
  };
}

export function sortEventsByDate(events: EventItem[], highlightedFirst = false) {
  return [...events].sort((a, b) => {
    if (highlightedFirst && Boolean(a.highlighted) !== Boolean(b.highlighted)) {
      return Number(Boolean(b.highlighted)) - Number(Boolean(a.highlighted));
    }

    const aDate = a.sortDate ? new Date(a.sortDate).getTime() : Number.MAX_SAFE_INTEGER;
    const bDate = b.sortDate ? new Date(b.sortDate).getTime() : Number.MAX_SAFE_INTEGER;

    return aDate - bDate;
  });
}

export async function getHomeEvents(): Promise<ContentResult<EventItem>> {
  if (!hasSupabaseConfig || !supabase) {
    return {
      items: sortEventsByDate(
        mockEvents.filter((event) => event.status === "proximo"),
        true
      ),
      source: "mock"
    };
  }

  const { data, error } = await supabase
    .from("eventos")
    .select("*")
    .eq("estado", "proximo")
    .order("destacado", { ascending: false })
    .order("fecha_evento", { ascending: true, nullsFirst: false });

  if (error) {
    return {
      items: sortEventsByDate(
        mockEvents.filter((event) => event.status === "proximo"),
        true
      ),
      source: "mock",
      error: "No se pudo leer eventos desde Supabase. Mostramos datos de ejemplo."
    };
  }

  return { items: sortEventsByDate(data.map(mapEvent), true), source: "supabase" };
}

export async function getAllEvents(): Promise<ContentResult<EventItem>> {
  if (!hasSupabaseConfig || !supabase) {
    return { items: sortEventsByDate(mockEvents), source: "mock" };
  }

  const { data, error } = await supabase
    .from("eventos")
    .select("*")
    .order("fecha_evento", { ascending: true, nullsFirst: false });

  if (error) {
    return {
      items: sortEventsByDate(mockEvents),
      source: "mock",
      error: "No se pudo leer eventos desde Supabase. Mostramos datos de ejemplo."
    };
  }

  return { items: sortEventsByDate(data.map(mapEvent)), source: "supabase" };
}
