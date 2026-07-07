import { XPWindow } from "@/components/cei-os/XPWindow";
import { LinkHub } from "@/components/links/LinkHub";
import { Section } from "@/components/layout/Section";
import { socialLinks } from "@/data/commission";

export const metadata = {
  title: "Contacto | CEI UNSE"
};

export default function ContactoPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.8fr]">
      <Section>
        <XPWindow title="contacto/mensaje">
          <div className="space-y-4">
            <p className="terminal-text text-sm font-bold uppercase">send message</p>
            <h1 className="font-mono text-4xl font-black text-cei-shadow">Contacto</h1>
            <p className="leading-7 text-slate-800">
              Aca va el formulario para consultas, propuestas y mensajes para la comision.
            </p>
          </div>
        </XPWindow>
      </Section>
      <Section>
        <LinkHub links={socialLinks} title="Accesos directos" />
      </Section>
    </div>
  );
}
