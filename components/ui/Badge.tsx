import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="ui-meta-label inline-flex max-w-full whitespace-normal rounded-sm border border-cei-shadow bg-cei-alert px-2.5 py-1 text-left text-cei-shadow">
      {children}
    </span>
  );
}
