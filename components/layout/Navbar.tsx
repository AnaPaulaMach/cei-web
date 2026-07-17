import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/commission";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
  return (
    <header className="relative z-[100] border-b border-[#215ca8] bg-[#071a36] text-white shadow-[0_2px_8px_rgba(3,9,20,0.38)]">
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

        <MobileNav />

        <div className="hidden gap-1 lg:flex lg:items-center">
          {navLinks.map((link) => (
            <Link
              className="rounded-sm px-3 py-2 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white"
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
