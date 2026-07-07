import { EventBoard } from "@/components/events/EventBoard";
import { Section } from "@/components/layout/Section";
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
    <Section className="mx-auto max-w-7xl space-y-8">
      <DataNotice message={eventsResult.error} />
      <EventBoard
        description="Actividades, avisos e inscripciones que vienen. La comisión puede cargarlos desde Supabase sin tocar código."
        emptyMessage="No hay eventos próximos cargados por ahora."
        events={upcomingEvents}
        highlightFirst={false}
        statusLabel="próximos"
        title="Próximos eventos"
        windowTitle="eventos/próximos.sys"
      />
      <EventBoard
        description="Historial de asambleas, charlas, actividades y participaciones ya realizadas por la CEI."
        emptyMessage="Todavía no hay eventos pasados cargados."
        events={pastEvents}
        highlightFirst={false}
        statusLabel="pasados"
        title="Eventos pasados"
        windowTitle="eventos/pasados.log"
      />
    </Section>
  );
}
