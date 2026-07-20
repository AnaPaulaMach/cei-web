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
    <div className="rounded-sm border-2 border-cei-shadow bg-cei-window p-4 shadow-xp-window sm:p-5">
      <p className="terminal-text ui-kicker">shortcuts</p>
      <h2 className="mb-4 text-2xl font-black text-cei-shadow sm:mb-5 sm:text-3xl">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <a
              className="xp-button rounded-sm p-3 text-cei-shadow sm:p-4"
              href={link.href}
              key={link.label}
              rel={isExternal ? "noopener noreferrer" : undefined}
              target={isExternal ? "_blank" : undefined}
            >
              <span className="font-mono text-[15px] font-bold">{link.label}</span>
              <span className="ui-small-copy mt-1 block">{link.description}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
