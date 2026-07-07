import Image from "next/image";
import { TerminalPanel } from "@/components/cei-os/TerminalPanel";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { GoogleFormPanel } from "@/components/forms/GoogleFormPanel";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { googleFormLinks } from "@/data/form-links";

export const metadata = {
  title: "Hackathon | CEI UNSE",
  description: "Hackathon del Dia del Programador organizado por la CEI UNSE."
};

const challengeTracks = [
  {
    title: "Campus inteligente",
    tag: "UNSE",
    description: "Ideas para mejorar la vida universitaria: turnos, avisos, mapas, recursos o acompanamiento."
  },
  {
    title: "Impacto social",
    tag: "EXT",
    description: "Soluciones tecnologicas para necesidades reales de la comunidad y organizaciones locales."
  },
  {
    title: "Herramientas para estudiar",
    tag: "EDU",
    description: "Apps, bots, dashboards o recursos que ayuden a cursar, organizarse y aprender mejor."
  }
];

const schedule = [
  {
    day: "Sabado 12/09",
    items: ["Acreditacion y apertura", "Presentacion de desafios", "Armado de equipos", "Talleres y hacking"]
  },
  {
    day: "Domingo 13/09",
    items: ["Mentorias", "Cierre de prototipos", "Demos finales", "Premiacion"]
  }
];

const learningItems = [
  "Trabajo en equipo con tiempos reales",
  "Prototipado rapido y validacion de ideas",
  "Presentacion de proyectos frente a jurado",
  "Buenas practicas para portfolio tecnico",
  "Charlas, talleres y mentorias"
];

const faqs = [
  {
    question: "Cuantas personas por equipo?",
    answer: "La idea base es equipos de 3 o 4 personas. Tambien vamos a ayudar a formar equipos durante la apertura."
  },
  {
    question: "Es gratis?",
    answer: "Si, la participacion esta pensada como gratuita para estudiantes. Los detalles finales se van a confirmar cerca del evento."
  },
  {
    question: "Quien puede participar?",
    answer: "Estudiantes de informatica y personas interesadas en tecnologia, especialmente de la comunidad UNSE."
  },
  {
    question: "Que tengo que llevar?",
    answer: "Notebook si tenes, cargador, DNI, algo para tomar notas y muchas ganas de crear. Si no tenes equipo, no pasa nada."
  }
];

const sponsors = ["Sponsor 01", "Sponsor 02", "Sponsor 03", "Sponsor 04"];

export default function HackathonPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      <Section className="grid gap-6 lg:min-h-[calc(100vh-168px)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <XPWindow title="hackathon/event-mode.exe" className="window-pop">
          <div className="space-y-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-sm border-2 border-cei-shadow bg-[#07111f] shadow-pixel">
                <Image
                  alt="Logo CEI"
                  className="h-16 w-16 object-contain"
                  height={64}
                  priority
                  src="/logo/logo_sin_fondo.png"
                  width={64}
                />
              </div>
              <div>
                <p className="terminal-text text-sm font-bold uppercase tracking-[0.18em]">
                  programmer day event mode
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>12-13 septiembre 2026</Badge>
                  <Badge>FCEyT - UNSE</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl font-mono text-4xl font-black leading-tight text-cei-shadow md:text-6xl">
                Hackathon del Dia del Programador
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-800">
                Un fin de semana para formar equipos, resolver desafios, aprender con mentores y presentar prototipos
                creados por estudiantes de informatica.
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

        <div className="grid gap-4">
          <TerminalPanel
            lines={[
              "event: hackathon_dia_programador",
              "date: sabado 12 + domingo 13",
              "place: Facultad de Ciencias Exactas y Tecnologias",
              "status: preparando desafios",
              "output: demo final"
            ]}
          />
          <XPWindow title="evento/accesos">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Desafios", "Cronograma", "Sponsors", "FAQ"].map((item) => (
                <a
                  className="xp-button rounded-sm px-4 py-3 text-center font-mono text-sm font-black text-cei-shadow"
                  href={`#${item.toLowerCase()}`}
                  key={item}
                >
                  {item}
                </a>
              ))}
            </div>
          </XPWindow>
        </div>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <XPWindow title="que-es.txt" className="h-full">
          <div className="space-y-4">
            <p className="terminal-text text-sm font-bold uppercase">about/hackathon</p>
            <h2 className="font-mono text-3xl font-black text-cei-shadow">Que es y por que participar</h2>
            <p className="leading-7 text-slate-800">
              Es una experiencia intensiva para convertir ideas en prototipos. No se trata solo de programar: tambien
              hay que pensar problemas, organizarse, comunicar y aprender a presentar una solucion.
            </p>
          </div>
        </XPWindow>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {[
            ["01", "Conocer gente de la carrera"],
            ["02", "Practicar con problemas reales"],
            ["03", "Sumar un proyecto al portfolio"]
          ].map(([number, text]) => (
            <div className="rounded-sm border-2 border-cei-shadow bg-white p-4 shadow-pixel" key={number}>
              <p className="font-mono text-3xl font-black text-cei-shadow">{number}</p>
              <p className="mt-2 font-bold leading-6 text-slate-800">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="desafios">
        <div className="mb-5">
          <p className="terminal-text text-sm font-bold uppercase">tracks/editables</p>
          <h2 className="font-mono text-3xl font-black text-white drop-shadow md:text-4xl">Ejes y desafios</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {challengeTracks.map((track) => (
            <XPWindow key={track.title} title={`${track.tag}.challenge`}>
              <div className="space-y-4">
                <span className="grid h-12 w-12 place-items-center border-2 border-cei-shadow bg-cei-alert font-mono text-xs font-black text-cei-shadow shadow-pixel">
                  {track.tag}
                </span>
                <h3 className="font-mono text-2xl font-black text-cei-shadow">{track.title}</h3>
                <p className="leading-7 text-slate-800">{track.description}</p>
              </div>
            </XPWindow>
          ))}
        </div>
      </Section>

      <Section id="cronograma">
        <XPWindow title="cronograma/weekend.exe">
          <div className="mb-6">
            <p className="terminal-text text-sm font-bold uppercase">timeline</p>
            <h2 className="font-mono text-3xl font-black text-cei-shadow">Cronograma del fin de semana</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {schedule.map((day) => (
              <div className="rounded-sm border-2 border-cei-shadow bg-white p-5 shadow-pixel" key={day.day}>
                <h3 className="font-mono text-2xl font-black text-cei-shadow">{day.day}</h3>
                <ol className="mt-4 space-y-3">
                  {day.items.map((item, index) => (
                    <li className="flex gap-3" key={item}>
                      <span className="grid h-7 w-7 shrink-0 place-items-center border-2 border-cei-shadow bg-cei-window font-mono text-xs font-black text-cei-shadow">
                        {index + 1}
                      </span>
                      <span className="font-bold leading-7 text-slate-800">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </XPWindow>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <XPWindow title="aprendizajes.log">
          <div className="space-y-4">
            <p className="terminal-text text-sm font-bold uppercase">skills unlocked</p>
            <h2 className="font-mono text-3xl font-black text-cei-shadow">Que vas a aprender</h2>
            <ul className="grid gap-3">
              {learningItems.map((item) => (
                <li className="rounded-sm border-2 border-cei-shadow bg-white px-4 py-3 font-bold text-slate-800 shadow-pixel" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </XPWindow>

        <XPWindow title="premios.ini">
          <div className="space-y-4">
            <p className="terminal-text text-sm font-bold uppercase">placeholder</p>
            <h2 className="font-mono text-3xl font-black text-cei-shadow">Premios</h2>
            <p className="leading-7 text-slate-800">
              Se van a definir premios, menciones y reconocimientos. Por ahora dejamos este espacio preparado para
              actualizarlo sin cambiar la estructura de la pagina.
            </p>
            <div className="rounded-sm border-2 border-dashed border-cei-shadow bg-white px-4 py-3 font-mono text-sm font-black text-cei-shadow">
              premios = [definir]
            </div>
          </div>
        </XPWindow>
      </Section>

      <Section id="sponsors">
        <XPWindow title="sponsors/grid">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="terminal-text text-sm font-bold uppercase">partners</p>
              <h2 className="font-mono text-3xl font-black text-cei-shadow">Sponsors</h2>
              <p className="mt-2 max-w-2xl leading-7 text-slate-800">
                Espacio reservado para instituciones, empresas y comunidades que quieran acompanar el evento.
              </p>
            </div>
            <Button href="mailto:comisionlsiafines@gmail.com?subject=Quiero%20ser%20sponsor%20del%20hackathon">
              Quiero ser sponsor
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <div className="grid min-h-32 place-items-center rounded-sm border-2 border-dashed border-cei-shadow bg-white p-4 text-center font-mono font-black text-cei-shadow shadow-pixel" key={sponsor}>
                {sponsor}
              </div>
            ))}
          </div>
        </XPWindow>
      </Section>

      <Section id="faq">
        <div className="mb-5">
          <p className="terminal-text text-sm font-bold uppercase">help/faq</p>
          <h2 className="font-mono text-3xl font-black text-white drop-shadow md:text-4xl">Preguntas frecuentes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <XPWindow key={faq.question} title={faq.question}>
              <p className="leading-7 text-slate-800">{faq.answer}</p>
            </XPWindow>
          ))}
        </div>
      </Section>

      <Section id="inscripcion">
        <GoogleFormPanel
          description="La inscripcion se hara con Google Forms para no guardar datos personales del hackathon en Supabase. Cuando tengas el formulario, pegamos el enlace aca."
          href={googleFormLinks.hackathon}
          title="Inscripcion al hackathon"
        />
      </Section>
    </div>
  );
}
