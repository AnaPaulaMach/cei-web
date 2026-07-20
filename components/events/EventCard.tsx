import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { EventItem } from "@/types/events";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  const imageUrls = event.imageUrls?.slice(0, 2) ?? [];

  return (
    <article
      className={`group relative overflow-hidden rounded-sm border border-cei-shadow/60 p-4 shadow-[0_6px_16px_rgba(3,9,20,0.18)] transition hover:-translate-y-0.5 sm:p-5 ${
        event.highlighted ? "bg-[#fff7c2] md:col-span-2" : "bg-cei-window"
      }`}
    >
      <div className="absolute right-3 top-3 hidden font-mono text-5xl font-black text-cei-shadow/10 sm:block">
        {event.category.slice(0, 2).toUpperCase()}
      </div>
      {imageUrls.length > 0 ? (
        <div className="mb-4 grid gap-2 sm:grid-cols-2">
          {imageUrls.map((url, index) => (
            <div
              aria-label={`Imagen ${index + 1} de ${event.title}`}
              className="h-40 rounded-sm border border-cei-shadow/60 bg-cover bg-center sm:h-48"
              key={url}
              role="img"
              style={{ backgroundImage: `url(${JSON.stringify(url)})` }}
            />
          ))}
        </div>
      ) : null}
      <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4 sm:pr-16">
        <Badge>{event.category}</Badge>
        {event.statusLabel ? <Badge>{event.statusLabel}</Badge> : null}
      </div>
      <h3
        className={`font-black leading-tight text-cei-shadow ${
          event.highlighted ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl"
        }`}
      >
        {event.title}
      </h3>
      <dl className="mt-3 grid gap-2 text-slate-800 sm:mt-4 sm:grid-cols-2">
        <div className="rounded-sm border border-cei-shadow/35 bg-white/80 px-3 py-2">
          <dt className="ui-meta-label text-cei-shadow">{event.dateTitle ?? "Fecha"}</dt>
          <dd className="ui-meta-value mt-0.5">{event.date}</dd>
        </div>
        <div className="rounded-sm border border-cei-shadow/35 bg-white/80 px-3 py-2">
          <dt className="ui-meta-label text-cei-shadow">Lugar</dt>
          <dd className="ui-meta-value mt-0.5">{event.place}</dd>
        </div>
      </dl>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-800 sm:mt-4">
        {event.description}
      </p>
      <div className="mt-4 sm:mt-5">
        <Button href={event.href} variant={event.highlighted ? "primary" : "secondary"}>
          {event.cta}
        </Button>
      </div>
    </article>
  );
}
