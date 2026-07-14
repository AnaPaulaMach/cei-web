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
    <div className="rounded-sm bg-cei-window/95 p-4 sm:p-6">
      <h2 className="mb-4 font-mono text-2xl font-black text-cei-shadow sm:text-3xl">{title}</h2>
      <div className="grid divide-y divide-cei-shadow/15 rounded-sm bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <a
              className="group p-4 text-cei-shadow transition hover:bg-[#fff7c2]"
              href={link.href}
              key={link.label}
              rel={isExternal ? "noopener noreferrer" : undefined}
              target={isExternal ? "_blank" : undefined}
            >
              <span className="flex items-center justify-between gap-3 font-mono font-black">
                {link.label}
                <span aria-hidden="true" className="text-cei-shadow/40 transition group-hover:text-cei-shadow">
                  &gt;
                </span>
              </span>
              <span className="mt-1 block text-sm leading-6 text-slate-700">{link.description}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
