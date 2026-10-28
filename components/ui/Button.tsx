import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "dark" | "light";

const base =
  "inline-flex min-h-[48px] select-none items-center justify-center gap-2 rounded-[4px] px-6 font-display text-[15px] font-bold tracking-tight transition-[background-color,color,transform,border-color] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-signal text-ink hover:bg-[#f2b134]", // yellow
  ghost: "border border-white/70 text-white hover:bg-white hover:text-brand",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  dark: "bg-brand text-white hover:bg-brand-deep", // solid red
  light: "bg-white text-brand hover:bg-mist", // white with red text
};

type Common = { variant?: Variant; arrow?: boolean; className?: string; children: ReactNode };
type AsLink = Common & { href: string; external?: boolean } & { onClick?: never; type?: never; disabled?: never };
type AsButton = Common & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", arrow = false, className, children } = props;
  const cls = cn(base, variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );
  if (props.href !== undefined) {
    const { href, external } = props as AsLink;
    const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={cn(cls, "group")} {...(/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(cls, "group")}>
        {content}
      </Link>
    );
  }
  const { variant: _v, arrow: _a, className: _c, children: _ch, href: _h, ...rest } = props as AsButton;
  return (
    <button type="button" className={cn(cls, "group")} {...rest}>
      {content}
    </button>
  );
}