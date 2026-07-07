import { XPWindow } from "@/components/cei-os/XPWindow";
import { Section } from "@/components/layout/Section";
import { OpportunityFolder } from "@/components/opportunities/OpportunityFolder";
import { DataNotice } from "@/components/ui/DataNotice";
import { getAllOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Oportunidades",
  description:
    "Cursos, becas, pasantias, trabajos, convocatorias, recursos y avisos utiles para estudiantes de informatica.",
  path: "/oportunidades"
});

export default async function OportunidadesPage() {
  const opportunitiesResult = await getAllOpportunities();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
      <Section>
        <XPWindow title="desktop/oportunidades">
          <div className="space-y-3">
            <p className="terminal-text text-sm font-bold uppercase">folder opened</p>
            <h1 className="font-mono text-4xl font-black text-cei-shadow">Oportunidades</h1>
            <p className="max-w-3xl leading-7 text-slate-800">
              Cursos, becas, pasantias, trabajos, recursos y convocatorias utiles para estudiantes de informatica.
            </p>
          </div>
        </XPWindow>
      </Section>
      <DataNotice message={opportunitiesResult.error} />
      <Section>
        <OpportunityFolder opportunities={opportunitiesResult.items} />
      </Section>
    </div>
  );
}
