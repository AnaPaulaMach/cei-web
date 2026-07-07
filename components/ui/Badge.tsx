import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-sm border border-cei-shadow bg-cei-alert px-2 py-1 font-mono text-xs font-black uppercase text-cei-shadow">
      {children}
    </span>
  );
}
