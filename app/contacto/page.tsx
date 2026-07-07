import { XPWindow } from "@/components/cei-os/XPWindow";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { contactLinks } from "@/data/commission";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Canales oficiales de contacto de la CEI de la Universidad Nacional de Santiago del Estero: mail institucional, Instagram y canal de WhatsApp.",
  path: "/contacto"
});

export default function ContactoPage() {
  return (
    <Section className="mx-auto w-full max-w-5xl">
      <XPWindow title="contacto">
        <div className="space-y-7 lg:p-2">
          <div className="space-y-3">
            <p className="terminal-text text-sm font-bold uppercase">canales oficiales</p>
            <h1 className="font-mono text-4xl font-black text-cei-shadow">Contacto</h1>
            <p className="max-w-2xl leading-7 text-slate-800">
              Para consultas, propuestas o actividades, escribinos por los canales oficiales de la Comision.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contactLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  className="rounded-sm border border-cei-shadow bg-white p-5 text-cei-shadow shadow-pixel transition hover:-translate-y-0.5 hover:bg-cei-window"
                  href={link.href}
                  key={link.label}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  <span className="block font-mono text-xs font-black uppercase text-cei-shadow/75">
                    {isExternal ? "externo" : "mail"}
                  </span>
                  <span className="mt-2 block font-mono text-xl font-black">{link.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-700">{link.description}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="mailto:comisionlsiafines@gmail.com?subject=Consulta%20para%20la%20CEI">
              Escribir mail
            </Button>
            <Button href="https://whatsapp.com/channel/0029Vb7pCRx2kNFuudDotL3R" variant="secondary">
              Canal de WhatsApp
            </Button>
          </div>
        </div>
      </XPWindow>
    </Section>
  );
}
