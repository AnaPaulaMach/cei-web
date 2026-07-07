import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/commission";

export function Navbar() {
  return (
    <header className="relative z-40 border-b border-[#07111f] bg-[#123a7a] text-white shadow-[0_3px_0_rgba(7,17,31,0.35)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link className="flex w-fit items-center gap-3 font-mono font-black text-white" href="/">
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-[#07111f] bg-white shadow-[3px_3px_0_rgba(7,17,31,0.55)]">
            <Image
              alt="Logo CEI"
              className="h-8 w-8 object-contain"
              height={32}
              src="/logo/logo_sin_fondo.png"
              width={32}
            />
          </span>
          <span className="tracking-wide">CEI</span>
        </Link>

        <details className="relative lg:hidden">
          <summary className="xp-button cursor-pointer list-none rounded-sm px-4 py-2 font-mono text-sm font-black text-cei-shadow">
            Menu
          </summary>
          <div className="absolute right-0 top-12 z-50 grid w-56 gap-2 rounded-sm border border-[#07111f] bg-[#123a7a] p-2 shadow-[4px_4px_0_rgba(7,17,31,0.45)]">
            {navLinks.map((link) => (
              <Link
                className="rounded-sm border border-[#07111f] bg-gradient-to-b from-[#dbeafe] via-[#9fb9d8] to-[#6f8db6] px-3 py-2 text-center text-sm font-black text-cei-shadow shadow-[2px_2px_0_rgba(7,17,31,0.45)]"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>

        <div className="hidden gap-2 lg:flex lg:items-center">
          {navLinks.map((link) => (
            <Link
              className="min-h-10 rounded-sm border border-[#07111f] bg-gradient-to-b from-[#dbeafe] via-[#9fb9d8] to-[#6f8db6] px-2.5 py-2 text-center text-xs font-black text-cei-shadow shadow-[2px_2px_0_rgba(7,17,31,0.45)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:brightness-110 sm:text-sm lg:shrink-0 lg:px-3"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
