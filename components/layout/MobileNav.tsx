import Link from "next/link";
import { navLinks } from "@/data/commission";

export function MobileNav() {
  return (
    <details className="group lg:hidden">
      <summary
        aria-label="Menú principal"
        className="flex min-h-11 cursor-pointer list-none items-center rounded-sm border border-white/30 bg-white/10 px-4 text-sm font-bold text-white transition hover:bg-white/15"
      >
        <span className="group-open:hidden">Menú</span>
        <span className="hidden group-open:inline">Cerrar</span>
      </summary>

      <nav
        aria-label="Navegación móvil"
        className="fixed inset-x-4 top-[68px] z-[120] grid overflow-hidden rounded-sm border border-[#36577c] bg-[#071a36] p-2 shadow-[0_14px_34px_rgba(3,9,20,0.72)]"
      >
        {navLinks.map((link) => (
          <Link
            className="flex min-h-12 items-center rounded-sm border-b border-white/10 px-4 text-sm font-bold text-white/90 transition last:border-b-0 hover:bg-white/10 hover:text-white"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
