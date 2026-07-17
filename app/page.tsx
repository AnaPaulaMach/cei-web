import Link from "next/link";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { DataNotice } from "@/components/ui/DataNotice";
import { getHomeEvents } from "@/lib/events";
import { getHomeOpportunities } from "@/lib/opportunities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  description:
    "Sitio oficial de la Comisión de Estudiantes de Informática de la Universidad Nacional de Santiago del Estero."
});

const quickLinks = [
  { label: "Guía de trámites", href: "/guia-tramites" },
  { label: "La Comisión", href: "/comision" },
  { label: "Contacto", href: "/contacto" }
];

export default async function HomePage() {
  const [eventsResult, opportunitiesResult] = await Promise.all([
    getHomeEvents(),
    getHomeOpportunities()
  ]);
  const nextEvent = eventsResult.items[0];
  const featuredOpportunity = opportunitiesResult.items[0];

  return (
    <PageShell spacing="compact">
      <Section className="pt-1 sm:pt-3">
        <XPWindow
          className="window-pop"
          contentClassName="p-0"
          showControls={false}
          title="CEI - Inicio"
        >
          <div className="border-l-[6px] border-cei-alert bg-[#071f44] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="w-fit bg-cei-alert px-2 py-1 font-mono text-[10px] font-black uppercase text-cei-shadow sm:text-xs">
              Universidad Nacional de Santiago del Estero
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Comisión de Estudiantes de Informática
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              Representamos a estudiantes de informática y acercamos actividades, oportunidades e información útil.
            </p>
          </div>
        </XPWindow>
      </Section>

      <Section
        aria-labelledby="actualidad-title"
        className="overflow-hidden rounded-sm border border-[#2f5278] bg-[#edf2f7] shadow-[0_8px_22px_rgba(3,9,20,0.24)]"
      >
        <div className="flex items-center gap-2 border-b border-cei-shadow/20 bg-[#dbe4ef] px-5 py-3 sm:px-6">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-cei-terminal shadow-[0_0_0_3px_rgba(38,150,95,0.12)]" />
          <h2 className="font-mono text-xs font-black uppercase text-cei-shadow" id="actualidad-title">
            Ahora en la CEI
          </h2>
        </div>

        <div className="p-5 sm:p-6">
          <DataNotice message={eventsResult.error} />
          <DataNotice message={opportunitiesResult.error} />

          <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">
            <section>
              <p className="font-mono text-xs font-black uppercase text-cei-blue">Próximo evento</p>
              {nextEvent ? (
                <article className="mt-3 border-l-4 border-cei-alert pl-4 sm:pl-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-slate-600">
                    <span className="font-mono uppercase text-cei-shadow">{nextEvent.category}</span>
                    <span>{nextEvent.date}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-cei-shadow sm:text-3xl">
                    {nextEvent.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-slate-700">{nextEvent.place}</p>
                  <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-slate-700 sm:block">
                    {nextEvent.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Button className="px-4 text-xs" href={nextEvent.href}>
                      {nextEvent.cta}
                    </Button>
                    <Link
                      className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-cei-blue underline-offset-4 hover:underline"
                      href="/eventos"
                    >
                      Ver eventos <span aria-hidden="true">&gt;</span>
                    </Link>
                  </div>
                </article>
              ) : (
                <p className="mt-3 text-sm font-bold text-cei-shadow">No hay eventos cargados por ahora.</p>
              )}
            </section>

            <section className="border-t border-cei-shadow/20 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-black text-cei-shadow">Oportunidades</h3>
                <Link
                  className="inline-flex min-h-11 items-center gap-1 text-xs font-bold text-cei-blue underline-offset-4 hover:underline"
                  href="/oportunidades"
                >
                  Ver todas <span aria-hidden="true">&gt;</span>
                </Link>
              </div>
              {featuredOpportunity ? (
                <a
                  className="group mt-3 flex min-h-14 items-center gap-3 border-y border-cei-shadow/15 py-3 text-cei-shadow"
                  href={featuredOpportunity.href || "/oportunidades"}
                  rel={featuredOpportunity.href?.startsWith("http") ? "noreferrer" : undefined}
                  target={featuredOpportunity.href?.startsWith("http") ? "_blank" : undefined}
                >
                  <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-cei-alert" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-black leading-tight group-hover:underline">
                      {featuredOpportunity.title}
                    </span>
                    <span className="mt-1 block truncate text-xs text-slate-600">{featuredOpportunity.source}</span>
                  </span>
                  <span aria-hidden="true" className="font-mono font-black text-cei-blue">
                    &gt;
                  </span>
                </a>
              ) : (
                <p className="mt-3 text-sm font-bold text-cei-shadow">No hay oportunidades cargadas por ahora.</p>
              )}
            </section>
          </div>

        </div>
      </Section>

      <Section
        aria-labelledby="accesos-title"
        className="border-y border-white/15 bg-[#071a36] px-5 py-6 text-white sm:px-7"
      >
        <h2 className="text-2xl font-black" id="accesos-title">
          Accesos rápidos
        </h2>
        <nav aria-label="Secciones útiles" className="mt-4 grid border-y border-white/20 md:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              className="group flex min-h-16 items-center justify-between gap-3 border-b border-white/20 px-2 py-3 font-bold transition hover:bg-white/[0.07] focus-visible:bg-white/[0.07] md:border-b-0 md:border-r md:px-4 md:last:border-r-0"
              href={link.href}
              key={link.href}
            >
              {link.label}
              <span aria-hidden="true" className="font-mono text-lg text-cei-alert transition group-hover:translate-x-1">
                &gt;
              </span>
            </Link>
          ))}
        </nav>
      </Section>
    </PageShell>
  );
}
