import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return <div className={`rounded-sm border border-cei-shadow/30 bg-cei-window p-5 shadow-sm ${className}`} {...props} />;
}
