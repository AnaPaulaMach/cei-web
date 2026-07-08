import { XPWindow } from "@/components/cei-os/XPWindow";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { OpportunityFolder } from "@/components/opportunities/OpportunityFolder";
import { DataNotice } from "@/components/ui/DataNotice";
import { getAllOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Oportunidades",
  description:
    "Cursos, becas, pasantías, trabajos, convocatorias, recursos y avisos útiles para estudiantes de informática.",
  path: "/oportunidades"
});

export default async function OportunidadesPage() {
  const opportunitiesResult = await getAllOpportunities();

  return (
    <PageShell>
      <Section>
        <XPWindow title="desktop/oportunidades">
          <div className="space-y-3">
            <p className="terminal-text text-sm font-bold uppercase">folder opened</p>
            <h1 className="font-mono text-4xl font-black text-cei-shadow">Oportunidades</h1>
            <p className="max-w-3xl leading-7 text-slate-800">
              Cursos, becas, pasantías, trabajos, recursos y convocatorias útiles para estudiantes de informática.
            </p>
          </div>
        </XPWindow>
      </Section>
      <DataNotice message={opportunitiesResult.error} />
      <Section>
        <OpportunityFolder opportunities={opportunitiesResult.items} />
      </Section>
    </PageShell>
  );
}
