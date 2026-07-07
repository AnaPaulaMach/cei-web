import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex max-w-full whitespace-normal rounded-sm border border-cei-shadow bg-cei-alert px-2 py-1 text-left font-mono text-xs font-black uppercase leading-4 text-cei-shadow">
      {children}
    </span>
  );
}
