import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const classes = [
    "xp-button inline-flex items-center justify-center rounded-sm px-4 py-2 font-mono text-[15px] font-bold leading-5 transition",
    variant === "primary" ? "text-cei-shadow" : "bg-white text-cei-shadow",
    className
  ].join(" ");

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a className={classes} href={href} rel={href.startsWith("http") ? "noreferrer" : undefined} target={href.startsWith("http") ? "_blank" : undefined}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
