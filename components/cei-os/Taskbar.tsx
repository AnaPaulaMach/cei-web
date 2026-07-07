import Link from "next/link";
import { contactLinks, repositoryLink } from "@/data/commission";

export function Taskbar() {
  const taskbarLinks = [...contactLinks, repositoryLink];

  return (
    <div className="border-t-2 border-white bg-gradient-to-r from-cei-blue via-blue-700 to-cei-shadow px-3 py-2 text-white shadow-[0_-4px_0_rgba(9,36,95,0.35)] sm:px-4 sm:py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link className="w-fit shrink-0 rounded-sm border-2 border-white bg-green-600 px-4 py-1.5 font-mono text-xs font-black shadow-pixel sm:text-sm" href="/">
          CEI Start
        </Link>
        <p className="min-w-0 flex-1 truncate text-right font-mono text-[11px] text-white sm:text-left sm:text-xs">
          CEI - comunidad informatica online
        </p>
        <div className="hidden gap-2 font-mono text-xs font-black lg:flex lg:justify-end">
          {taskbarLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <a
                className="rounded-sm border border-white/55 px-2 py-1.5 text-center text-white/95 underline-offset-4 hover:bg-white/10 hover:underline lg:shrink-0 lg:px-3"
                href={link.href}
                key={link.label}
                rel={isExternal ? "noopener noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
