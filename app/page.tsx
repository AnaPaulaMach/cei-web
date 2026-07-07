import { DesktopIcon } from "@/components/cei-os/DesktopIcon";
import { TerminalPanel } from "@/components/cei-os/TerminalPanel";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { EventBoard } from "@/components/events/EventBoard";
import { LinkHub } from "@/components/links/LinkHub";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { actionAreas, socialLinks } from "@/data/commission";
import { mockEvents } from "@/data/mock-events";
import { mockOpportunities } from "@/data/mock-opportunities";

export default function HomePage() {
  const featuredOpportunities = mockOpportunities.slice(0, 4);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      <Section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <XPWindow title="CEI_OS/welcome.exe">
          <div className="space-y-6">
            <p className="terminal-text text-sm font-bold uppercase tracking-[0.18em]">
              booting student community...
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl font-mono text-4xl font-black leading-tight text-cei-shadow md:text-6xl">
                Comision de Estudiantes de Informatica
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-800">
                Representamos a estudiantes de informatica de la UNSE y construimos una comunidad academica,
                tecnica y humana para aprender, participar y crear.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contacto">Sumate</Button>
              <Button href="#tablero" variant="secondary">
                Proximos eventos
              </Button>
            </div>
          </div>
        </XPWindow>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
          <DesktopIcon href="/eventos" label="Eventos" />
          <DesktopIcon href="/oportunidades" label="Oportunidades" />
          <DesktopIcon href="/hackathon" label="Hackathon" />
          <DesktopIcon href="/censo" label="Censo" />
        </div>
      </Section>

      <Section id="tablero">
        <EventBoard events={mockEvents} />
      </Section>

      <Section>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="terminal-text text-sm font-bold uppercase">folder/oportunidades</p>
            <h2 className="font-mono text-3xl font-black text-white drop-shadow md:text-4xl">
              Oportunidades y novedades utiles
            </h2>
          </div>
          <Button href="/oportunidades" variant="secondary">
            Ver carpeta completa
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <XPWindow title="quienes-somos.txt">
          <div className="space-y-4">
            <h2 className="font-mono text-3xl font-black text-cei-shadow">Quienes somos</h2>
            <p className="leading-7 text-slate-800">
              Somos una organizacion estudiantil sin fines de lucro que acompana, representa y da visibilidad a las
              carreras de informatica de la Facultad de Ciencias Exactas y Tecnologias.
            </p>
            <Button href="/comision">Conocer la comision</Button>
          </div>
        </XPWindow>
        <div className="grid gap-4 md:grid-cols-2">
          {actionAreas.map((area) => (
            <XPWindow key={area.title} title={area.title}>
              <p className="text-sm leading-6 text-slate-800">{area.description}</p>
            </XPWindow>
          ))}
        </div>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <TerminalPanel
          lines={[
            "cei@unse:~$ conectar",
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
