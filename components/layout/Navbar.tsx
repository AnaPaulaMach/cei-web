import Link from "next/link";
import Image from "next/image";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
  return (
    <header className="relative z-[100] border-b border-[#2b65ad] bg-[#081d3c] text-white shadow-[0_5px_18px_rgba(3,9,20,0.28)]">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4d8bd3] to-transparent" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <Link className="flex min-h-11 w-fit items-center gap-3 text-white" href="/">
          <span className="grid h-11 w-11 place-items-center rounded-md border border-white/20 bg-[#eef2f7] shadow-[0_5px_14px_rgba(3,9,20,0.35)]">
            <Image
              alt="Logo CEI"
              className="h-9 w-9 object-contain"
              height={32}
              src="/logo/logo_sin_fondo.png"
              width={32}
            />
          </span>
          <span className="grid leading-none">
            <span className="text-sm font-black">CEI</span>
            <span className="mt-1 font-mono text-[10px] font-bold text-white/55">UNSE</span>
          </span>
        </Link>

        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
}
