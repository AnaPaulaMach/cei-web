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
              <p className="terminal-text ui-kicker">about cei</p>
              <h1 className="text-4xl font-black text-cei-shadow">Quiénes somos</h1>
              <div className="flex flex-wrap gap-2">
                {careerLinks.map((career) => (
                  <a
                    className="inline-flex min-h-11 items-center rounded-sm border border-cei-shadow/60 bg-white px-3 text-sm font-semibold text-cei-shadow transition hover:bg-cei-alert focus-visible:bg-cei-alert"
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
        <Card className="bg-[#eef2f7]">
          <div className="mb-5">
            <div>
              <p className="terminal-text ui-kicker">documentos</p>
              <h2 className="text-3xl font-black text-cei-shadow">Documentación institucional</h2>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {institutionalDocuments.map((document) => (
              <a
                className="block rounded-sm border border-cei-shadow/55 bg-white p-4 text-cei-shadow shadow-[0_4px_12px_rgba(3,9,20,0.14)] transition hover:-translate-y-0.5 hover:bg-[#fff7c2] focus-visible:bg-[#fff7c2]"
                href={document.href}
                key={document.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="ui-meta-label text-cei-shadow">Abrir documento</p>
                <h3 className="mt-2 text-lg font-bold">{document.label}</h3>
                <p className="ui-small-copy mt-2 text-slate-800">{document.description}</p>
              </a>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="space-y-6 bg-[#eef2f7]">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="ui-kicker text-cei-shadow">misión</p>
              <p className="mt-2 leading-7 text-slate-800">
                Representar a estudiantes de informática, dar visibilidad a sus actividades y tender un puente con la
                facultad.
              </p>
            </div>
            <div>
              <p className="ui-kicker text-cei-shadow">visión</p>
              <p className="mt-2 leading-7 text-slate-800">
                Construir una comunidad académica más fuerte, participativa y conectada con el mundo profesional.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="bg-[#eef2f7]">
          <div className="mb-5">
            <div>
              <p className="terminal-text ui-kicker">áreas</p>
              <h2 className="text-3xl font-black text-cei-shadow">Qué hacemos</h2>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {actionAreas.map((area) => (
              <div className="flex gap-3 rounded-sm border border-cei-shadow/45 bg-white p-4" key={area.title}>
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-cei-shadow/60 bg-cei-alert font-mono text-xs font-black text-cei-shadow">
                  {area.shortcut}
                </span>
                <div>
                  <h3 className="text-base font-bold text-cei-shadow">{area.title}</h3>
                  <p className="ui-small-copy mt-1 text-slate-800">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="bg-[#eef2f7]">
          <div className="mb-5">
            <p className="terminal-text ui-kicker">directiva</p>
            <h2 className="text-3xl font-black text-cei-shadow">Comisión directiva 2026</h2>
          </div>
          <div className="divide-y divide-cei-shadow/20 border-y border-cei-shadow/20">
            {commissionMembers.map((member) => (
              <div className="grid gap-1 py-3 sm:grid-cols-[220px_1fr] sm:items-center" key={member.name}>
                <p className="ui-meta-label text-cei-shadow">{member.role}</p>
                <p className="font-semibold text-slate-900">{member.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>
    </PageShell>
  );
}
