import { XPWindow } from "@/components/cei-os/XPWindow";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <XPWindow title="loading/data.sys">
        <div className="space-y-4">
          <p className="terminal-text ui-kicker">leyendo datos...</p>
          <div className="h-4 overflow-hidden rounded-sm border-2 border-cei-shadow bg-white">
            <div className="boot-line h-full w-2/3 bg-cei-terminal" />
          </div>
        </div>
      </XPWindow>
    </div>
  );
}
