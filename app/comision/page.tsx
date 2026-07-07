import { XPWindow } from "@/components/cei-os/XPWindow";
import { Section } from "@/components/layout/Section";
import { actionAreas, commissionMembers } from "@/data/commission";

export const metadata = {
  title: "Comision | CEI UNSE"
};

export default function ComisionPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <Section>
        <XPWindow title="comision/presentacion">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="terminal-text text-sm font-bold uppercase">about cei</p>
              <h1 className="font-mono text-4xl font-black text-cei-shadow">Quienes somos</h1>
            </div>
            <p className="leading-7 text-slate-800">
              Representamos a estudiantes de Licenciatura en Sistemas de Informacion, Programador Universitario en
              Informatica y Profesorado en Informatica de la UNSE.
            </p>
          </div>
        </XPWindow>
      </Section>

      <Section className="grid gap-4 md:grid-cols-2">
        <XPWindow title="mision.txt">
          <p className="leading-7 text-slate-800">
            Representar a estudiantes de informatica, dar visibilidad a sus actividades y tender un puente entre
            estudiantes, docentes y autoridades.
          </p>
        </XPWindow>
        <XPWindow title="vision.txt">
          <p className="leading-7 text-slate-800">
            Formar una comunidad de profesionales eticos, proactivos e innovadores, con una carrera cada vez mas fuerte
            y reconocida.
          </p>
        </XPWindow>
      </Section>

      <Section>
        <h2 className="mb-5 font-mono text-3xl font-black text-white drop-shadow">Que hacemos</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {actionAreas.map((area) => (
            <XPWindow key={area.title} title={area.title}>
              <p className="text-sm leading-6 text-slate-800">{area.description}</p>
            </XPWindow>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-5 font-mono text-3xl font-black text-white drop-shadow">Comision directiva 2026</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {commissionMembers.map((member) => (
            <XPWindow key={member.name} title={member.role}>
              <p className="font-bold text-cei-shadow">{member.name}</p>
            </XPWindow>
          ))}
        </div>
      </Section>
    </div>
  );
}
