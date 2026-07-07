import Image from "next/image";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { EventBoard } from "@/components/events/EventBoard";
import { LinkHub } from "@/components/links/LinkHub";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Button } from "@/components/ui/Button";
import { DataNotice } from "@/components/ui/DataNotice";
import { Section } from "@/components/layout/Section";
import { contactLinks } from "@/data/commission";
import { getHomeEvents } from "@/lib/events";
import { getHomeOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  description:
    "Home oficial de la CEI de la Universidad Nacional de Santiago del Estero con tablero de eventos, oportunidades utiles y accesos de participacion estudiantil."
});

export default async function HomePage() {
  const [eventsResult, opportunitiesResult] = await Promise.all([
    getHomeEvents(),
    getHomeOpportunities()
  ]);
  const featuredOpportunities = opportunitiesResult.items;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 md:gap-10">
      <Section className="pt-0 lg:pt-8">
        <XPWindow title="CEI/welcome.exe" className="window-pop">
          <div className="space-y-5 md:space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="hidden h-20 w-20 shrink-0 place-items-center rounded-sm border border-cei-shadow/35 bg-white shadow-[3px_3px_0_rgba(15,42,95,0.22)] sm:grid">
                <Image
                  alt="Logo CEI"
                  className="h-16 w-16 object-contain"
                  height={64}
                  priority
                  src="/logo/logo_sin_fondo.png"
                  width={64}
                />
              </div>
              <div>
                <p className="terminal-text text-xs font-bold uppercase tracking-[0.14em] sm:text-sm sm:tracking-[0.18em]">
                  booting student community...
                </p>
                <p className="mt-2 w-fit max-w-full rounded-sm bg-cei-alert px-2 py-1 font-mono text-[10px] font-black uppercase text-cei-shadow shadow-[2px_2px_0_rgba(15,42,95,0.25)] sm:px-3 sm:text-xs">
                  Universidad Nacional de Santiago del Estero
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl font-mono text-3xl font-black leading-tight text-cei-shadow sm:text-4xl md:text-5xl">
                Comision de Estudiantes de Informatica
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
                Representamos a estudiantes de informatica de la Universidad Nacional de Santiago del Estero y
                acercamos eventos, oportunidades y canales de participacion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Button className="w-full sm:w-auto" href="#tablero">
                Ver tablero
              </Button>
              <Button className="w-full sm:w-auto" href="/contacto" variant="secondary">
                Sumate
              </Button>
            </div>
          </div>
        </XPWindow>
      </Section>

      <Section id="tablero">
        <div className="space-y-4">
          <DataNotice message={eventsResult.error} />
          <EventBoard events={eventsResult.items} />
        </div>
      </Section>

      <Section>
        <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="terminal-text text-sm font-bold uppercase">folder/oportunidades</p>
            <h2 className="font-mono text-2xl font-black text-white drop-shadow sm:text-3xl md:text-4xl">
              Oportunidades y novedades utiles
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white sm:text-base sm:leading-7">
              Cursos, becas, pasantias, busquedas laborales, convocatorias y recursos para estudiantes.
            </p>
          </div>
          <Button href="/oportunidades" variant="secondary">
            Ver carpeta completa
          </Button>
        </div>
        <DataNotice message={opportunitiesResult.error} />
        {featuredOpportunities.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm border-2 border-dashed border-cei-shadow bg-white p-6 text-center font-mono font-bold text-cei-shadow">
            No hay oportunidades cargadas por ahora.
          </div>
        )}
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <XPWindow title="quienes-somos.txt" className="h-full">
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="terminal-text text-sm font-bold uppercase">mission.loaded</p>
              <h2 className="font-mono text-2xl font-black text-cei-shadow sm:text-3xl">Quienes somos</h2>
              <p className="leading-7 text-slate-800">
                Somos una organizacion estudiantil sin fines de lucro que representa a las carreras de informatica de
                la Universidad Nacional de Santiago del Estero, acompana a estudiantes y da visibilidad a sus
                actividades dentro y fuera de la facultad.
              </p>
            </div>
            <Button href="/comision">Conocer la comision</Button>
          </div>
        </XPWindow>
        <LinkHub links={contactLinks} title="Conectate con CEI" />
      </Section>
    </div>
  );
}
