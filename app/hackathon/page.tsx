import { TerminalPanel } from "@/components/cei-os/TerminalPanel";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Hackathon | CEI UNSE"
};

export default function HackathonPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
      <Section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <XPWindow title="hackathon/event-mode.exe">
          <div className="space-y-6">
            <p className="terminal-text text-sm font-bold uppercase">programmer day loading</p>
            <h1 className="font-mono text-4xl font-black text-cei-shadow md:text-6xl">
              Hackathon del Dia del Programador
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-800">
              Una pagina propia para presentar desafios, cronograma, sponsors e inscripcion.
            </p>
            <Button href="#inscripcion">Inscribirme</Button>
          </div>
        </XPWindow>
        <TerminalPanel lines={["build team", "choose challenge", "ship project", "demo day"]} />
      </Section>

      <Section id="inscripcion">
        <XPWindow title="inscripcion/formulario">
          <p className="leading-7 text-slate-800">
            El formulario se conectara con Supabase en los proximos pasos del plan.
          </p>
        </XPWindow>
      </Section>
    </div>
  );
}
