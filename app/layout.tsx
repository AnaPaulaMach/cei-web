import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { DesktopShell } from "@/components/cei-os/DesktopShell";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "CEI UNSE",
  description: "Sitio oficial de la Comision de Estudiantes de Informatica de la UNSE.",
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
        <DesktopShell>
          <Navbar />
          <main className="site-main">{children}</main>
          <Footer />
        </DesktopShell>
      </body>
    </html>
  );
}
