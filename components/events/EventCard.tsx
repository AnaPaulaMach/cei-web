import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { EventItem } from "@/types/events";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-sm border-2 border-cei-shadow p-4 shadow-pixel transition hover:-translate-y-1 sm:p-5 ${
        event.highlighted ? "bg-[#fff7c2] md:col-span-2" : "bg-cei-window"
      }`}
    >
      <div className="absolute right-3 top-3 hidden font-mono text-5xl font-black text-cei-shadow/10 sm:block">
        {event.category.slice(0, 2).toUpperCase()}
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4 sm:pr-16">
        <Badge>{event.category}</Badge>
        {event.highlighted ? <Badge>Destacado</Badge> : null}
        {event.statusLabel ? <Badge>{event.statusLabel}</Badge> : null}
      </div>
      <h3
        className={`font-mono font-black leading-tight text-cei-shadow ${
          event.highlighted ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl"
        }`}
      >
        {event.title}
      </h3>
      <dl className="mt-3 grid gap-2 text-sm text-slate-800 sm:mt-4 sm:grid-cols-2">
        <div className="rounded-sm border border-cei-shadow bg-white px-3 py-2">
          <dt className="font-mono text-xs font-black uppercase text-cei-shadow">Fecha</dt>
          <dd className="font-bold">{event.date}</dd>
        </div>
        <div className="rounded-sm border border-cei-shadow bg-white px-3 py-2">
          <dt className="font-mono text-xs font-black uppercase text-cei-shadow">Lugar</dt>
          <dd className="font-bold">{event.place}</dd>
        </div>
      </dl>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-800 sm:mt-4 sm:text-base sm:leading-7">
        {event.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
        <Button href={event.href} variant={event.highlighted ? "primary" : "secondary"}>
          {event.cta}
        </Button>
        <span className="hidden font-mono text-xs font-bold uppercase text-cei-shadow/80 sm:inline">
          archivo: {event.id}.evt
        </span>
      </div>
    </article>
  );
}
