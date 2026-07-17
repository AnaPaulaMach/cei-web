import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { OpportunityItem } from "@/types/opportunities";

type OpportunityCardProps = {
  opportunity: OpportunityItem;
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const isExternal = Boolean(opportunity.href?.startsWith("http") || opportunity.isExternal);

  return (
    <article className="group flex flex-col rounded-sm border border-cei-shadow/60 bg-white shadow-[0_6px_16px_rgba(3,9,20,0.18)] transition hover:-translate-y-0.5 md:min-h-72">
      <div className="flex items-center justify-between border-b border-cei-shadow/35 bg-cei-window px-3 py-3 sm:px-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-cei-shadow/60 bg-cei-alert font-mono text-[11px] font-black text-cei-shadow sm:h-10 sm:w-10 sm:text-xs">
            {opportunity.category.slice(0, 3).toUpperCase()}
          </span>
          <div className="flex flex-wrap gap-2">
            <Badge>{opportunity.category}</Badge>
          </div>
        </div>
        {opportunity.highlighted ? <Badge>Nuevo</Badge> : null}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-black leading-tight text-cei-shadow sm:text-xl">{opportunity.title}</h3>
        <p className="mt-2 text-sm font-bold text-slate-700">{opportunity.source}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-800 sm:text-base sm:leading-7">
          {opportunity.description}
        </p>
        <div className="mt-4 grid gap-2 font-mono text-xs font-bold text-cei-shadow">
          {opportunity.publishedAt ? <span>Publicado: {opportunity.publishedAt}</span> : null}
          {opportunity.deadline ? <span>Límite: {opportunity.deadline}</span> : null}
        </div>
      </div>
      <div className="border-t border-cei-shadow/35 bg-cei-window p-3 sm:p-4">
        {opportunity.href ? (
          <Button href={opportunity.href} variant="secondary">
            {isExternal ? "Abrir enlace externo" : "Abrir enlace"}
          </Button>
        ) : (
          <span className="inline-flex rounded-sm border border-dashed border-cei-shadow bg-white px-3 py-2 font-mono text-xs font-black uppercase text-cei-shadow">
            Link pendiente
          </span>
        )}
      </div>
    </article>
  );
}
