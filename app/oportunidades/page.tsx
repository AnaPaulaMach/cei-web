import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { OpportunityFolder } from "@/components/opportunities/OpportunityFolder";
import { DataNotice } from "@/components/ui/DataNotice";
import { getAllOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Oportunidades",
  description:
    "Cursos, trabajos, prácticas y becas útiles para estudiantes de informática.",
  path: "/oportunidades"
});

export default async function OportunidadesPage() {
  const opportunitiesResult = await getAllOpportunities();

  return (
    <PageShell>
      <DataNotice message={opportunitiesResult.error} />
      <Section>
        <OpportunityFolder opportunities={opportunitiesResult.items} />
      </Section>
    </PageShell>
  );
}
