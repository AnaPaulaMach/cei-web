import type { EventItem } from "@/types/events";

export const mockEvents: EventItem[] = [
  {
    id: "hackathon-dia-programador",
    title: "Hackathon del Dia del Programador",
    description: "Fin de semana de desafios, equipos, charlas, mentorias y presentaciones para crear proyectos utiles.",
    date: "12 y 13 de septiembre de 2026",
    sortDate: "2026-09-12T09:00:00-03:00",
    place: "FCEyT - Universidad Nacional de Santiago del Estero",
    category: "Hackathon",
    href: "/hackathon",
    cta: "Inscribirme",
    status: "proximo",
    statusLabel: "Inscripciones proximamente",
    highlighted: true
  },
  {
    id: "portfolio",
    title: "Charla: como armar tu portfolio",
    description: "Encuentro para preparar proyectos, CV tecnico, GitHub y presencia online para primeras oportunidades.",
    date: "Proximamente",
    sortDate: "2026-08-15T18:00:00-03:00",
    place: "Universidad Nacional de Santiago del Estero",
    category: "Charla",
    href: "/eventos",
    cta: "Ver mas",
    status: "proximo",
    statusLabel: "Agenda en preparacion"
  },
  {
    id: "censo",
    title: "Censo estudiantil anual",
    description: "Relevamiento de necesidades, intereses y recursos de estudiantes.",
    date: "Proximamente",
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
    description: "Difusion de las carreras de informatica y actividades para acercar la facultad a nuevos estudiantes.",
    date: "A confirmar",
    sortDate: "2026-10-01T09:00:00-03:00",
    place: "FCEyT - Universidad Nacional de Santiago del Estero",
    category: "Difusion",
    href: "/eventos",
    cta: "Ver aviso",
    status: "proximo",
    statusLabel: "Aviso importante"
  },
  {
    id: "asamblea-primera",
    title: "Primera asamblea CEI",
    description: "Encuentro inicial para organizar la comision, presentar ideas y abrir la participacion estudiantil.",
    date: "29 de mayo de 2026",
    sortDate: "2026-05-29T19:00:00-03:00",
    place: "Salon Azul - FCEyT",
    category: "Asamblea",
    href: "/eventos",
    cta: "Ver resumen",
    status: "pasado",
    statusLabel: "Pasado"
  }
];
