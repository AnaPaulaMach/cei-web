import Link from "next/link";
import { contactLinks, repositoryLink } from "@/data/commission";

export function Taskbar() {
  const taskbarLinks = [...contactLinks, repositoryLink];

  return (
    <div className="border-t border-white/30 bg-[#123a7a] px-4 py-4 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-between">
        <Link className="shrink-0 font-mono text-sm font-black" href="/">
          CEI UNSE
        </Link>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs font-black sm:justify-end">
          {taskbarLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isRepository = link.href === repositoryLink.href;

            return (
              <a
                className={`${isRepository ? "hidden sm:inline" : "inline"} text-white/90 underline-offset-4 hover:text-white hover:underline`}
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
