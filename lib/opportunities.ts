import { fallbackOpportunities } from "@/data/fallback-opportunities";
import { formatShortDateLabel } from "@/lib/format";
import { hasSupabaseConfig, supabase } from "@/lib/supabase";
import type { ContentResult } from "@/types/content";
import type { Database } from "@/types/database";
import type { OpportunityItem } from "@/types/opportunities";

type OpportunityRow = Database["public"]["Tables"]["oportunidades"]["Row"];
const HOME_OPPORTUNITIES_LIMIT = 3;
const retiredOpportunityIds = new Set([
  "80f13e96-6321-4fd5-8e10-a5a9a19162a9",
  "4a2257ad-453a-4190-b315-f45388165d5a",
  "0779b0dd-6886-42ab-9f96-0ce3124be15f",
  "da86b8d1-b5cc-41fc-b64a-88fcd2af584d",
  "527e3346-9f1e-4376-8309-082c9f1e8266",
  "0d1eabfb-0132-4fb7-a0e6-749162dee325",
  "8fda4518-5d8e-46d4-94aa-2d64669ae684",
  "d8002175-bfad-4fca-bc3f-d916057ce0d2"
]);

function getArgentinaDateKey() {
  return new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric"
  }).format(new Date());
}

function keepActiveOpportunities(opportunities: OpportunityItem[]) {
  const currentDate = getArgentinaDateKey();

  return opportunities.filter(
    (opportunity) => !opportunity.deadlineIso || opportunity.deadlineIso >= currentDate
  );
}

function sortOpportunities(opportunities: OpportunityItem[]) {
  return keepActiveOpportunities(opportunities).sort(
    (a, b) => Number(Boolean(b.highlighted)) - Number(Boolean(a.highlighted))
  );
}

function combineWithLocalOpportunities(opportunities: OpportunityItem[]) {
  const currentOpportunities = opportunities.filter(
    (opportunity) => !retiredOpportunityIds.has(opportunity.id)
  );
  const opportunitiesById = new Map(
    [...currentOpportunities, ...fallbackOpportunities].map((opportunity) => [opportunity.id, opportunity])
  );

  return sortOpportunities([...opportunitiesById.values()]);
}

function mapOpportunity(row: OpportunityRow): OpportunityItem {
  const href = row.link ?? undefined;

  return {
    id: row.id,
    title: row.titulo,
    description: row.descripcion ?? "Oportunidad publicada por la CEI.",
    category: row.categoria ?? "Aviso",
    source: row.fuente ?? "CEI",
    href,
    isExternal: Boolean(href?.startsWith("http")),
    publishedAt: formatShortDateLabel(row.fecha_publicacion),
    deadline: formatShortDateLabel(row.fecha_limite),
    deadlineIso: row.fecha_limite ?? undefined,
    highlighted: Boolean(row.destacado)
  };
}

export async function getHomeOpportunities(): Promise<ContentResult<OpportunityItem>> {
  if (!hasSupabaseConfig || !supabase) {
    return {
      items: sortOpportunities(fallbackOpportunities).slice(0, HOME_OPPORTUNITIES_LIMIT),
      source: "fallback"
    };
  }

  const { data, error } = await supabase
    .from("oportunidades")
    .select("*")
    .or(`fecha_limite.is.null,fecha_limite.gte.${getArgentinaDateKey()}`)
    .order("destacado", { ascending: false })
    .order("fecha_publicacion", { ascending: false, nullsFirst: false });

  if (error) {
    return {
      items: sortOpportunities(fallbackOpportunities).slice(0, HOME_OPPORTUNITIES_LIMIT),
      source: "fallback",
      error: "No se pudo leer oportunidades desde Supabase. Mostramos la información local disponible."
    };
  }

  return {
    items: combineWithLocalOpportunities(data.map(mapOpportunity)).slice(0, HOME_OPPORTUNITIES_LIMIT),
    source: "supabase"
  };
}

export async function getAllOpportunities(): Promise<ContentResult<OpportunityItem>> {
  if (!hasSupabaseConfig || !supabase) {
    return { items: sortOpportunities(fallbackOpportunities), source: "fallback" };
  }

  const { data, error } = await supabase
    .from("oportunidades")
    .select("*")
    .or(`fecha_limite.is.null,fecha_limite.gte.${getArgentinaDateKey()}`)
    .order("destacado", { ascending: false })
    .order("fecha_publicacion", { ascending: false, nullsFirst: false });

  if (error) {
    return {
      items: sortOpportunities(fallbackOpportunities),
      source: "fallback",
      error: "No se pudo leer oportunidades desde Supabase. Mostramos la información local disponible."
    };
  }

  return { items: combineWithLocalOpportunities(data.map(mapOpportunity)), source: "supabase" };
}
