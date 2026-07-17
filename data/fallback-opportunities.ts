import type { OpportunityItem } from "@/types/opportunities";

export const fallbackOpportunities: OpportunityItem[] = [
  {
    id: "a4fd405f-f969-4b18-8ca4-7dd006ed6f68",
    title: "Beca Santander Alumnos de Grado Argentina 2026",
    description:
      "Ayuda económica de ARS 400.000 en un único pago. Para estudiantes de la UNSE que hayan aprobado el primer año, tengan promedio mínimo 6 y al menos dos materias aprobadas en 2025. La documentación se presenta en el Área Becas de la UNSE hasta el 5 de agosto.",
    category: "Beca",
    source: "Banco Santander Argentina · UNSE",
    href: "https://app.santanderopenacademy.com/es/application/new/6a05d15c4370f135665e34fa",
    detailsHref: "https://app.santanderopenacademy.com/es/program/alumnos-de-grado-argentina-2026",
    isExternal: true,
    publishedAt: "28 may 2026",
    deadline: "30 jul 2026",
    deadlineIso: "2026-07-30",
    highlighted: true
  },
  {
    id: "4f2fe17a-f9b8-46bc-bfce-1836d90997b8",
    title: "Buscador de oportunidades Santander Open Academy",
    description: "Explorá convocatorias abiertas y próximas de becas, cursos y programas para estudiantes.",
    category: "Beca",
    source: "Santander Open Academy",
    href: "https://app.santanderopenacademy.com/es/program/search?status=SOON&status=OPEN",
    isExternal: true,
    publishedAt: "Actualizado"
  }
];
