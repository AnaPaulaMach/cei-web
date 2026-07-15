import Image from "next/image";
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
          <div className="relative min-h-[270px] overflow-hidden sm:min-h-[310px] lg:min-h-[350px]">
            <Image
              alt="Estudiantes de informática reunidos en una actividad de la Comisión"
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              src="/eventos/asamblea-primera-2.jpeg"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.92)_0%,rgba(7,17,31,0.74)_52%,rgba(7,17,31,0.18)_100%)]" />
            <div className="relative flex min-h-[270px] max-w-3xl flex-col justify-end p-5 text-white sm:min-h-[310px] sm:p-8 lg:min-h-[350px] lg:p-10">
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
          </div>

          <div className="p-5 sm:p-7 lg:p-8">
            <DataNotice message={eventsResult.error} />
            <DataNotice message={opportunitiesResult.error} />

            <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
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

            <div className="mt-7 flex flex-col gap-3 border-t border-cei-shadow/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
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
      </Section>
    </PageShell>
  );
}
