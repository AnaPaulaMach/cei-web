import type { EventItem } from "@/types/events";

export const mockEvents: EventItem[] = [
  {
    id: "hackathon-dia-programador",
    title: "Hackathon del Día del Programador",
    description: "Fin de semana de desafíos, equipos, charlas, mentorías y presentaciones para crear proyectos útiles.",
    date: "12 y 13 de septiembre de 2026",
    sortDate: "2026-09-12T09:00:00-03:00",
    place: "FCEyT - Universidad Nacional de Santiago del Estero",
    category: "Hackathon",
    href: "/hackathon",
    cta: "Inscribirme",
    status: "proximo",
    statusLabel: "Inscripciones próximamente",
    highlighted: true
  },
  {
    id: "portfolio",
    title: "Charla: como armar tu portfolio",
    description: "Encuentro para preparar proyectos, CV técnico, GitHub y presencia online para primeras oportunidades.",
    date: "Próximamente",
    sortDate: "2026-08-15T18:00:00-03:00",
    place: "Universidad Nacional de Santiago del Estero",
    category: "Charla",
    href: "/novedades?seccion=agenda",
    cta: "Ver más",
    status: "proximo",
    statusLabel: "Agenda en preparacion"
  },
  {
    id: "censo",
    title: "Censo estudiantil anual",
    description: "Relevamiento de necesidades, intereses y recursos de estudiantes.",
    date: "Próximamente",
    sortDate: "2026-08-01T09:00:00-03:00",
    place: "Online",
    category: "Censo",
    href: "/censo",
    cta: "Completar",
    status: "proximo",
    statusLabel: "Formulario pronto"
  },
  {
    id: "unse-abre-puertas",
    title: "UNSE abre sus puertas",
    description: "Difusión de las carreras de informática y actividades para acercar la facultad a nuevos estudiantes.",
    date: "A confirmar",
    sortDate: "2026-10-01T09:00:00-03:00",
    place: "FCEyT - Universidad Nacional de Santiago del Estero",
    category: "Difusión",
    href: "/novedades?seccion=agenda",
    cta: "Ver aviso",
    status: "proximo",
    statusLabel: "Aviso importante"
  },
  {
    id: "asamblea-primera",
    title: "Primera asamblea CEI",
    description: "Encuentro inicial para organizar la comisión, presentar ideas y abrir la participación estudiantil.",
    date: "29 de mayo de 2026",
    sortDate: "2026-05-29T19:00:00-03:00",
    place: "Salón Azul - FCEyT",
    category: "Asamblea",
    href: "https://www.instagram.com/p/DZF4IkMlAXI/?img_index=1",
    cta: "Ver publicación",
    status: "pasado",
    statusLabel: "Pasado",
    imageUrls: ["/eventos/asamblea-primera-1.jpeg", "/eventos/asamblea-primera-2.jpeg"]
  }
];
