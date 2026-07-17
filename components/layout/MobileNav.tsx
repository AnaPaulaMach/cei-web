"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/commission";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="navegacion-movil"
        aria-expanded={isOpen}
        aria-label="Menú principal"
        className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-3 text-sm font-bold text-white transition hover:bg-white/[0.07]"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? (
          <>
            <span>Cerrar</span>
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </>
        ) : (
          <>
            <span>Menú</span>
            <span aria-hidden="true" className="grid gap-1">
              <span className="h-0.5 w-4 bg-current" />
              <span className="h-0.5 w-4 bg-current" />
              <span className="h-0.5 w-4 bg-current" />
            </span>
          </>
        )}
      </button>

      {isOpen ? (
        <>
          <button
            aria-label="Cerrar menú"
            className="fixed inset-x-0 bottom-0 top-[72px] z-[110] cursor-default bg-black/10"
            onClick={closeMenu}
            type="button"
          />

          <nav
            aria-label="Navegación móvil"
            className="fixed inset-x-4 top-[72px] z-[120] grid overflow-hidden rounded-sm border border-white/15 bg-[#151e2a] p-2 shadow-[0_16px_38px_rgba(3,9,20,0.72)]"
            id="navegacion-movil"
          >
            {navLinks.map((link) => (
              <Link
                className="flex min-h-12 items-center rounded-sm border-b border-white/10 px-4 text-sm font-bold text-white/85 transition last:border-b-0 hover:bg-white/[0.07] hover:text-white"
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      ) : null}
    </div>
  );
}
