import Image from "next/image";
import Link from "next/link";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { Button } from "@/components/ui/Button";
import { DataNotice } from "@/components/ui/DataNotice";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { contactLinks } from "@/data/commission";
import { getHomeEvents } from "@/lib/events";
import { getHomeOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  description:
    "Sitio oficial de la Comisión de Estudiantes de Informática de la Universidad Nacional de Santiago del Estero."
});

const homeRoutes = [
  {
    number: "01",
    title: "Eventos",
    description: "Próximas actividades y encuentros realizados.",
    href: "/eventos"
  },
  {
    number: "02",
    title: "Oportunidades",
    description: "Cursos, trabajos, prácticas y becas.",
    href: "/oportunidades"
  },
  {
    number: "03",
    title: "Guía de trámites",
    description: "Información útil organizada por carrera.",
    href: "/guia-tramites"
  },
  {
    number: "04",
    title: "La Comisión",
    description: "Quiénes somos, qué hacemos y documentos.",
    href: "/comision"
  }
];

export default async function HomePage() {
  const [eventsResult, opportunitiesResult] = await Promise.all([
    getHomeEvents(),
    getHomeOpportunities()
  ]);
  const nextEvent = eventsResult.items[0];
  const featuredOpportunities = opportunitiesResult.items.slice(0, 2);

  return (
    <PageShell spacing="compact">
      <Section className="pt-3 sm:pt-5">
        <XPWindow
          className="window-pop"
          contentClassName="p-0"
          showControls={false}
          title="Comisión de Estudiantes de Informática"
        >
          <div className="relative overflow-hidden border-l-8 border-cei-alert bg-[#071f44] text-white">
            <div className="grid min-h-[230px] items-end gap-6 p-5 sm:min-h-[240px] sm:grid-cols-[1fr_auto] sm:p-6 lg:p-7">
              <div className="max-w-3xl">
                <p className="w-fit bg-cei-alert px-2 py-1 font-mono text-[10px] font-black uppercase text-cei-shadow sm:text-xs">
                  CEI · Universidad Nacional de Santiago del Estero
                </p>
                <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Comisión de Estudiantes de Informática
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/95 sm:text-lg sm:leading-7">
                  Representamos a estudiantes de informática y acercamos actividades, oportunidades e información útil.
                </p>
              </div>

              <div className="hidden h-28 w-28 place-items-center border border-white/60 bg-white shadow-[5px_5px_0_rgba(7,17,31,0.55)] sm:grid lg:h-32 lg:w-32">
                <Image
                  alt=""
                  className="h-24 w-24 object-contain lg:h-28 lg:w-28"
                  height={112}
                  priority
                  src="/logo/logo_sin_fondo.png"
                  width={112}
                />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <DataNotice message={eventsResult.error} />
            <DataNotice message={opportunitiesResult.error} />

            <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:gap-7">
              <section>
                <p className="font-mono text-xs font-black uppercase text-cei-blue">Próximo evento</p>
                {nextEvent ? (
                  <article className="mt-2 border-l-4 border-cei-alert pl-4 sm:pl-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-slate-600">
                      <span className="font-mono uppercase text-cei-shadow">{nextEvent.category}</span>
                      <span>{nextEvent.date}</span>
                    </div>
                    <h2 className="mt-2 text-2xl font-black leading-tight text-cei-shadow sm:text-3xl">
                      {nextEvent.title}
                    </h2>
                    <p className="mt-1 text-sm font-bold text-slate-700">{nextEvent.place}</p>
                    <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-slate-700 sm:block">
                      {nextEvent.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <Button className="px-4 text-xs" href={nextEvent.href}>
                        {nextEvent.cta}
                      </Button>
                      <a className="text-sm font-bold text-cei-blue underline-offset-4 hover:underline" href="/eventos">
                        Ver todos los eventos
                      </a>
                    </div>
                  </article>
                ) : (
                  <p className="mt-2 text-sm font-bold text-cei-shadow">No hay eventos cargados por ahora.</p>
                )}
              </section>

              <section className="border-t border-cei-shadow/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-black text-cei-shadow">Oportunidades</h2>
                  <a className="text-xs font-bold text-cei-blue underline-offset-4 hover:underline" href="/oportunidades">
                    Ver todas
                  </a>
                </div>
                {featuredOpportunities.length > 0 ? (
                  <div className="mt-2 divide-y divide-cei-shadow/15">
                    {featuredOpportunities.map((opportunity, index) => (
                      <a
                        className={`group items-center gap-3 py-3 text-cei-shadow ${index === 1 ? "hidden sm:flex" : "flex"}`}
                        href={opportunity.href || "/oportunidades"}
                        key={opportunity.id}
                        rel={opportunity.href?.startsWith("http") ? "noreferrer" : undefined}
                        target={opportunity.href?.startsWith("http") ? "_blank" : undefined}
                      >
                        <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-cei-alert shadow-[1px_1px_0_#0f2a5f]" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-black leading-tight group-hover:underline">
                            {opportunity.title}
                          </span>
                          <span className="mt-1 block truncate text-xs text-slate-600">{opportunity.source}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm font-bold text-cei-shadow">No hay oportunidades cargadas por ahora.</p>
                )}
              </section>
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-cei-shadow/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-bold text-cei-shadow">Canales oficiales</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {contactLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      className="text-sm font-bold text-cei-blue underline-offset-4 hover:underline"
                      href={link.href}
                      key={link.label}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      target={isExternal ? "_blank" : undefined}
                    >
                      {link.label === "Canal de WhatsApp" ? "WhatsApp" : link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </XPWindow>

        <a
          className="mx-auto mt-3 flex w-fit items-center gap-2 font-mono text-xs font-black uppercase text-white/80 transition hover:text-white"
          href="#explorar"
        >
          Seguir recorriendo <span aria-hidden="true">↓</span>
        </a>
      </Section>

      <Section className="scroll-mt-6 pb-2 pt-3 sm:pt-6" id="explorar">
        <div className="text-white">
          <p className="font-mono text-xs font-black uppercase text-cei-alert">Accesos directos</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Explorá la CEI</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            Encontrá rápido lo que necesitás y seguí recorriendo el sitio.
          </p>

          <nav aria-label="Secciones principales" className="mt-6 grid border-y border-white/20 md:grid-cols-2">
            {homeRoutes.map((route) => (
              <Link
                className="group flex min-h-24 items-center gap-4 border-b border-white/20 px-1 py-5 transition hover:bg-white/5 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
                href={route.href}
                key={route.href}
              >
                <span className="font-mono text-xs font-black text-cei-alert">{route.number}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xl font-black">{route.title}</span>
                  <span className="mt-1 block text-sm leading-5 text-white/70">{route.description}</span>
                </span>
                <span aria-hidden="true" className="font-mono text-xl font-black transition group-hover:translate-x-1">
                  &gt;
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </Section>

      <Section className="pb-8 pt-2 sm:pb-12">
        <div className="grid gap-5 border-l-4 border-cei-alert pl-5 text-white sm:grid-cols-[1fr_auto] sm:items-end sm:pl-7">
          <div>
            <p className="font-mono text-xs font-black uppercase text-cei-alert">Tres carreras, una comunidad</p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">Una comisión hecha por estudiantes</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              Representamos a quienes estudian Licenciatura en Sistemas, Programador Universitario en Informática y
              Profesorado en Informática.
            </p>
          </div>
          <Link className="font-bold text-white underline decoration-cei-alert decoration-2 underline-offset-4" href="/comision">
            Conocé la Comisión
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
