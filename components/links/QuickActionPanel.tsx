import Link from "next/link";

export type QuickAction = {
  label: string;
  href: string;
  description: string;
  eyebrow: string;
  shortcut: string;
};

type QuickActionPanelProps = {
  actions: QuickAction[];
  title: string;
  subtitle?: string;
};

export function QuickActionPanel({ actions, title, subtitle }: QuickActionPanelProps) {
  return (
    <div className="rounded-sm border-2 border-cei-shadow bg-cei-window p-4 shadow-xp-window">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="terminal-text text-xs font-bold uppercase">quick access</p>
          <h2 className="font-mono text-2xl font-black text-cei-shadow">{title}</h2>
        </div>
        {subtitle ? <p className="max-w-44 text-right text-xs leading-5 text-slate-700">{subtitle}</p> : null}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const isExternal = action.href.startsWith("http");
          const className =
            "group flex min-h-32 flex-col justify-between rounded-sm border-2 border-cei-shadow bg-white p-3 text-cei-shadow shadow-pixel transition hover:-translate-y-1 hover:bg-cei-window focus-visible:outline-cei-alert";
          const content = (
            <>
              <span className="grid h-11 w-11 place-items-center border-2 border-cei-shadow bg-[#07111f] font-mono text-xs font-black text-cei-terminal shadow-pixel transition group-hover:bg-cei-shadow">
                {action.shortcut}
              </span>
              <span>
                <span className="block font-mono text-[10px] font-black uppercase text-cei-shadow/70">
                  {action.eyebrow}
                </span>
                <span className="mt-1 block font-mono text-sm font-black leading-5">{action.label}</span>
                <span className="mt-1 block text-xs leading-5 text-slate-700">{action.description}</span>
              </span>
            </>
          );

          if (isExternal || action.href.startsWith("mailto:")) {
            return (
              <a
                className={className}
                href={action.href}
                key={action.label}
                rel={isExternal ? "noopener noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
              >
                {content}
              </a>
            );
          }

          return (
            <Link className={className} href={action.href} key={action.label}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
