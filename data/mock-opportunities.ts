import type { OpportunityItem } from "@/types/opportunities";

export const mockOpportunities: OpportunityItem[] = [
  {
    id: "curso-web",
    title: "Ruta web para portfolio",
    description: "Recursos para practicar HTML, CSS, JavaScript y publicar proyectos propios.",
    category: "Curso",
    source: "CEI recomienda",
    href: "https://developer.mozilla.org/es/",
    isExternal: true,
    publishedAt: "Nuevo",
    highlighted: true
  },
  {
    id: "becas",
    title: "Becas y convocatorias",
    description: "Espacio para publicar becas, programas y oportunidades académicas.",
    category: "Becas",
    source: "Convocatorias",
    href: "https://www.argentina.gob.ar/educacion/becas",
    isExternal: true,
    publishedAt: "Actualizable"
  },
  {
    id: "pasantias",
    title: "Prácticas y trabajos junior",
    description: "Búsqueda de prácticas, pasantías y oportunidades laborales para estudiantes de informática.",
    category: "Prácticas",
    source: "Comunidad tech",
    href: "https://www.linkedin.com/jobs/",
    isExternal: true,
    deadline: "Según convocatoria"
  },
  {
    id: "trabajo-junior",
    title: "Búsqueda laboral junior",
    description: "Espacio para compartir búsquedas de primer empleo, trainee y junior en tecnología.",
    category: "Trabajo",
    source: "Empresas y comunidad",
    href: "https://www.linkedin.com/jobs/search/?keywords=developer%20junior",
    isExternal: true,
    publishedAt: "Actualizable"
  }
];
