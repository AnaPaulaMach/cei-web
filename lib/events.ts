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

function getEventCta(href: string, status: "proximo" | "pasado", isHackathon: boolean) {
  const isGoogleForm = href.includes("forms.gle") || href.includes("docs.google.com/forms");
  const isInstagram = href.includes("instagram.com");

  if (isHackathon || isGoogleForm) {
    return "Inscribirme";
  }

  if (isInstagram) {
    return status === "pasado" ? "Ver publicación" : "Ver invitación";
  }

  return status === "pasado" ? "Ver resumen" : "Ver más";
}

function mapEvent(row: EventRow): EventItem {
  const category = row.categoria ?? "Aviso";
  const isHackathon = category.toLowerCase().includes("hack");
  const status = row.estado === "pasado" ? "pasado" : "proximo";
  const href = isHackathon ? "/hackathon" : (row.link ?? "/eventos");

  return {
    id: row.id,
    title: row.titulo,
    description: row.descripcion ?? "Aviso publicado por la CEI.",
    date: formatDateLabel(row.fecha_evento),
    sortDate: row.fecha_evento ?? undefined,
    place: row.lugar ?? "Lugar a confirmar",
    category,
    href,
    cta: getEventCta(href, status, isHackathon),
    status,
    statusLabel: status === "pasado" ? "Pasado" : "Próximo",
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
