import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/commission";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b-2 border-cei-shadow bg-cei-window/95 shadow-pixel backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
        <Link className="flex w-fit items-center gap-3 font-mono font-black text-cei-shadow" href="/">
          <span className="grid h-10 w-10 place-items-center rounded-sm border-2 border-cei-shadow bg-white shadow-pixel">
            <Image
              alt="Logo CEI"
              className="h-8 w-8 object-contain"
              height={32}
              src="/logo/logo_sin_fondo.png"
              width={32}
            />
          </span>
          <span>CEI OS</span>
        </Link>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:items-center lg:overflow-visible lg:pb-0">
          {navLinks.map((link) => (
            <Link className="xp-button shrink-0 rounded-sm px-3 py-2 text-sm font-bold text-cei-shadow" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
