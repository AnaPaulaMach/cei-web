import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  name: "CEI UNSE",
  title: "CEI UNSE | Comisión de Estudiantes de Informática",
  description:
    "Sitio oficial de la Comisión de Estudiantes de Informática de la Universidad Nacional de Santiago del Estero (UNSE): eventos, oportunidades, hackathon, guía de trámites y contacto.",
  url: siteUrl,
  ogImage: "/opengraph-image"
};

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/"
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | CEI UNSE` : siteConfig.title;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Comisión de Estudiantes de Informática de la Universidad Nacional de Santiago del Estero"
        }
      ],
      locale: "es_AR",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [siteConfig.ogImage]
    }
  };
}
