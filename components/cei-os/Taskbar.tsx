import Link from "next/link";
import { contactLinks, repositoryLink } from "@/data/commission";

export function Taskbar() {
  const taskbarLinks = [...contactLinks, repositoryLink];

  return (
    <div className="border-t-2 border-white bg-gradient-to-r from-cei-blue via-blue-700 to-cei-shadow px-4 py-3 text-white shadow-[0_-4px_0_rgba(9,36,95,0.35)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <Link className="rounded-sm border-2 border-white bg-green-600 px-5 py-1.5 font-mono text-sm font-black shadow-pixel" href="/">
          CEI Start
        </Link>
        <p className="hidden font-mono text-xs lg:block">CEI - comunidad informatica online</p>
        <div className="flex flex-1 justify-end gap-2 overflow-x-auto font-mono text-xs font-black">
          {taskbarLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <a
                className="shrink-0 rounded-sm border border-white/55 px-3 py-1.5 text-white/95 underline-offset-4 hover:bg-white/10 hover:underline"
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
