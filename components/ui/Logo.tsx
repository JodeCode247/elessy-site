import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ELESSY Nigeria Limited home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <span
        className={cn(
          "font-display text-[22px] font-bold leading-none tracking-[-0.045em] sm:text-[26px]",
          tone === "dark" ? "text-brand" : "text-white"
        )}
      >
        Elessy
        <span className="ml-1.5 text-[11px] font-medium tracking-[0.04em] sm:text-[12px]">
          Nigeria Limited
        </span>
      </span>
    </Link>
  );
}
