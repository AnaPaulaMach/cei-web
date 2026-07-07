import type { ReactNode } from "react";
import { Taskbar } from "@/components/cei-os/Taskbar";

type DesktopShellProps = {
  children: ReactNode;
};

export function DesktopShell({ children }: DesktopShellProps) {
  return (
    <div className="desktop-grid min-h-screen">
      {children}
      <Taskbar />
    </div>
  );
}
