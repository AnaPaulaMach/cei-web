import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { EventItem } from "@/types/events";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-sm border-2 border-cei-shadow p-5 shadow-pixel transition hover:-translate-y-1 ${
        event.highlighted ? "bg-[#fff7c2] md:col-span-2" : "bg-cei-window"
      }`}
    >
      <div className="absolute right-3 top-3 hidden font-mono text-5xl font-black text-cei-shadow/10 sm:block">
        {event.category.slice(0, 2).toUpperCase()}
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-2 pr-16">
        <Badge>{event.category}</Badge>
        {event.highlighted ? <Badge>Destacado</Badge> : null}
        {event.statusLabel ? <Badge>{event.statusLabel}</Badge> : null}
      </div>
      <h3 className={`font-mono font-black text-cei-shadow ${event.highlighted ? "text-3xl md:text-4xl" : "text-2xl"}`}>
        {event.title}
      </h3>
      <dl className="mt-4 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
        <div className="rounded-sm border border-cei-shadow bg-white px-3 py-2">
          <dt className="font-mono text-xs font-black uppercase text-cei-shadow">Fecha</dt>
          <dd className="font-bold">{event.date}</dd>
        </div>
        <div className="rounded-sm border border-cei-shadow bg-white px-3 py-2">
          <dt className="font-mono text-xs font-black uppercase text-cei-shadow">Lugar</dt>
          <dd className="font-bold">{event.place}</dd>
        </div>
      </dl>
      <p className="mt-4 max-w-3xl leading-7 text-slate-800">{event.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button href={event.href} variant={event.highlighted ? "primary" : "secondary"}>
          {event.cta}
        </Button>
        <span className="font-mono text-xs font-bold uppercase text-cei-shadow/80">archivo: {event.id}.evt</span>
      </div>
    </article>
  );
}
