import Link from "next/link";
import Image from "next/image";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
  return (
    <header className="relative z-[100] border-b border-[#315d8e] bg-[#101923] text-white shadow-[0_3px_12px_rgba(3,9,20,0.24)]">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#3d70a8]" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <Link className="flex min-h-11 w-fit items-center gap-3 text-white" href="/">
          <span className="grid h-11 w-11 place-items-center rounded-sm border border-white/20 bg-[#dbe4ef]">
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
