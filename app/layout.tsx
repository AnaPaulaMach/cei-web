import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { DesktopShell } from "@/components/cei-os/DesktopShell";
import { Navbar } from "@/components/layout/Navbar";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata(),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  keywords: [
    "CEI UNSE",
    "Comisión de Estudiantes de Informática",
    "UNSE",
    "FCEyT",
    "informática",
    "eventos estudiantiles",
    "hackathon"
  ],
  icons: {
    icon: "/logo/logo_sin_fondo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <DesktopShell>
          <Navbar />
          <main className="site-main" id="contenido" tabIndex={-1}>
            {children}
          </main>
        </DesktopShell>
        <Analytics />
      </body>
    </html>
  );
}
