import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { OpportunityItem } from "@/types/opportunities";

type OpportunityCardProps = {
  opportunity: OpportunityItem;
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <article className="rounded-sm border-2 border-cei-shadow bg-white p-5 shadow-pixel">
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge>{opportunity.category}</Badge>
        {opportunity.highlighted ? <Badge>Nuevo</Badge> : null}
      </div>
      <h3 className="font-mono text-xl font-black text-cei-shadow">{opportunity.title}</h3>
      <p className="mt-2 text-sm font-bold text-slate-700">{opportunity.source}</p>
      <p className="mt-3 leading-7 text-slate-800">{opportunity.description}</p>
      <div className="mt-5">
        <Button href={opportunity.href} variant="secondary">
          Abrir enlace
        </Button>
      </div>
    </article>
  );
}
