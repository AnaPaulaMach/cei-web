import { XPWindow } from "@/components/cei-os/XPWindow";
import { Section } from "@/components/layout/Section";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { mockOpportunities } from "@/data/mock-opportunities";

export const metadata = {
  title: "Oportunidades | CEI UNSE"
};

export default function OportunidadesPage() {
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
      <Section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockOpportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </Section>
    </div>
  );
}
