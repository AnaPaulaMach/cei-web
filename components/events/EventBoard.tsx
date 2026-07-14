import { EventCard } from "@/components/events/EventCard";
import type { EventItem } from "@/types/events";

type EventBoardProps = {
  events: EventItem[];
  description?: string;
  emptyMessage?: string;
  highlightFirst?: boolean;
  statusLabel?: string;
  title?: string;
};

export function EventBoard({
  description = "Eventos, avisos y actividades importantes para estudiantes de informática.",
  emptyMessage = "No hay eventos cargados por ahora.",
  events,
  highlightFirst = true,
  statusLabel = "avisos activos",
  title = "Tablero de destacados"
}: EventBoardProps) {
  const orderedEvents = highlightFirst
    ? [...events].sort((a, b) => Number(Boolean(b.highlighted)) - Number(Boolean(a.highlighted)))
    : events;

  return (
    <div className="rounded-sm bg-cei-window/95 p-4 sm:p-6">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="font-mono text-2xl font-black text-cei-shadow sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-800 sm:text-base sm:leading-7">
            {description}
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 font-mono text-xs font-black text-cei-shadow">
          <span className="h-2 w-2 rounded-full bg-cei-terminal" />
          {events.length} {statusLabel}
        </div>
      </div>

      {orderedEvents.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {orderedEvents.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      ) : (
        <div className="rounded-sm bg-white p-6 text-center font-mono font-bold text-cei-shadow">
          {emptyMessage}
        </div>
      )}
    </div>
  );
}
