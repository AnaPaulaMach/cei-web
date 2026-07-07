import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { EventItem } from "@/types/events";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className={`rounded-sm border-2 border-cei-shadow bg-cei-window p-5 shadow-pixel ${event.highlighted ? "md:col-span-2" : ""}`}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge>{event.category}</Badge>
        {event.highlighted ? <Badge>Destacado</Badge> : null}
      </div>
      <h3 className="font-mono text-2xl font-black text-cei-shadow">{event.title}</h3>
      <p className="mt-2 text-sm font-bold text-slate-700">{event.date} - {event.place}</p>
      <p className="mt-3 leading-7 text-slate-800">{event.description}</p>
      <div className="mt-5">
        <Button href={event.href} variant={event.highlighted ? "primary" : "secondary"}>
          {event.cta}
        </Button>
      </div>
    </article>
  );
}
