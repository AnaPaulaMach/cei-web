import { socialLinks } from "@/data/commission";

export function Footer() {
  return (
    <footer className="border-t-2 border-cei-shadow bg-cei-window px-4 py-8 text-sm text-cei-shadow">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono font-black">CEI UNSE</p>
          <p>Comision de Estudiantes de Informatica - FCEyT</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <a
                className="font-bold underline-offset-4 hover:underline"
                href={link.href}
                key={link.label}
                rel={isExternal ? "noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
