import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return <div className={`rounded-sm border-2 border-cei-shadow bg-cei-window p-5 shadow-pixel ${className}`} {...props} />;
}
