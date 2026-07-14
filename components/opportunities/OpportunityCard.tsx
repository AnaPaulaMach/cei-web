import { Button } from "@/components/ui/Button";
import type { OpportunityItem } from "@/types/opportunities";

type OpportunityCardProps = {
  opportunity: OpportunityItem;
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const isExternal = Boolean(opportunity.href?.startsWith("http") || opportunity.isExternal);

  return (
    <article className="flex flex-col rounded-sm border border-cei-shadow/30 bg-white shadow-sm md:min-h-64">
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="font-mono text-xs font-black uppercase text-cei-shadow">{opportunity.category}</p>
          {opportunity.highlighted ? (
            <span className="rounded-sm bg-cei-alert px-2 py-1 font-mono text-[10px] font-black uppercase text-cei-shadow">
              Nuevo
            </span>
          ) : null}
        </div>
        <h3 className="font-mono text-lg font-black leading-tight text-cei-shadow sm:text-xl">{opportunity.title}</h3>
        <p className="mt-2 text-sm font-bold text-slate-700">{opportunity.source}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-800 sm:text-base sm:leading-7">
          {opportunity.description}
        </p>
        <div className="mt-4 grid gap-1 font-mono text-xs font-bold text-cei-shadow/80">
          {opportunity.publishedAt ? <span>Publicado: {opportunity.publishedAt}</span> : null}
          {opportunity.deadline ? <span>Límite: {opportunity.deadline}</span> : null}
        </div>
        {opportunity.href ? (
          <Button className="mt-4 w-fit" href={opportunity.href} variant="secondary">
            {isExternal ? "Abrir enlace externo" : "Abrir enlace"}
          </Button>
        ) : (
          <span className="mt-4 inline-flex w-fit rounded-sm bg-cei-window px-3 py-2 font-mono text-xs font-black uppercase text-cei-shadow">
            Link pendiente
          </span>
        )}
      </div>
    </article>
  );
}
