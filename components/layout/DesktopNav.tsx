"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/commission";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className="hidden items-center gap-1 lg:flex"
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`relative flex min-h-10 items-center rounded-sm px-3 text-sm font-bold transition ${
              isActive
                ? "bg-white/[0.06] text-white after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-cei-alert"
                : "text-white/75 hover:bg-white/[0.05] hover:text-white focus-visible:bg-white/[0.05] focus-visible:text-white"
            }`}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
