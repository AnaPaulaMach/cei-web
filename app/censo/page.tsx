import { XPWindow } from "@/components/cei-os/XPWindow";
import { GoogleFormPanel } from "@/components/forms/GoogleFormPanel";
import { Section } from "@/components/layout/Section";
import { googleFormLinks } from "@/data/form-links";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Censo estudiantil",
  description:
    "Censo estudiantil de la CEI de la Universidad Nacional de Santiago del Estero para relevar necesidades de las carreras de informática.",
  path: "/censo"
});

export default function CensoPage() {
  return (
    <Section className="mx-auto max-w-4xl">
      <XPWindow title="censo/formulario">
        <div className="space-y-4">
          <p className="terminal-text text-sm font-bold uppercase">input required</p>
          <h1 className="font-mono text-4xl font-black text-cei-shadow">Censo estudiantil</h1>
          <p className="leading-7 text-slate-800">
            Este formulario servirá para relevar necesidades de estudiantes de las tres carreras.
          </p>
          <GoogleFormPanel
            description="El censo se responderá desde Google Forms. Así el sitio solo enlaza al formulario y los datos personales quedan administrados fuera de Supabase."
            href={googleFormLinks.censo}
            title="Formulario del censo"
          />
        </div>
      </XPWindow>
    </Section>
  );
}
