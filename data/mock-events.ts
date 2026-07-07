import type { EventItem } from "@/types/events";

export const mockEvents: EventItem[] = [
  {
    id: "hackathon-dia-programador",
    title: "Hackathon del Dia del Programador",
    description: "Fin de semana de desafios, equipos, mentorias y presentaciones.",
    date: "12 y 13 de septiembre de 2026",
    place: "FCEyT - UNSE",
    category: "Hackathon",
    href: "/hackathon",
    cta: "Inscribirme",
    highlighted: true
  },
  {
    id: "portfolio",
    title: "Charla: como armar tu portfolio",
    description: "Encuentro para preparar proyectos, CV tecnico y presencia online.",
    date: "Proximamente",
    place: "UNSE",
    category: "Charla",
    href: "/eventos",
    cta: "Ver mas"
  },
  {
    id: "censo",
    title: "Censo estudiantil anual",
    description: "Relevamiento de necesidades, intereses y recursos de estudiantes.",
    date: "Proximamente",
    place: "Online",
    category: "Censo",
    href: "/censo",
    cta: "Completar"
  }
];
