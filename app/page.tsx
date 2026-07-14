import { XPWindow } from "@/components/cei-os/XPWindow";
import { EventBoard } from "@/components/events/EventBoard";
import { LinkHub } from "@/components/links/LinkHub";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Button } from "@/components/ui/Button";
import { DataNotice } from "@/components/ui/DataNotice";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { contactLinks } from "@/data/commission";
import { getHomeEvents } from "@/lib/events";
import { getHomeOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  description:
    "Home oficial de la CEI de la Universidad Nacional de Santiago del Estero con eventos, oportunidades útiles y accesos de participación estudiantil."
});

export default async function HomePage() {
  const [eventsResult, opportunitiesResult] = await Promise.all([
    getHomeEvents(),
    getHomeOpportunities()
  ]);
  const homeOpportunities = opportunitiesResult.items.slice(0, 2);
  const mobileEvents = eventsResult.items.slice(0, 1);

  return (
    <PageShell spacing="compact">
      <Section className="lg:hidden">
        <div className="rounded-sm bg-cei-window/95 p-4">
          <p className="mb-2 w-fit rounded-sm bg-cei-alert px-2 py-1 font-mono text-[10px] font-black uppercase text-cei-shadow">
            CEI UNSE
          </p>
          <h1 className="font-mono text-2xl font-black leading-tight text-cei-shadow">
            Comisión de Estudiantes de Informática
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-800">
            Eventos y oportunidades para estudiantes de informática de la Universidad Nacional de Santiago del Estero.
          </p>
        </div>
      </Section>

      <Section className="hidden pt-4 lg:block">
        <XPWindow title="CEI/welcome.exe" className="window-pop">
          <div className="space-y-5">
            <p className="w-fit max-w-full rounded-sm bg-cei-alert px-3 py-1 font-mono text-xs font-black uppercase text-cei-shadow">
              Universidad Nacional de Santiago del Estero
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl font-mono text-5xl font-black leading-tight text-cei-shadow">
                Comisión de Estudiantes de Informática
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-800">
                Representamos a estudiantes de informática y acercamos eventos, oportunidades y canales de participación.
              </p>
            </div>
            <Button href="#tablero">Ver próximos eventos</Button>
          </div>
        </XPWindow>
      </Section>

      <Section id="tablero">
        <div className="space-y-3 lg:hidden">
          <DataNotice message={eventsResult.error} />
          <div className="rounded-sm bg-cei-window/95 p-4">
            <h2 className="font-mono text-2xl font-black text-cei-shadow">Próximo evento</h2>
            {mobileEvents.length > 0 ? (
              mobileEvents.map((event) => (
                <article className="mt-3 border-t border-cei-shadow/20 pt-3" key={event.id}>
                  <p className="font-mono text-[11px] font-black uppercase text-cei-shadow">
                    {event.category} · {event.date}
                  </p>
                  <h3 className="mt-2 font-mono text-lg font-black leading-tight text-cei-shadow">{event.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-700">{event.description}</p>
                  <Button className="mt-3 !min-h-9 px-3 py-1.5 text-xs" href={event.href} variant="secondary">
                    {event.cta}
                  </Button>
                </article>
              ))
            ) : (
              <p className="mt-3 text-sm font-bold text-cei-shadow">No hay eventos cargados por ahora.</p>
            )}
            <Button className="mt-4 w-full text-xs" href="/eventos">
              Ver todos los eventos
            </Button>
          </div>
        </div>

        <div className="hidden space-y-4 lg:block">
          <DataNotice message={eventsResult.error} />
          <EventBoard events={eventsResult.items} />
        </div>
      </Section>

      <Section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-mono text-2xl font-black text-white drop-shadow lg:text-4xl">
              Oportunidades útiles
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 lg:text-base">
              Cursos, trabajos, prácticas y becas para estudiantes de informática.
            </p>
          </div>
          <Button className="hidden lg:inline-flex" href="/oportunidades" variant="secondary">
            Ver todas
          </Button>
        </div>
        <DataNotice message={opportunitiesResult.error} />

        {homeOpportunities.length > 0 ? (
          <>
            <div className="divide-y divide-cei-shadow/15 rounded-sm bg-white lg:hidden">
              {homeOpportunities.map((opportunity) => (
                <article className="p-4" key={opportunity.id}>
                  <p className="font-mono text-[10px] font-black uppercase text-cei-shadow">{opportunity.category}</p>
                  <h3 className="mt-1 font-mono text-lg font-black leading-tight text-cei-shadow">
                    {opportunity.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">{opportunity.source}</p>
                  {opportunity.href ? (
                    <Button className="mt-3 !min-h-9 px-3 py-1.5 text-xs" href={opportunity.href} variant="secondary">
                      Abrir enlace
                    </Button>
                  ) : null}
                </article>
              ))}
            </div>
            <Button className="mt-3 w-full text-xs lg:hidden" href="/oportunidades" variant="secondary">
              Ver oportunidades
            </Button>
            <div className="hidden gap-4 lg:grid lg:grid-cols-2">
              {homeOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-sm bg-white p-5 text-center font-mono text-sm font-bold text-cei-shadow">
            No hay oportunidades cargadas por ahora.
          </div>
        )}
      </Section>

      <Section>
        <LinkHub links={contactLinks} title="Conectate con CEI" />
      </Section>
    </PageShell>
  );
}
