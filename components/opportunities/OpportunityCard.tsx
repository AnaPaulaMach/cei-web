import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { OpportunityItem } from "@/types/opportunities";

type OpportunityCardProps = {
  opportunity: OpportunityItem;
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const isExternal = Boolean(opportunity.href?.startsWith("http") || opportunity.isExternal);

  return (
    <article className="group flex min-h-72 flex-col rounded-sm border-2 border-cei-shadow bg-white shadow-pixel transition hover:-translate-y-1">
      <div className="flex items-center justify-between border-b-2 border-cei-shadow bg-cei-window px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border-2 border-cei-shadow bg-cei-alert font-mono text-xs font-black text-cei-shadow shadow-pixel">
            {opportunity.category.slice(0, 3).toUpperCase()}
          </span>
          <div className="flex flex-wrap gap-2">
            <Badge>{opportunity.category}</Badge>
            {isExternal ? <Badge>Externo</Badge> : null}
          </div>
        </div>
        {opportunity.highlighted ? <Badge>Nuevo</Badge> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-mono text-xl font-black text-cei-shadow">{opportunity.title}</h3>
        <p className="mt-2 text-sm font-bold text-slate-700">{opportunity.source}</p>
        <p className="mt-3 flex-1 leading-7 text-slate-800">{opportunity.description}</p>
        <div className="mt-4 grid gap-2 font-mono text-xs font-bold text-cei-shadow">
          {opportunity.publishedAt ? <span>Publicado: {opportunity.publishedAt}</span> : null}
          {opportunity.deadline ? <span>Limite: {opportunity.deadline}</span> : null}
        </div>
      </div>
      <div className="border-t-2 border-cei-shadow bg-cei-window p-4">
        {opportunity.href ? (
          <div className="flex flex-wrap items-center gap-3">
            <Button href={opportunity.href} variant="secondary">
              Abrir enlace
            </Button>
            {isExternal ? (
              <span className="font-mono text-xs font-black uppercase text-cei-shadow">sale del sitio</span>
            ) : null}
          </div>
        ) : (
          <span className="inline-flex rounded-sm border-2 border-dashed border-cei-shadow bg-white px-3 py-2 font-mono text-xs font-black uppercase text-cei-shadow">
            Link pendiente
          </span>
        )}
      </div>
    </article>
  );
}
