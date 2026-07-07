import { TerminalPanel } from "@/components/cei-os/TerminalPanel";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { LinkHub } from "@/components/links/LinkHub";
import { QuickActionPanel } from "@/components/links/QuickActionPanel";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { contactActionLinks, contactLinks } from "@/data/commission";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Canales oficiales de contacto de la CEI de la Universidad Nacional de Santiago del Estero: mail institucional, Instagram y canal de WhatsApp.",
  path: "/contacto"
});

export default function ContactoPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.85fr]">
      <Section className="grid gap-6">
        <XPWindow title="contacto/mensaje">
          <div className="space-y-5">
            <p className="terminal-text text-sm font-bold uppercase">contact channels</p>
            <h1 className="font-mono text-4xl font-black text-cei-shadow">Contacto</h1>
            <p className="leading-7 text-slate-800">
              Para consultas, propuestas, avisos o actividades, escribinos por los canales oficiales. Por ahora no
              usamos un formulario interno en el sitio.
            </p>
            <div className="grid gap-3">
              <div className="rounded-sm border-2 border-cei-shadow bg-white p-4 shadow-pixel">
                <p className="font-mono text-xs font-black uppercase text-cei-shadow">mail institucional</p>
                <p className="mt-1 break-words text-lg font-black text-slate-900">comisionlsiafines@gmail.com</p>
              </div>
              <div className="rounded-sm border-2 border-cei-shadow bg-white p-4 shadow-pixel">
                <p className="font-mono text-xs font-black uppercase text-cei-shadow">discord</p>
                <p className="mt-1 font-bold text-slate-800">Por ahora no usamos este canal.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:comisionlsiafines@gmail.com">Escribir mail</Button>
              <Button href="https://www.instagram.com/cei.unse/" variant="secondary">
                Ir a Instagram
              </Button>
            </div>
          </div>
        </XPWindow>
        <TerminalPanel
          lines={[
            "contacto.estado = canales_oficiales",
            "mail = comisionlsiafines@gmail.com",
            "instagram = @cei.unse",
            "whatsapp = canal_de_avisos",
            "discord = offline"
          ]}
        />
        <QuickActionPanel
          actions={contactActionLinks}
          subtitle="Elegí segun lo que queres hacer. Menos vueltas, mas accion."
          title="Necesito..."
        />
      </Section>
      <Section>
        <LinkHub links={contactLinks} title="Accesos directos" />
      </Section>
    </div>
  );
}
