import { EventBoard } from "@/components/events/EventBoard";
import { PageShell } from "@/components/layout/PageShell";
import { DataNotice } from "@/components/ui/DataNotice";
import { getAllEvents } from "@/lib/events";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Eventos",
  description:
    "Eventos, asambleas, charlas, congresos y actividades de la CEI de la Universidad Nacional de Santiago del Estero.",
  path: "/eventos"
});

export default async function EventosPage() {
  const eventsResult = await getAllEvents();
  const upcomingEvents = eventsResult.items.filter((event) => event.status === "proximo");
  const pastEvents = eventsResult.items.filter((event) => event.status === "pasado");

  return (
    <PageShell>
      <DataNotice message={eventsResult.error} />
      <EventBoard
        description="Actividades, avisos e inscripciones que vienen."
        emptyMessage="No hay eventos próximos cargados por ahora."
        events={upcomingEvents}
        highlightFirst={false}
        statusLabel="próximos"
        title="Próximos eventos"
        windowTitle="eventos/próximos.sys"
      />
      <EventBoard
        description="Asambleas, charlas y actividades ya realizadas por la CEI."
        emptyMessage="Todavía no hay eventos pasados cargados."
        events={pastEvents}
        highlightFirst={false}
        statusLabel="pasados"
        title="Eventos pasados"
        windowTitle="eventos/pasados.log"
      />
    </PageShell>
  );
}
