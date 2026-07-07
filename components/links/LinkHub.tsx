type LinkHubItem = {
  label: string;
  href: string;
  description: string;
};

type LinkHubProps = {
  title: string;
  links: LinkHubItem[];
};

export function LinkHub({ title, links }: LinkHubProps) {
  return (
    <div className="rounded-sm border-2 border-cei-shadow bg-cei-window p-5 shadow-xp-window">
      <p className="terminal-text text-sm font-bold uppercase">shortcuts</p>
      <h2 className="mb-5 font-mono text-3xl font-black text-cei-shadow">{title}</h2>
      <div className="grid gap-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <a
              className="xp-button rounded-sm p-4 text-cei-shadow"
              href={link.href}
              key={link.label}
              rel={isExternal ? "noopener noreferrer" : undefined}
              target={isExternal ? "_blank" : undefined}
            >
              <span className="flex flex-wrap items-center gap-2 font-mono font-black">
                {link.label}
                {isExternal ? (
                  <span className="rounded-sm border border-cei-shadow bg-white px-2 py-0.5 text-[10px] uppercase">
                    externo
                  </span>
                ) : null}
              </span>
              <span className="block text-sm">{link.description}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
