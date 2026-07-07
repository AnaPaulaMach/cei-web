import { mockOpportunities } from "@/data/mock-opportunities";
import { formatShortDateLabel } from "@/lib/format";
import { hasSupabaseConfig, supabase } from "@/lib/supabase";
import type { ContentResult } from "@/types/content";
import type { Database } from "@/types/database";
import type { OpportunityItem } from "@/types/opportunities";

type OpportunityRow = Database["public"]["Tables"]["oportunidades"]["Row"];
const HOME_OPPORTUNITIES_LIMIT = 3;

function sortOpportunities(opportunities: OpportunityItem[]) {
  return [...opportunities].sort((a, b) => Number(Boolean(b.highlighted)) - Number(Boolean(a.highlighted)));
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
    highlighted: Boolean(row.destacado)
  };
}

export async function getHomeOpportunities(): Promise<ContentResult<OpportunityItem>> {
  if (!hasSupabaseConfig || !supabase) {
    return { items: sortOpportunities(mockOpportunities).slice(0, HOME_OPPORTUNITIES_LIMIT), source: "mock" };
  }

  const { data, error } = await supabase
    .from("oportunidades")
    .select("*")
    .order("destacado", { ascending: false })
    .order("fecha_publicacion", { ascending: false, nullsFirst: false })
    .limit(HOME_OPPORTUNITIES_LIMIT);

  if (error) {
    return {
      items: sortOpportunities(mockOpportunities).slice(0, HOME_OPPORTUNITIES_LIMIT),
      source: "mock",
      error: "No se pudo leer oportunidades desde Supabase. Mostramos datos de ejemplo."
    };
  }

  return { items: data.map(mapOpportunity), source: "supabase" };
}

export async function getAllOpportunities(): Promise<ContentResult<OpportunityItem>> {
  if (!hasSupabaseConfig || !supabase) {
    return { items: sortOpportunities(mockOpportunities), source: "mock" };
  }

  const { data, error } = await supabase
    .from("oportunidades")
    .select("*")
    .order("destacado", { ascending: false })
    .order("fecha_publicacion", { ascending: false, nullsFirst: false });

  if (error) {
    return {
      items: sortOpportunities(mockOpportunities),
      source: "mock",
      error: "No se pudo leer oportunidades desde Supabase. Mostramos datos de ejemplo."
    };
  }

  return { items: data.map(mapOpportunity), source: "supabase" };
}
