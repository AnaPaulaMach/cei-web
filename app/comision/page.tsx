import { XPWindow } from "@/components/cei-os/XPWindow";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { actionAreas, careerLinks, commissionMembers, institutionalDocuments } from "@/data/commission";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Comisión",
  description:
    "Quiénes somos, misión, visión, áreas de acción e integrantes de la Comisión de Estudiantes de Informática.",
  path: "/comision"
});

export default function ComisionPage() {
  return (
    <PageShell>
      <Section>
        <XPWindow title="comisión">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <h1 className="font-mono text-4xl font-black text-cei-shadow">Quiénes somos</h1>
              <div className="flex flex-wrap gap-2">
                {careerLinks.map((career) => (
                  <a
                    className="rounded-sm border border-cei-shadow/35 bg-white px-3 py-1.5 font-mono text-xs font-black text-cei-shadow transition hover:bg-cei-alert focus-visible:bg-cei-alert"
                    href={career.href}
                    key={career.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {career.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4 leading-7 text-slate-800">
              <p>
                Somos una organización estudiantil sin fines de lucro que representa a estudiantes de informática de la
                Universidad Nacional de Santiago del Estero.
              </p>
            </div>
          </div>
        </XPWindow>
      </Section>

      <Section>
        <Card className="bg-white">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-mono text-3xl font-black text-cei-shadow">Documentación institucional</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-700">
              Enlaces útiles para consultar cómo se organiza la Comisión y el aval institucional de la facultad.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {institutionalDocuments.map((document) => (
              <a
                className="block rounded-sm border border-cei-shadow/20 bg-cei-window p-4 text-cei-shadow transition hover:bg-[#fff7c2] focus-visible:bg-[#fff7c2]"
                href={document.href}
                key={document.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="font-mono text-xs font-black uppercase text-cei-shadow">Abrir documento</p>
                <h3 className="mt-2 font-mono text-lg font-black">{document.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-800">{document.description}</p>
              </a>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="space-y-6 bg-white">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-black uppercase text-cei-shadow">misión</p>
              <p className="mt-2 leading-7 text-slate-800">
                Representar a estudiantes de informática, dar visibilidad a sus actividades y tender un puente con la
                facultad.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-black uppercase text-cei-shadow">visión</p>
              <p className="mt-2 leading-7 text-slate-800">
                Construir una comunidad académica más fuerte, participativa y conectada con el mundo profesional.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="bg-cei-window">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-mono text-3xl font-black text-cei-shadow">Qué hacemos</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-700">
              Ejes de trabajo de la comisión durante el año.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {actionAreas.map((area) => (
              <div className="flex gap-3 rounded-sm border border-cei-shadow/15 bg-white p-4" key={area.title}>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-cei-alert font-mono text-xs font-black text-cei-shadow">
                  {area.shortcut}
                </span>
                <div>
                  <h3 className="font-mono text-base font-black text-cei-shadow">{area.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-800">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="bg-white">
          <div className="mb-5">
            <h2 className="font-mono text-3xl font-black text-cei-shadow">Comisión directiva 2026</h2>
          </div>
          <div className="divide-y-2 divide-cei-shadow/20 border-y-2 border-cei-shadow/20">
            {commissionMembers.map((member) => (
              <div className="grid gap-1 py-3 sm:grid-cols-[220px_1fr] sm:items-center" key={member.name}>
                <p className="font-mono text-xs font-black uppercase text-cei-shadow">{member.role}</p>
                <p className="font-bold text-slate-900">{member.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>
    </PageShell>
  );
}
