type GoogleFormPanelProps = {
  title: string;
  description: string;
  href?: string;
};

export function GoogleFormPanel({ title, description, href }: GoogleFormPanelProps) {
  return (
    <div className="rounded-sm bg-white p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-sm bg-cei-alert font-mono text-xs font-black text-cei-shadow">
          FORM
        </span>
        <div>
          <h2 className="font-mono text-2xl font-black text-cei-shadow">{title}</h2>
        </div>
      </div>
      <p className="leading-7 text-slate-800">{description}</p>
      <div className="mt-5">
        {href ? (
          <a
            className="xp-button inline-flex items-center justify-center rounded-sm px-4 py-2 font-mono text-sm font-black text-cei-shadow transition"
            href={href}
            rel="noreferrer"
            target="_blank"
          >
            Abrir Google Forms
          </a>
        ) : (
          <span className="inline-flex rounded-sm bg-cei-window px-4 py-2 font-mono text-sm font-black text-cei-shadow">
            Link de Google Forms pendiente
          </span>
        )}
      </div>
    </div>
  );
}
