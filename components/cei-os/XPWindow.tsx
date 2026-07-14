import type { ReactNode } from "react";

type XPWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function XPWindow({ title, children, className = "" }: XPWindowProps) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-sm border border-cei-shadow/70 bg-cei-window shadow-xp-window ${className}`}>
      <div className="flex items-center justify-between border-b border-cei-shadow/70 bg-gradient-to-r from-cei-blue to-cei-sky px-3 py-2 text-white">
        <span className="truncate font-mono text-sm font-black">{title}</span>
        <div aria-hidden="true" className="hidden gap-1 sm:flex">
          <span className="grid h-5 w-5 place-items-center border border-white/70 bg-cei-window text-xs font-black text-cei-shadow">_</span>
          <span className="grid h-5 w-5 place-items-center border border-white/70 bg-cei-window text-xs font-black text-cei-shadow">[]</span>
          <span className="grid h-5 w-5 place-items-center border border-white/70 bg-red-500 text-xs font-black text-white">x</span>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6">{children}</div>
    </div>
  );
}
