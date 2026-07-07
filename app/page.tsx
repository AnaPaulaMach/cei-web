import Image from "next/image";
import { DesktopIcon } from "@/components/cei-os/DesktopIcon";
import { TerminalPanel } from "@/components/cei-os/TerminalPanel";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { EventBoard } from "@/components/events/EventBoard";
import { LinkHub } from "@/components/links/LinkHub";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Button } from "@/components/ui/Button";
import { DataNotice } from "@/components/ui/DataNotice";
import { Section } from "@/components/layout/Section";
import { actionAreas, socialLinks } from "@/data/commission";
import { getHomeEvents } from "@/lib/events";
import { getHomeOpportunities } from "@/lib/opportunities";

export default async function HomePage() {
  const [eventsResult, opportunitiesResult] = await Promise.all([
    getHomeEvents(),
    getHomeOpportunities()
  ]);
  const featuredOpportunities = opportunitiesResult.items.slice(0, 4);
  const stats = [
    { label: "Carreras", value: "3" },
    { label: "Aniversario", value: "16/04" },
    { label: "Modo", value: "CEI OS" }
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-14">
      <Section className="grid gap-6 lg:min-h-[calc(100vh-168px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <XPWindow title="CEI_OS/welcome.exe" className="window-pop">
          <div className="space-y-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-sm border-2 border-cei-shadow bg-white shadow-pixel">
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
                <p className="terminal-text text-sm font-bold uppercase tracking-[0.18em]">
                  booting student community...
                </p>
                <p className="mt-2 w-fit rounded-sm border-2 border-cei-shadow bg-cei-alert px-3 py-1 font-mono text-xs font-black uppercase text-cei-shadow shadow-pixel">
                  UNSE / FCEyT / Informatica
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl font-mono text-4xl font-black leading-tight text-cei-shadow md:text-6xl">
                Comision de Estudiantes de Informatica
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-800">
                Representamos a estudiantes de informatica de la UNSE e impulsamos una comunidad estudiantil para
                aprender, participar, compartir oportunidades y construir proyectos.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/contacto">Sumate</Button>
              <Button href="#tablero" variant="secondary">
                Proximos eventos
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div className="rounded-sm border-2 border-cei-shadow bg-white px-4 py-3 shadow-pixel" key={stat.label}>
                  <p className="font-mono text-xs font-black uppercase text-cei-shadow">{stat.label}</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </XPWindow>

        <XPWindow title="desktop/accesos-directos" className="window-pop">
          <div className="grid grid-cols-2 gap-4">
            <DesktopIcon href="/eventos" label="Eventos" />
            <DesktopIcon href="/oportunidades" label="Oportunidades" />
            <DesktopIcon href="/hackathon" label="Hackathon" />
            <DesktopIcon href="/censo" label="Censo" />
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
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="terminal-text text-sm font-bold uppercase">folder/oportunidades</p>
            <h2 className="font-mono text-3xl font-black text-white drop-shadow md:text-4xl">
              Oportunidades y novedades utiles
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-white">
              Cursos, becas, pasantias, busquedas laborales, convocatorias y recursos para estudiantes.
            </p>
          </div>
          <Button href="/oportunidades" variant="secondary">
            Ver carpeta completa
          </Button>
        </div>
        <DataNotice message={opportunitiesResult.error} />
        {featuredOpportunities.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

      <Section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <XPWindow title="quienes-somos.txt" className="h-full">
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="terminal-text text-sm font-bold uppercase">mission.loaded</p>
              <h2 className="font-mono text-3xl font-black text-cei-shadow">Quienes somos</h2>
              <p className="leading-7 text-slate-800">
                Somos una organizacion estudiantil sin fines de lucro que representa a las carreras de informatica de
                la UNSE, acompana a estudiantes y da visibilidad a sus actividades dentro y fuera de la facultad.
              </p>
            </div>
            <Button href="/comision">Conocer la comision</Button>
          </div>
        </XPWindow>

        <div className="grid gap-4">
          <TerminalPanel
            lines={[
              "mision: representar estudiantes",
              "vision: comunidad profesional etica",
              "puente: estudiantes + docentes + autoridades",
              "estado: organizacion sin fines de lucro"
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="mb-5">
          <p className="terminal-text text-sm font-bold uppercase">modules/action-areas</p>
          <h2 className="font-mono text-3xl font-black text-white drop-shadow md:text-4xl">Que hacemos</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {actionAreas.map((area) => (
            <XPWindow key={area.title} title={area.title}>
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border-2 border-cei-shadow bg-cei-alert font-mono text-xs font-black text-cei-shadow shadow-pixel">
                  {area.shortcut}
                </span>
                <p className="text-sm leading-6 text-slate-800">{area.description}</p>
              </div>
            </XPWindow>
          ))}
        </div>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <TerminalPanel
          lines={[
            "cei@unse:~$ conectar --canales",
            "instagram: activo",
            "whatsapp: canal disponible",
            "discord: comunidad en linea",
            "mail: comisionlsiafines@gmail.com"
          ]}
        />
        <LinkHub links={socialLinks} title="Conectate con CEI" />
      </Section>
    </div>
  );
}
