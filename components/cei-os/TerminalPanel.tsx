type TerminalPanelProps = {
  lines: string[];
};

export function TerminalPanel({ lines }: TerminalPanelProps) {
  return (
    <div className="pixel-border bg-[#0d1219] p-5 font-mono text-sm text-cei-terminal shadow-pixel">
      <div className="mb-4 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-cei-alert" />
        <span className="h-3 w-3 rounded-full bg-cei-terminal" />
      </div>
      <div className="space-y-2">
        {lines.map((line) => (
          <p key={line}>
            <span className="text-white/70">&gt;</span> {line}
          </p>
        ))}
      </div>
    </div>
  );
}
