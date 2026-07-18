import Image from "next/image";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { googleFormLinks } from "@/data/form-links";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Hackathon",
  description:
    "Hackathon del Día del Programador organizado por la CEI de la Universidad Nacional de Santiago del Estero. Será un fin de semana de septiembre de 2026, con fecha a definir.",
  path: "/hackathon"
});

const eventFacts = [
  ["Fecha", "Un fin de semana de septiembre de 2026"],
  ["Lugar", "FCEyT · Universidad Nacional de Santiago del Estero"],
  ["Participación", "Gratuita"],
  ["Comunidad", "Estudiantes de las tres carreras de informática"],
  ["Equipos", "3 o 4 personas"]
];

const challengeTracks = [
  {
    title: "Campus inteligente",
    tag: "UNSE",
    description: "Ideas para mejorar avisos, recursos, orientación y vida universitaria."
  },
  {
    title: "Impacto social",
    tag: "EXT",
    description: "Soluciones tecnológicas para necesidades de organizaciones y comunidades locales."
  },
  {
    title: "Herramientas para estudiar",
    tag: "EDU",
    description: "Apps, bots o recursos que ayuden a cursar, organizarse y aprender mejor."
  }
];

const schedule = [
  {
    day: "Día 1",
    items: ["Acreditación y presentación de desafíos", "Formación de equipos", "Talleres y desarrollo"]
  },
  {
    day: "Día 2",
    items: ["Mentorías y cierre de prototipos", "Demos finales", "Devolución y reconocimientos"]
  }
];

const learningItems = [
  "Convertir una idea en un prototipo",
  "Trabajar en equipo con tiempos reales",
  "Presentar un proyecto de forma clara",
  "Sumar una experiencia concreta al portfolio"
];

const faqs = [
  {
    question: "¿Quiénes pueden participar?",
    answer:
      "La propuesta está pensada principalmente para estudiantes de informática de la UNSE. Los requisitos definitivos se publicarán junto con la inscripción."
  },
  {
    question: "¿Necesito tener equipo?",
    answer: "No. Podrás anotarte sin equipo y vamos a facilitar la formación de grupos durante la apertura."
  },
  {
    question: "¿Tengo que saber programar mucho?",
    answer:
      "No hace falta ser experto. Los equipos pueden combinar programación, diseño, comunicación, organización e investigación."
  },
  {
    question: "¿Qué tengo que llevar?",
    answer: "Notebook y cargador si tenés, DNI y algo para tomar notas. Publicaremos una lista final antes del evento."
  }
];

export default function HackathonPage() {
  const registrationIsOpen = Boolean(googleFormLinks.hackathon);

  return (
    <PageShell spacing="compact">
      <Section className="pt-1 sm:pt-3">
        <XPWindow className="window-pop" contentClassName="p-0" title="hackathon/event-mode.exe">
          <div className="grid bg-[#151e2a] text-white lg:grid-cols-[1.35fr_0.65fr]">
            <div className="border-l-[6px] border-cei-alert px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="flex items-center gap-4">
                <div className="hidden h-16 w-16 shrink-0 place-items-center border border-white/20 bg-[#0d1520] sm:grid">
                  <Image
                    alt="Logo de la Comisión de Estudiantes de Informática"
                    className="h-12 w-12 object-contain"
                    height={48}
                    priority
                    src="/logo/logo_sin_fondo.png"
                    width={48}
                  />
                </div>
                <div>
                  <p className="font-mono text-xs font-black uppercase text-cei-alert">Evento CEI · Edición 2026</p>
                  <p className="mt-1 text-sm font-bold text-white/70">Fecha exacta e inscripciones por confirmar</p>
                </div>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Hackathon del Día del Programador
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Un fin de semana para crear en equipo, resolver desafíos y presentar un prototipo junto a estudiantes
                de informática.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {registrationIsOpen ? (
                  <Button href={googleFormLinks.hackathon}>Inscribirme</Button>
                ) : (
                  <Button href="#participantes">Quiero participar</Button>
                )}
                <Button href="#sponsors" variant="secondary">
                  Represento una organización
                </Button>
              </div>
            </div>

            <dl className="grid border-t border-white/15 lg:border-l lg:border-t-0">
              {eventFacts.map(([label, value]) => (
                <div className="border-b border-white/15 px-5 py-4 last:border-b-0 sm:px-6" key={label}>
                  <dt className="font-mono text-[11px] font-black uppercase text-cei-alert">{label}</dt>
                  <dd className="mt-1 text-sm font-bold leading-6 text-white/90">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </XPWindow>
      </Section>

      <Section>
        <nav
          aria-label="Información según perfil"
          className="border-y border-white/15 bg-[#151e2a] text-white"
        >
          <p className="border-b border-white/15 px-5 py-3 font-mono text-xs font-black uppercase text-cei-alert sm:px-6">
            Elegí la información que buscás
          </p>
          <div className="grid md:grid-cols-2">
            <a
              className="group flex min-h-24 items-center justify-between gap-5 border-b border-white/15 px-5 py-4 transition hover:bg-white/[0.07] md:border-b-0 md:border-r sm:px-6"
              href="#participantes"
            >
              <span>
                <span className="block font-mono text-[11px] font-black uppercase text-white/55">Estudiantes</span>
                <span className="mt-1 block text-lg font-black">Quiero participar</span>
                <span className="mt-1 block text-sm text-white/65">Experiencia, formato e inscripción.</span>
              </span>
              <span aria-hidden="true" className="font-mono text-xl text-cei-alert transition group-hover:translate-x-1">
                &gt;
              </span>
            </a>
            <a
              className="group flex min-h-24 items-center justify-between gap-5 px-5 py-4 transition hover:bg-white/[0.07] sm:px-6"
              href="#sponsors"
            >
              <span>
                <span className="block font-mono text-[11px] font-black uppercase text-white/55">
                  Empresas, instituciones y comunidades
                </span>
                <span className="mt-1 block text-lg font-black">Quiero patrocinar el evento</span>
                <span className="mt-1 block text-sm text-white/65">Beneficios, aportes y contacto.</span>
              </span>
              <span aria-hidden="true" className="font-mono text-xl text-cei-alert transition group-hover:translate-x-1">
                &gt;
              </span>
            </a>
          </div>
        </nav>
      </Section>

      <Section id="participantes">
        <XPWindow contentClassName="p-5 sm:p-7 lg:p-8" showControls={false} title="propuesta.md">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="font-mono text-xs font-black uppercase text-cei-terminal">Para participantes</p>
              <h2 className="mt-2 text-3xl font-black text-cei-shadow sm:text-4xl">Aprender haciendo</h2>
              <p className="mt-4 leading-7 text-slate-800">
                Vas a transformar una idea en un prototipo junto a otras personas. No se trata solo de programar:
                también hay que entender un problema, repartir tareas y comunicar una solución.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs font-black uppercase text-cei-terminal">Por qué sumarte</p>
              <ul className="mt-3 divide-y divide-cei-shadow/20 border-y border-cei-shadow/20">
                {learningItems.map((item, index) => (
                  <li className="flex gap-4 py-3 text-sm font-bold text-slate-800 sm:text-base" key={item}>
                    <span className="font-mono text-cei-blue">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9 border-t border-cei-shadow/25 pt-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs font-black uppercase text-cei-terminal">Borrador de trabajo</p>
                <h2 className="mt-1 text-2xl font-black text-cei-shadow sm:text-3xl">Ejes preliminares</h2>
              </div>
              <p className="text-sm text-slate-600">Pueden cambiar antes de abrir la inscripción.</p>
            </div>

            <div className="mt-5 grid border-y border-cei-shadow/20 md:grid-cols-3">
              {challengeTracks.map((track) => (
                <article
                  className="border-b border-cei-shadow/20 px-1 py-5 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  key={track.title}
                >
                  <span className="font-mono text-xs font-black text-cei-blue">{track.tag}</span>
                  <h3 className="mt-2 text-xl font-black text-cei-shadow">{track.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{track.description}</p>
                </article>
              ))}
            </div>
          </div>
        </XPWindow>
      </Section>

      <Section id="formato">
        <XPWindow contentClassName="p-5 sm:p-7 lg:p-8" showControls={false} title="formato-previsto.txt">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-black uppercase text-cei-terminal">Dos días · fecha a definir</p>
              <h2 className="mt-1 text-3xl font-black text-cei-shadow sm:text-4xl">Formato previsto</h2>
            </div>
            <p className="text-sm font-bold text-slate-600">Premios y reconocimientos: a confirmar.</p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {schedule.map((day) => (
              <div className="border-l-4 border-cei-alert bg-white/70 px-5 py-4" key={day.day}>
                <h3 className="text-2xl font-black text-cei-shadow">{day.day}</h3>
                <ol className="mt-3 space-y-3">
                  {day.items.map((item, index) => (
                    <li className="flex gap-3 text-sm font-bold leading-6 text-slate-700" key={item}>
                      <span className="font-mono text-cei-blue">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </XPWindow>
      </Section>

      <Section id="sponsors">
        <XPWindow contentClassName="p-5 sm:p-7 lg:p-8" showControls={false} title="informacion-para-sponsors.txt">
          <p className="font-mono text-xs font-black uppercase text-cei-terminal">
            Para empresas, instituciones y comunidades
          </p>
          <h2 className="mt-2 text-3xl font-black text-cei-shadow sm:text-4xl">
            ¿Por qué patrocinar este Hackathon?
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Esta sección está dirigida a organizaciones interesadas en apoyar el evento. Un sponsor aporta recursos,
            servicios, premios o conocimiento y recibe una presencia acordada junto a la CEI.
          </p>

          <div className="mt-7 grid gap-7 lg:grid-cols-2 lg:gap-10">
            <div className="border-t-4 border-cei-alert bg-white/70 p-5">
              <p className="font-mono text-xs font-black uppercase text-cei-blue">Qué obtiene la organización</p>
              <ul className="mt-4 divide-y divide-cei-shadow/15">
                {[
                  "Vínculo directo con estudiantes de las tres carreras de informática de la UNSE.",
                  "Presencia de marca en las piezas y espacios que se acuerden para el evento.",
                  "Participación cercana mediante mentorías, desafíos, talleres o devoluciones."
                ].map((item, index) => (
                  <li className="flex gap-3 py-3 text-sm font-bold leading-6 text-slate-700" key={item}>
                    <span className="font-mono text-cei-blue">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-4 border-cei-blue bg-white/70 p-5">
              <p className="font-mono text-xs font-black uppercase text-cei-blue">Cómo puede acompañar</p>
              <ul className="mt-4 divide-y divide-cei-shadow/15">
                {[
                  "Aportes para premios, alimentación, materiales o recursos técnicos.",
                  "Mentores, talleristas o referentes que compartan experiencia profesional.",
                  "Difusión, servicios o desafíos vinculados con necesidades reales."
                ].map((item, index) => (
                  <li className="flex gap-3 py-3 text-sm font-bold leading-6 text-slate-700" key={item}>
                    <span className="font-mono text-cei-blue">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 border-t border-cei-shadow/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-black text-cei-shadow">Armamos una propuesta según cada organización</h3>
              <p className="mt-1 text-sm text-slate-600">Los aportes y la presencia se acuerdan antes del evento.</p>
            </div>
            <Button href="mailto:comisionlsiafines@gmail.com?subject=Solicitud%20de%20propuesta%20para%20sponsor%20del%20hackathon">
              Pedir propuesta de patrocinio
            </Button>
          </div>
        </XPWindow>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" id="preguntas">
        <XPWindow contentClassName="p-5 sm:p-7" showControls={false} title="preguntas-frecuentes.txt">
          <h2 className="text-3xl font-black text-cei-shadow">Preguntas frecuentes</h2>
          <div className="mt-5 divide-y divide-cei-shadow/20 border-y border-cei-shadow/20">
            {faqs.map((faq) => (
              <details className="group py-4" key={faq.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-cei-shadow">
                  {faq.question}
                  <span aria-hidden="true" className="font-mono text-lg text-cei-blue group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-6 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </XPWindow>

        <XPWindow contentClassName="p-5 sm:p-7" showControls={false} title="participantes.status">
          <p className="font-mono text-xs font-black uppercase text-cei-terminal">Para participantes</p>
          <h2 className="mt-2 text-3xl font-black text-cei-shadow">
            {registrationIsOpen ? "Inscripción abierta" : "Inscripción próximamente"}
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            {registrationIsOpen
              ? "Completá el formulario para participar."
              : "Cuando confirmemos la fecha y los cupos, publicaremos acá el formulario de inscripción."}
          </p>
          <div className="mt-5">
            {registrationIsOpen ? (
              <Button href={googleFormLinks.hackathon}>Abrir inscripción</Button>
            ) : (
              <Button href="/contacto" variant="secondary">
                Ver canales oficiales
              </Button>
            )}
          </div>
        </XPWindow>
      </Section>
    </PageShell>
  );
}
