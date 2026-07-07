import { EventBoard } from "@/components/events/EventBoard";
import { Section } from "@/components/layout/Section";
import { DataNotice } from "@/components/ui/DataNotice";
import { getAllEvents } from "@/lib/events";

export const metadata = {
  title: "Eventos | CEI UNSE"
};

export default async function EventosPage() {
  const eventsResult = await getAllEvents();
  const upcomingEvents = eventsResult.items.filter((event) => event.status === "proximo");
  const pastEvents = eventsResult.items.filter((event) => event.status === "pasado");

  return (
    <Section className="mx-auto max-w-7xl space-y-8">
      <DataNotice message={eventsResult.error} />
      <EventBoard
        description="Actividades, avisos e inscripciones que vienen. La comision puede cargarlos desde Supabase sin tocar codigo."
        emptyMessage="No hay eventos proximos cargados por ahora."
        events={upcomingEvents}
        highlightFirst={false}
        statusLabel="proximos"
        title="Proximos eventos"
        windowTitle="eventos/proximos.sys"
      />
      <EventBoard
        description="Historial de asambleas, charlas, actividades y participaciones ya realizadas por la CEI."
        emptyMessage="Todavia no hay eventos pasados cargados."
        events={pastEvents}
        highlightFirst={false}
        statusLabel="pasados"
        title="Eventos pasados"
        windowTitle="eventos/pasados.log"
      />
    </Section>
  );
}
