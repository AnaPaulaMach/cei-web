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
    description: "Espacio para publicar becas, programas y oportunidades academicas.",
    category: "Beca",
    source: "Convocatorias",
    href: "https://www.argentina.gob.ar/educacion/becas",
    isExternal: true,
    publishedAt: "Actualizable"
  },
  {
    id: "pasantias",
    title: "Pasantias y trabajos junior",
    description: "Busqueda de oportunidades laborales para estudiantes de informatica.",
    category: "Pasantia",
    source: "Comunidad tech",
    href: "https://www.linkedin.com/jobs/",
    isExternal: true,
    deadline: "Segun convocatoria"
  },
  {
    id: "recursos",
    title: "Recursos para cursar",
    description: "Apuntes, herramientas, guias y repositorios utiles para la carrera.",
    category: "Recurso",
    source: "CEI",
    href: "https://github.com/",
    isExternal: true,
    publishedAt: "En construccion"
  },
  {
    id: "trabajo-junior",
    title: "Busqueda laboral junior",
    description: "Espacio para compartir busquedas de primer empleo, trainee y junior en tecnologia.",
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
    title: "Donacion de apuntes y material",
    description: "Avisos utiles de la comision para circular material academico entre estudiantes.",
    category: "Aviso",
    source: "CEI",
    publishedAt: "Permanente"
  }
];
