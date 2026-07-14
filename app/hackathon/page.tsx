import { XPWindow } from "@/components/cei-os/XPWindow";
import { GoogleFormPanel } from "@/components/forms/GoogleFormPanel";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { googleFormLinks } from "@/data/form-links";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Hackathon",
  description:
    "Hackathon del Día del Programador organizado por la CEI de la Universidad Nacional de Santiago del Estero el 12 y 13 de septiembre de 2026.",
  path: "/hackathon"
});

const challengeTracks = [
  {
    title: "Campus inteligente",
    tag: "UNSE",
    description: "Ideas para mejorar la vida universitaria: turnos, avisos, mapas, recursos o acompañamiento."
  },
  {
    title: "Impacto social",
    tag: "EXT",
    description: "Soluciones tecnológicas para necesidades reales de la comunidad y organizaciones locales."
  },
  {
    title: "Herramientas para estudiar",
    tag: "EDU",
    description: "Apps, bots, dashboards o recursos que ayuden a cursar, organizarse y aprender mejor."
  }
];

const schedule = [
  {
    day: "Sábado 12/09",
    items: ["Acreditación y apertura", "Presentación de desafíos", "Armado de equipos", "Talleres y hacking"]
  },
  {
    day: "Domingo 13/09",
    items: ["Mentorías", "Cierre de prototipos", "Demos finales", "Premiación"]
  }
];

const learningItems = [
  "Trabajo en equipo con tiempos reales",
  "Prototipado rápido y validación de ideas",
  "Presentación de proyectos frente a jurado",
  "Buenas prácticas para portfolio técnico",
  "Charlas, talleres y mentorías"
];

const faqs = [
  {
    question: "¿Cuántas personas por equipo?",
    answer: "La idea base es equipos de 3 o 4 personas. También vamos a ayudar a formar equipos durante la apertura."
  },
  {
    question: "¿Es gratis?",
    answer: "Sí, la participación está pensada como gratuita para estudiantes. Los detalles finales se van a confirmar cerca del evento."
  },
  {
    question: "¿Quién puede participar?",
    answer:
      "Estudiantes de informática y personas interesadas en tecnología, especialmente de la comunidad de la Universidad Nacional de Santiago del Estero."
  },
  {
    question: "¿Qué tengo que llevar?",
    answer: "Notebook si tenés, cargador, DNI, algo para tomar notas y muchas ganas de crear. Si no tenés equipo, no pasa nada."
  }
];

const sponsors = ["Sponsor 01", "Sponsor 02", "Sponsor 03", "Sponsor 04"];

export default function HackathonPage() {
  return (
    <PageShell>
      <Section>
        <XPWindow title="hackathon/event-mode.exe" className="window-pop">
          <div className="space-y-6">
            <p className="w-fit rounded-sm bg-cei-alert px-3 py-1 font-mono text-xs font-black uppercase text-cei-shadow">
              12 y 13 de septiembre de 2026
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl font-mono text-4xl font-black leading-tight text-cei-shadow md:text-6xl">
                Hackathon del Día del Programador
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-800">
                Un fin de semana para formar equipos, resolver desafíos, aprender con mentores y presentar prototipos.
              </p>
              <p className="font-mono text-sm font-bold text-cei-shadow">
                Facultad de Ciencias Exactas y Tecnologías · Universidad Nacional de Santiago del Estero
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="#inscripcion">Inscribirme</Button>
              <Button href="#cronograma" variant="secondary">
                Ver cronograma
              </Button>
            </div>
          </div>
        </XPWindow>
      </Section>

      <Section>
        <div className="rounded-sm bg-cei-window/95 p-5 sm:p-6">
          <h2 className="font-mono text-3xl font-black text-cei-shadow">Qué es y por qué participar</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-800">
            Es una experiencia intensiva para convertir ideas en prototipos. También vas a organizarte, comunicar y
            aprender a presentar una solución.
          </p>
          <div className="mt-5 grid divide-y divide-cei-shadow/15 rounded-sm bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
            {["Conocer gente de la carrera", "Practicar con problemas reales", "Sumar un proyecto al portfolio"].map(
              (item, index) => (
                <div className="p-4" key={item}>
                  <p className="font-mono text-sm font-black text-cei-shadow">0{index + 1}</p>
                  <p className="mt-2 font-bold leading-6 text-slate-800">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </Section>

      <Section id="desafios">
        <h2 className="mb-4 font-mono text-3xl font-black text-white drop-shadow md:text-4xl">Ejes y desafíos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {challengeTracks.map((track) => (
            <article className="rounded-sm bg-white p-5" key={track.title}>
              <span className="rounded-sm bg-cei-alert px-2 py-1 font-mono text-xs font-black text-cei-shadow">
                {track.tag}
              </span>
              <h3 className="mt-4 font-mono text-2xl font-black text-cei-shadow">{track.title}</h3>
              <p className="mt-3 leading-7 text-slate-800">{track.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="cronograma">
        <div className="rounded-sm bg-cei-window/95 p-5 sm:p-6">
          <h2 className="font-mono text-3xl font-black text-cei-shadow">Cronograma del fin de semana</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {schedule.map((day) => (
              <div className="rounded-sm bg-white p-5" key={day.day}>
                <h3 className="font-mono text-2xl font-black text-cei-shadow">{day.day}</h3>
                <ol className="mt-4 space-y-3">
                  {day.items.map((item, index) => (
                    <li className="flex gap-3" key={item}>
                      <span className="font-mono text-xs font-black text-cei-shadow">0{index + 1}</span>
                      <span className="font-bold text-slate-800">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-sm bg-white p-5 sm:p-6">
          <h2 className="font-mono text-3xl font-black text-cei-shadow">Qué vas a aprender</h2>
          <ul className="mt-4 divide-y divide-cei-shadow/15">
            {learningItems.map((item) => (
              <li className="py-3 font-bold text-slate-800" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm bg-[#fff7c2] p-5 sm:p-6">
          <h2 className="font-mono text-3xl font-black text-cei-shadow">Premios</h2>
          <p className="mt-3 leading-7 text-slate-800">
            Se van a definir premios, menciones y reconocimientos. Este espacio se actualizará cuando estén confirmados.
          </p>
          <p className="mt-4 font-mono text-sm font-black text-cei-shadow">Premios por definir</p>
        </div>
      </Section>

      <Section id="sponsors">
        <div className="rounded-sm bg-cei-window/95 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-mono text-3xl font-black text-cei-shadow">Sponsors</h2>
              <p className="mt-2 max-w-2xl leading-7 text-slate-800">
                Instituciones, empresas y comunidades que quieran acompañar el evento.
              </p>
            </div>
            <Button href="mailto:comisionlsiafines@gmail.com?subject=Quiero%20ser%20sponsor%20del%20hackathon">
              Quiero ser sponsor
            </Button>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <div className="grid min-h-28 place-items-center rounded-sm border border-dashed border-cei-shadow/35 bg-white p-4 text-center font-mono font-black text-cei-shadow" key={sponsor}>
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="faq">
        <h2 className="mb-4 font-mono text-3xl font-black text-white drop-shadow md:text-4xl">Preguntas frecuentes</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <details className="rounded-sm bg-white p-4 text-cei-shadow" key={faq.question}>
              <summary className="cursor-pointer font-mono font-black">{faq.question}</summary>
              <p className="mt-3 leading-7 text-slate-800">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="inscripcion">
        <GoogleFormPanel
          description="La inscripción se hará con Google Forms. Cuando esté disponible, vas a encontrar el enlace en este espacio."
          href={googleFormLinks.hackathon}
          title="Inscripción al hackathon"
        />
      </Section>
    </PageShell>
  );
}
