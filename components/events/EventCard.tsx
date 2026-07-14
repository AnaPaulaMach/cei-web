import { Button } from "@/components/ui/Button";
import type { EventItem } from "@/types/events";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  const imageUrls = event.imageUrls?.slice(0, 2) ?? [];

  return (
    <article
      className={`overflow-hidden rounded-sm border border-cei-shadow/35 p-4 shadow-sm sm:p-5 ${
        event.highlighted ? "bg-[#fff7c2] md:col-span-2" : "bg-cei-window"
      }`}
    >
      {imageUrls.length > 0 ? (
        <div className="mb-4 grid gap-2 sm:grid-cols-2">
          {imageUrls.map((url, index) => (
            <div
              aria-label={`Imagen ${index + 1} de ${event.title}`}
              className="h-40 rounded-sm bg-cover bg-center sm:h-48"
              key={url}
              role="img"
              style={{ backgroundImage: `url(${JSON.stringify(url)})` }}
            />
          ))}
        </div>
      ) : null}
      <p className="mb-2 font-mono text-xs font-black uppercase text-cei-shadow">{event.category}</p>
      <h3
        className={`font-mono font-black leading-tight text-cei-shadow ${
          event.highlighted ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        {event.title}
      </h3>
      <dl className="mt-3 grid gap-3 border-y border-cei-shadow/15 py-3 text-sm text-slate-800 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-xs font-black uppercase text-cei-shadow">Fecha</dt>
          <dd className="font-bold">{event.date}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs font-black uppercase text-cei-shadow">Lugar</dt>
          <dd className="font-bold">{event.place}</dd>
        </div>
      </dl>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-800 sm:mt-4 sm:text-base sm:leading-7">
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
