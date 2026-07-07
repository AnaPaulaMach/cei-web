import { XPWindow } from "@/components/cei-os/XPWindow";
import { Section } from "@/components/layout/Section";
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
    <Section className="mx-auto my-auto w-full max-w-6xl">
      <XPWindow title="contacto">
        <div className="space-y-8 lg:p-2">
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
                  className="group relative overflow-hidden rounded-sm border border-cei-shadow bg-white p-5 pr-20 text-cei-shadow shadow-pixel transition hover:-translate-y-0.5 hover:bg-[#fff7c2]"
                  href={link.href}
                  key={link.label}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 rotate-3 rounded-sm border-2 border-cei-shadow bg-cei-alert px-2 py-1 text-center font-mono text-[10px] font-black uppercase leading-none text-cei-shadow shadow-[2px_2px_0_rgba(15,42,95,0.3)] transition group-hover:rotate-0 group-hover:scale-105"
                  >
                    click
                    <br />
                    aqui
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-4 font-mono text-2xl font-black text-cei-shadow/25 transition group-hover:translate-x-1 group-hover:text-cei-shadow"
                  >
                    &gt;&gt;
                  </span>
                  <span className="block font-mono text-xs font-black uppercase text-cei-shadow/75">
                    {isExternal ? "externo" : "mail"}
                  </span>
                  <span className="mt-2 block font-mono text-xl font-black">{link.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-700">{link.description}</span>
                </a>
              );
            })}
          </div>
        </div>
      </XPWindow>
    </Section>
  );
}
