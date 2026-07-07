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
    category: "Beca",
    source: "Convocatorias",
    href: "https://www.argentina.gob.ar/educacion/becas",
    isExternal: true,
    publishedAt: "Actualizable"
  },
  {
    id: "pasantias",
    title: "Pasantías y trabajos junior",
    description: "Búsqueda de oportunidades laborales para estudiantes de informática.",
    category: "Pasantía",
    source: "Comunidad tech",
    href: "https://www.linkedin.com/jobs/",
    isExternal: true,
    deadline: "Según convocatoria"
  },
  {
    id: "recursos",
    title: "Recursos para cursar",
    description: "Apuntes, herramientas, guías y repositorios útiles para la carrera.",
    category: "Recurso",
    source: "CEI",
    href: "https://github.com/",
    isExternal: true,
    publishedAt: "En construcción"
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
  },
  {
    id: "convocatoria-hack",
    title: "Convocatorias tech",
    description: "Hackathones, competencias, llamadas a proyectos y actividades externas para participar.",
    category: "Convocatoria",
    source: "Comunidades tech",
    href: "https://devpost.com/hackathons",
    isExternal: true,
    publishedAt: "Reciente"
  },
  {
    id: "comunidad-discord",
    title: "Comunidades para aprender",
    description: "Canales, servidores y grupos para hacer preguntas, compartir recursos y conocer pares.",
    category: "Comunidad",
    source: "CEI recomienda",
    href: "https://discord.com/",
    isExternal: true,
    publishedAt: "Abierto"
  },
  {
    id: "aviso-material",
    title: "Donación de apuntes y material",
    description: "Avisos útiles de la comisión para circular material académico entre estudiantes.",
    category: "Aviso",
    source: "CEI",
    publishedAt: "Permanente"
  }
];
