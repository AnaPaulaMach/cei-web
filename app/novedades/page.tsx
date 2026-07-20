import { EventBoard } from "@/components/events/EventBoard";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { OpportunityFolder } from "@/components/opportunities/OpportunityFolder";
import { DataNotice } from "@/components/ui/DataNotice";
import { getAllEvents } from "@/lib/events";
import { getAllOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Novedades",
  description:
    "Agenda de eventos, cursos, trabajos, prácticas y becas para estudiantes de informática de la Universidad Nacional de Santiago del Estero.",
  path: "/novedades"
});

type NovedadesPageProps = {
  searchParams: Promise<{ seccion?: string }>;
};

export default async function NovedadesPage({ searchParams }: NovedadesPageProps) {
  const params = await searchParams;
  const activeSection = params.seccion === "oportunidades" ? "oportunidades" : "agenda";
  const eventsResult = activeSection === "agenda" ? await getAllEvents() : null;
  const opportunitiesResult = activeSection === "oportunidades" ? await getAllOpportunities() : null;
  const upcomingEvents = eventsResult?.items.filter((event) => event.status === "proximo") ?? [];
  const pastEvents = eventsResult?.items.filter((event) => event.status === "pasado") ?? [];

  return (
    <PageShell>
      <Section>
        <XPWindow contentClassName="p-5 sm:p-6" showControls={false} title="Novedades">
          <p className="ui-kicker text-cei-terminal">Actualidad CEI</p>
          <h1 className="mt-2 text-4xl font-black text-cei-shadow">Novedades</h1>
          <p className="mt-3 max-w-2xl leading-7 text-slate-800">
            Eventos, cursos, trabajos, prácticas y becas para estudiantes de informática.
          </p>
          <nav aria-label="Contenido de novedades" className="mt-5 flex flex-wrap gap-3">
            <a
              aria-current={activeSection === "agenda" ? "page" : undefined}
              className={`inline-flex min-h-11 items-center rounded-sm border border-cei-shadow/45 px-4 text-sm font-bold text-cei-shadow transition ${
                activeSection === "agenda" ? "xp-button" : "bg-white/70 hover:bg-white"
              }`}
              href="/novedades?seccion=agenda"
            >
              Agenda
            </a>
            <a
              aria-current={activeSection === "oportunidades" ? "page" : undefined}
              className={`inline-flex min-h-11 items-center rounded-sm border border-cei-shadow/45 px-4 text-sm font-bold text-cei-shadow transition ${
                activeSection === "oportunidades" ? "xp-button" : "bg-white/70 hover:bg-white"
              }`}
              href="/novedades?seccion=oportunidades"
            >
              Oportunidades
            </a>
          </nav>
        </XPWindow>
      </Section>

      {activeSection === "agenda" && eventsResult ? (
        <>
          <DataNotice message={eventsResult.error} />
          <Section>
            <EventBoard
              description="Actividades, avisos e inscripciones que vienen."
              emptyMessage="No hay eventos próximos cargados por ahora."
              events={upcomingEvents}
              highlightFirst={false}
              statusLabel="próximos"
              title="Agenda"
              windowTitle="novedades/agenda.sys"
            />
          </Section>

          {pastEvents.length > 0 ? (
            <Section>
              <EventBoard
                description="Actividades ya realizadas por la CEI."
                events={pastEvents}
                highlightFirst={false}
                statusLabel="realizados"
                title="Ya pasó"
                windowTitle="novedades/archivo.log"
              />
            </Section>
          ) : null}
        </>
      ) : null}

      {activeSection === "oportunidades" && opportunitiesResult ? (
        <>
          <DataNotice message={opportunitiesResult.error} />
          <Section>
            <OpportunityFolder opportunities={opportunitiesResult.items} />
          </Section>
        </>
      ) : null}
    </PageShell>
  );
}
