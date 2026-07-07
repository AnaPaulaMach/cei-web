import { XPWindow } from "@/components/cei-os/XPWindow";
import { EventCard } from "@/components/events/EventCard";
import type { EventItem } from "@/types/events";

type EventBoardProps = {
  events: EventItem[];
  title?: string;
};

export function EventBoard({ events, title = "Tablero de destacados" }: EventBoardProps) {
  return (
    <XPWindow title="tablero/eventos">
      <div className="mb-5">
        <p className="terminal-text text-sm font-bold uppercase">events.sys</p>
        <h2 className="font-mono text-3xl font-black text-cei-shadow md:text-4xl">{title}</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </XPWindow>
  );
}
