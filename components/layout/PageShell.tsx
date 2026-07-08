import type { HTMLAttributes } from "react";

type PageShellProps = HTMLAttributes<HTMLDivElement> & {
  spacing?: "default" | "compact" | "loose";
};

const spacingClasses = {
  default: "gap-8",
  compact: "gap-6 md:gap-10",
  loose: "gap-12"
};

export function PageShell({ className = "", spacing = "default", ...props }: PageShellProps) {
  return (
    <div
      className={`mx-auto flex w-full max-w-6xl flex-col ${spacingClasses[spacing]} ${className}`}
      {...props}
    />
  );
}
