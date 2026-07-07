import { mockEvents } from "@/data/mock-events";
import { formatDateLabel } from "@/lib/format";
import { hasSupabaseConfig, supabase } from "@/lib/supabase";
import type { Database } from "@/types/database";
import type { EventItem } from "@/types/events";

type EventRow = Database["public"]["Tables"]["eventos"]["Row"];

export type ContentResult<T> = {
  items: T[];
  error?: string;
  source: "mock" | "supabase";
};

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
    cta: isHackathon ? "Inscribirme" : "Ver mas",
    status,
    statusLabel: status === "pasado" ? "Pasado" : "Proximo",
    highlighted: Boolean(row.destacado)
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
