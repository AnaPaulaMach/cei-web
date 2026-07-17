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
  description = "Eventos, avisos y actividades importantes para estudiantes de informática.",
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
      <div className="mb-4 flex flex-col gap-3 sm:mb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="terminal-text text-xs font-bold uppercase sm:text-sm">events.sys</p>
          <h2 className="text-2xl font-black text-cei-shadow sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-800 sm:text-base sm:leading-7">
            {description}
          </p>
        </div>
        <div className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm border border-cei-shadow/50 bg-white/80 px-3 font-mono text-[11px] font-black text-cei-shadow sm:text-xs">
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
        <div className="rounded-sm border border-dashed border-cei-shadow bg-white p-6 text-center font-mono font-bold text-cei-shadow">
          {emptyMessage}
        </div>
      )}
    </XPWindow>
  );
}
