import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-sm border border-cei-shadow/55 bg-cei-window p-5 shadow-[0_6px_18px_rgba(3,9,20,0.2)] ${className}`}
      {...props}
    />
  );
}
