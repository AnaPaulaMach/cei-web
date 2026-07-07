import Link from "next/link";

type DesktopIconProps = {
  href: string;
  label: string;
};

export function DesktopIcon({ href, label }: DesktopIconProps) {
  return (
    <Link className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-sm border-2 border-white/70 bg-white/20 p-4 text-center text-white backdrop-blur transition hover:bg-white/35" href={href}>
      <span className="grid h-14 w-14 place-items-center border-2 border-cei-shadow bg-cei-window font-mono font-black text-cei-shadow shadow-pixel transition group-hover:-translate-y-1">
        {label.slice(0, 2).toUpperCase()}
      </span>
      <span className="rounded-sm bg-cei-shadow/80 px-2 py-1 font-mono text-sm font-bold">{label}</span>
    </Link>
  );
}
