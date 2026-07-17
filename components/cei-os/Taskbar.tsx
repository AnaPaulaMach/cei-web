import Link from "next/link";
import { contactLinks, repositoryLink } from "@/data/commission";

export function Taskbar() {
  const taskbarLinks = [{ label: "Quiénes somos", href: "/comision" }, ...contactLinks, repositoryLink];

  return (
    <footer className="hidden border-t border-[#215ca8] bg-[#071a36] px-4 py-3 text-white shadow-[0_-3px_12px_rgba(3,9,20,0.4)] md:block">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <Link
          className="hidden min-h-11 shrink-0 items-center rounded-sm border border-white/70 bg-[#18794e] px-4 font-mono text-sm font-black shadow-[inset_1px_1px_0_rgba(255,255,255,0.4)] sm:inline-flex"
          href="/"
        >
          CEI Start
        </Link>
        <nav aria-label="Canales oficiales" className="flex flex-wrap gap-x-4 font-mono text-xs font-black sm:justify-end">
          {taskbarLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <a
                className="inline-flex min-h-11 items-center text-white/80 underline-offset-4 hover:text-white hover:underline"
                href={link.href}
                key={link.label}
                rel={isExternal ? "noopener noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
