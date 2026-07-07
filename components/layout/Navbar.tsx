import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/commission";

export function Navbar() {
  return (
    <header className="relative z-40 border-b border-[#07111f] bg-[#123a7a] text-white shadow-[0_3px_0_rgba(7,17,31,0.35)]">
      <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
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
        <div className="flex gap-2 overflow-x-auto pb-1 lg:items-center lg:overflow-visible lg:pb-0">
          {navLinks.map((link) => (
            <Link
              className="shrink-0 rounded-sm border border-[#07111f] bg-gradient-to-b from-[#dbeafe] via-[#9fb9d8] to-[#6f8db6] px-3 py-2 text-sm font-black text-cei-shadow shadow-[3px_3px_0_rgba(7,17,31,0.5)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:brightness-110"
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
