import type { OpportunityItem } from "@/types/opportunities";

export const mockOpportunities: OpportunityItem[] = [
  {
    id: "curso-web",
    title: "Curso de desarrollo web",
    description: "Recurso recomendado para reforzar HTML, CSS, JavaScript y proyectos.",
    category: "Curso",
    source: "CEI recomienda",
    href: "/oportunidades",
    highlighted: true
  },
  {
    id: "becas",
    title: "Becas y convocatorias",
    description: "Espacio para publicar becas, programas y oportunidades academicas.",
    category: "Beca",
    source: "Convocatorias",
    href: "/oportunidades"
  },
  {
    id: "pasantias",
    title: "Pasantias y trabajos junior",
    description: "Busqueda de oportunidades laborales para estudiantes de informatica.",
    category: "Trabajo",
    source: "Comunidad tech",
    href: "/oportunidades"
  },
  {
    id: "recursos",
    title: "Recursos para cursar",
    description: "Apuntes, herramientas, guias y repositorios utiles para la carrera.",
    category: "Recurso",
    source: "CEI",
    href: "/oportunidades"
  }
];
