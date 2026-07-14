import { XPWindow } from "@/components/cei-os/XPWindow";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

const procedureGroups = [
  {
    career: "Licenciatura en Sistemas de Información",
    shortName: "LSI",
    items: [
      "Cómo iniciar o consultar prácticas profesionales.",
      "Cambio de carrera o trayecto hacia Programador Universitario en Informática.",
      "Consultas sobre equivalencias, correlatividades y documentación académica."
    ]
  },
  {
    career: "Profesorado en Informática",
    shortName: "PI",
    items: [
      "Consultas sobre trayectos pedagógicos y prácticas docentes.",
      "Orientación para certificados, constancias y trámites frecuentes.",
      "Dudas sobre correlatividades y materias específicas de la carrera."
    ]
  },
  {
    career: "Programador Universitario en Informática",
    shortName: "PUI",
    items: [
      "Cambio de carrera o continuidad hacia Licenciatura en Sistemas de Información.",
      "Consultas sobre prácticas, equivalencias y cursado.",
      "Orientación para trámites académicos frecuentes."
    ]
  }
];

export const metadata = createPageMetadata({
  title: "Guía de trámites",
  description:
    "Guía de trámites académicos frecuentes para estudiantes de informática de la Universidad Nacional de Santiago del Estero.",
  path: "/guia-tramites"
});

export default function GuiaTramitesPage() {
  return (
    <PageShell>
      <Section>
        <XPWindow title="guia/tramites">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="terminal-text text-sm font-bold uppercase">manual rápido</p>
              <h1 className="mt-2 font-mono text-4xl font-black leading-tight text-cei-shadow">
                Guía de trámites
              </h1>
            </div>
            <div className="space-y-3 leading-7 text-slate-800">
              <p>
                Un espacio para reunir pasos, enlaces y recomendaciones sobre trámites frecuentes de las carreras de
                informática de la Universidad Nacional de Santiago del Estero.
              </p>
              <p className="text-sm font-bold text-cei-shadow">
                Esta sección puede crecer con aportes de estudiantes y consultas que se repitan durante el cursado.
              </p>
            </div>
          </div>
        </XPWindow>
      </Section>

      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {procedureGroups.map((group) => (
            <Card className="bg-white" key={group.shortName}>
              <div className="mb-4 flex items-start gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center border-2 border-cei-shadow bg-cei-alert font-mono text-sm font-black text-cei-shadow shadow-pixel">
                  {group.shortName}
                </span>
                <div>
                  <p className="font-mono text-xs font-black uppercase text-cei-shadow">carrera</p>
                  <h2 className="mt-1 font-mono text-xl font-black leading-tight text-cei-shadow">{group.career}</h2>
                </div>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-800">
                {group.items.map((item) => (
                  <li className="rounded-sm border border-cei-shadow/30 bg-cei-window px-3 py-2" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col gap-4 bg-cei-window sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs font-black uppercase text-cei-shadow">¿Falta algo?</p>
            <p className="mt-1 max-w-2xl leading-7 text-slate-800">
              Si hay un trámite que se repite o una guía que conviene sumar, podés avisarnos por los canales oficiales.
            </p>
          </div>
          <Button className="w-full sm:w-auto" href="/contacto" variant="secondary">
            Contacto
          </Button>
        </Card>
      </Section>
    </PageShell>
  );
}
