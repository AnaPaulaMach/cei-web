import Link from "next/link";
import { contactLinks, repositoryLink } from "@/data/commission";

export function Taskbar() {
  const taskbarLinks = [...contactLinks, repositoryLink];

  return (
    <div className="border-t-2 border-white bg-gradient-to-r from-cei-blue via-blue-700 to-cei-shadow px-4 py-3 text-white shadow-[0_-4px_0_rgba(9,36,95,0.35)]">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <Link className="w-fit rounded-sm border-2 border-white bg-green-600 px-5 py-1.5 font-mono text-sm font-black shadow-pixel" href="/">
          CEI Start
        </Link>
        <p className="hidden font-mono text-xs lg:block">CEI - comunidad informatica online</p>
        <div className="grid grid-cols-2 gap-2 font-mono text-xs font-black sm:grid-cols-4 lg:flex lg:justify-end">
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
