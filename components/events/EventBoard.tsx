import { XPWindow } from "@/components/cei-os/XPWindow";
import { EventCard } from "@/components/events/EventCard";
import type { EventItem } from "@/types/events";

type EventBoardProps = {
  events: EventItem[];
  description?: string;
  emptyMessage?: string;
  highlightFirst?: boolean;
  statusLabel?: string;
  title?: string;
  windowTitle?: string;
};

export function EventBoard({
  description = "Eventos, avisos y actividades importantes para estudiantes de informatica.",
  emptyMessage = "No hay eventos cargados por ahora.",
  events,
  highlightFirst = true,
  statusLabel = "avisos activos",
  title = "Tablero de destacados",
  windowTitle = "tablero/destacados.sys"
}: EventBoardProps) {
  const orderedEvents = highlightFirst
    ? [...events].sort((a, b) => Number(Boolean(b.highlighted)) - Number(Boolean(a.highlighted)))
    : events;

  return (
    <XPWindow title={windowTitle}>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="terminal-text text-sm font-bold uppercase">events.sys</p>
          <h2 className="font-mono text-3xl font-black text-cei-shadow md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl leading-7 text-slate-800">{description}</p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-sm border-2 border-cei-shadow bg-white px-3 py-2 font-mono text-xs font-black text-cei-shadow shadow-pixel">
          <span className="h-3 w-3 animate-pulse rounded-full bg-cei-terminal" />
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
        <div className="rounded-sm border-2 border-dashed border-cei-shadow bg-white p-6 text-center font-mono font-bold text-cei-shadow">
          {emptyMessage}
        </div>
      )}
    </XPWindow>
  );
}
