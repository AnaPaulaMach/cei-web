import type { EventItem } from "@/types/events";

export const mockEvents: EventItem[] = [
  {
    id: "hackathon-dia-programador",
    title: "Hackathon del Día del Programador",
    description: "Será un fin de semana de septiembre con desafíos, equipos, charlas, mentorías y presentaciones. Fecha a definir.",
    date: "Un fin de semana de septiembre · fecha a definir",
    place: "FCEyT - Universidad Nacional de Santiago del Estero",
    category: "Hackathon",
    href: "/hackathon",
    cta: "Inscribirme",
    status: "proximo",
    statusLabel: "Fecha a definir",
    highlighted: true
  },
  {
    id: "portfolio",
    title: "Charla: cómo armar tu portfolio",
    description: "Encuentro para preparar proyectos, CV técnico, GitHub y presencia online. Será en septiembre, durante la Semana del Programador.",
    date: "Semana del Programador · septiembre, día a definir",
    place: "Universidad Nacional de Santiago del Estero",
    category: "Charla",
    href: "/novedades?seccion=agenda",
    cta: "Ver más",
    status: "proximo",
    statusLabel: "Fecha a definir"
  },
  {
    id: "censo",
    title: "Censo estudiantil anual",
    description: "El censo ya está disponible para relevar necesidades, intereses y recursos de estudiantes.",
    date: "Disponible ahora",
    dateTitle: "Disponibilidad",
    place: "Online",
    category: "Censo",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdiZiuks38eTvlE1GwizUwPHhDE6IAuir5gJh8vD_EUBgnaQw/viewform?usp=sharing&ouid=109197906899692431538",
    cta: "Completar censo",
    status: "proximo",
    statusLabel: "Disponible ahora"
  },
  {
    id: "unse-abre-puertas",
    title: "UNSE abre sus puertas",
    description: "La actividad es organizada por la UNSE. La CEI participará en acciones para difundir las carreras de informática.",
    date: "27 y 28 de agosto de 2026 · de 8:30 a 18",
    sortDate: "2026-08-27T08:30:00-03:00",
    place: "Sede Central de la Universidad Nacional de Santiago del Estero",
    category: "Difusión",
    href: "/novedades?seccion=agenda",
    cta: "Ver aviso",
    status: "proximo",
    statusLabel: "Participa la CEI"
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
