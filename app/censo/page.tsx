import { XPWindow } from "@/components/cei-os/XPWindow";
import { GoogleFormPanel } from "@/components/forms/GoogleFormPanel";
import { PageShell } from "@/components/layout/PageShell";
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
    <PageShell>
      <XPWindow title="censo/formulario">
        <div className="space-y-4">
          <p className="terminal-text ui-kicker">input required</p>
          <h1 className="text-4xl font-black text-cei-shadow">Censo estudiantil</h1>
          <p className="leading-7 text-slate-800">
            El censo ya está disponible para relevar necesidades de estudiantes de las tres carreras.
          </p>
          <GoogleFormPanel
            description="Completalo desde Google Forms. Las respuestas quedan administradas allí y no se guardan en la base pública del sitio."
            href={googleFormLinks.censo}
            title="Formulario del censo"
          />
        </div>
      </XPWindow>
    </PageShell>
  );
}
