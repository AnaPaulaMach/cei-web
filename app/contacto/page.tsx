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
      <XPWindow title="Contacto">
        <div className="space-y-6 lg:p-2">
          <div>
            <h1 className="text-4xl font-black text-cei-shadow">Contacto</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-800">
              Para consultas, propuestas o actividades, escribinos por los canales oficiales de la Comisión.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {orderedContactLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  className="group flex min-h-36 flex-col justify-between rounded-sm border border-cei-shadow/60 bg-[#f7f9fc] p-5 text-cei-shadow shadow-[0_5px_14px_rgba(3,9,20,0.16)] transition hover:-translate-y-0.5 hover:bg-white"
                  href={link.href}
                  key={link.label}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  <span>
                    <span className="block text-xl font-black">{link.label}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-700">{link.description}</span>
                  </span>
                  <span aria-hidden="true" className="mt-4 self-end font-mono text-lg font-black text-cei-blue transition group-hover:translate-x-1">
                    &gt;
                  </span>
                </a>
              );
            })}
          </div>

          <Image
            alt=""
            aria-hidden="true"
            className="pointer-events-none h-12 w-auto object-contain opacity-90"
            height={48}
            src="/stickers/contacto-click-smiley.png"
            width={78}
          />
        </div>
      </XPWindow>
    </PageShell>
  );
}
