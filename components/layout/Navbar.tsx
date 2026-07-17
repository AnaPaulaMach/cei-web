import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/commission";

export function Navbar() {
  return (
    <header className="relative z-40 border-b border-[#030914] bg-[#071a36] text-white shadow-[0_3px_0_rgba(3,9,20,0.55)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link className="flex w-fit items-center gap-3 font-mono font-black text-white" href="/">
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-[#030914] bg-[#e3e7ed] shadow-[3px_3px_0_rgba(3,9,20,0.65)]">
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

        <details className="relative xl:hidden">
          <summary className="xp-button cursor-pointer list-none rounded-sm px-4 py-2 font-mono text-sm font-black text-cei-shadow">
            Menu
          </summary>
          <div className="absolute right-0 top-12 z-50 grid w-56 gap-2 rounded-sm border border-[#030914] bg-[#071a36] p-2 shadow-[4px_4px_0_rgba(3,9,20,0.6)]">
            {navLinks.map((link) => (
              <Link
                className="rounded-sm border border-[#030914] bg-gradient-to-b from-[#d8dee7] via-[#a7b5c6] to-[#71869f] px-3 py-2 text-center text-sm font-black text-cei-shadow shadow-[2px_2px_0_rgba(3,9,20,0.55)]"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>

        <div className="hidden gap-2 xl:flex xl:items-center">
          {navLinks.map((link) => (
            <Link
              className="min-h-10 rounded-sm border border-[#030914] bg-gradient-to-b from-[#d8dee7] via-[#a7b5c6] to-[#71869f] px-2.5 py-2 text-center text-xs font-black text-cei-shadow shadow-[2px_2px_0_rgba(3,9,20,0.55)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:brightness-110 sm:text-sm xl:shrink-0 xl:px-3"
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
