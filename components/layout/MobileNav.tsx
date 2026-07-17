import Link from "next/link";
import { navLinks } from "@/data/commission";

export function MobileNav() {
  return (
    <details className="group lg:hidden">
      <summary
        aria-label="Menú principal"
        className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-3 text-sm font-bold text-white transition hover:bg-white/[0.07]"
      >
        <span className="group-open:hidden">Menú</span>
        <span aria-hidden="true" className="grid gap-1 group-open:hidden">
          <span className="h-0.5 w-4 bg-current" />
          <span className="h-0.5 w-4 bg-current" />
          <span className="h-0.5 w-4 bg-current" />
        </span>
        <span className="hidden group-open:inline">Cerrar</span>
        <span aria-hidden="true" className="hidden text-lg leading-none group-open:inline">
          ×
        </span>
      </summary>

      <nav
        aria-label="Navegación móvil"
        className="fixed inset-x-4 top-[72px] z-[120] grid overflow-hidden rounded-sm border border-white/15 bg-[#151e2a] p-2 shadow-[0_16px_38px_rgba(3,9,20,0.72)]"
      >
        {navLinks.map((link) => (
          <Link
            className="flex min-h-12 items-center rounded-sm border-b border-white/10 px-4 text-sm font-bold text-white/85 transition last:border-b-0 hover:bg-white/[0.07] hover:text-white"
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
