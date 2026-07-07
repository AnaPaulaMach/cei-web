import Link from "next/link";

export function Taskbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-white bg-gradient-to-r from-cei-blue via-blue-700 to-cei-shadow px-3 py-2 text-white shadow-[0_-4px_0_rgba(9,36,95,0.35)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link className="rounded-sm border-2 border-white bg-green-600 px-4 py-1 font-mono text-sm font-black shadow-pixel" href="/">
          CEI Start
        </Link>
        <p className="hidden font-mono text-xs sm:block">CEI OS - comunidad informatica online</p>
        <time className="rounded-sm border border-white/70 px-2 py-1 font-mono text-xs">UNSE</time>
      </div>
    </div>
  );
}
