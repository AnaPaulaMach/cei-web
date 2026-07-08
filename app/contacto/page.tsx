import Image from "next/image";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { PageShell } from "@/components/layout/PageShell";
import { contactLinks } from "@/data/commission";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Canales oficiales de contacto de la CEI de la Universidad Nacional de Santiago del Estero: mail institucional, Instagram y canal de WhatsApp.",
  path: "/contacto"
});

const contactPriority = ["Instagram", "Canal de WhatsApp", "Mail"];
const orderedContactLinks = contactPriority
  .map((label) => contactLinks.find((link) => link.label === label))
  .filter((link): link is (typeof contactLinks)[number] => Boolean(link));

export default function ContactoPage() {
  return (
    <PageShell className="my-auto">
      <XPWindow title="contacto">
        <div className="space-y-8 lg:p-2">
          <div className="space-y-3">
            <div className="space-y-3">
              <p className="terminal-text text-sm font-bold uppercase">canales oficiales</p>
              <h1 className="font-mono text-4xl font-black text-cei-shadow">Contacto</h1>
              <p className="max-w-2xl leading-7 text-slate-800">
                Para consultas, propuestas o actividades, escribinos por los canales oficiales de la Comisión.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {orderedContactLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const isInstagram = link.label === "Instagram";
              const isWhatsApp = link.label === "Canal de WhatsApp";

              return (
                <a
                  className="group relative min-h-40 overflow-hidden rounded-sm border border-cei-shadow bg-white p-5 text-cei-shadow shadow-pixel transition hover:-translate-y-0.5 hover:bg-[#fff7c2]"
                  href={link.href}
                  key={link.label}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
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
                  <span className="mt-2 block max-w-[15rem] text-sm leading-6 text-slate-700">{link.description}</span>
                  {isInstagram ? (
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-2 left-4 h-14 w-auto object-contain opacity-95 transition group-hover:-translate-y-1 sm:h-16"
                      height={74}
                      src="/stickers/contacto-click-smiley.png"
                      width={120}
                    />
                  ) : null}
                  {isWhatsApp ? (
                    <span className="absolute bottom-4 left-5 rotate-[-2deg] rounded-sm border-2 border-cei-shadow bg-cei-alert px-3 py-2 text-center font-mono text-[11px] font-black uppercase leading-none text-cei-shadow shadow-[2px_2px_0_rgba(15,42,95,0.3)]">
                      click
                      <br />
                      aquí
                    </span>
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>
      </XPWindow>
    </PageShell>
  );
}
