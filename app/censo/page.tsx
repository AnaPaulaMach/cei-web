import { XPWindow } from "@/components/cei-os/XPWindow";
import { Section } from "@/components/layout/Section";

export const metadata = {
  title: "Censo | CEI UNSE"
};

export default function CensoPage() {
  return (
    <Section className="mx-auto max-w-4xl">
      <XPWindow title="censo/formulario">
        <div className="space-y-4">
          <p className="terminal-text text-sm font-bold uppercase">input required</p>
          <h1 className="font-mono text-4xl font-black text-cei-shadow">Censo estudiantil</h1>
          <p className="leading-7 text-slate-800">
            Este formulario servira para relevar necesidades de estudiantes de las tres carreras.
          </p>
        </div>
      </XPWindow>
    </Section>
  );
}
