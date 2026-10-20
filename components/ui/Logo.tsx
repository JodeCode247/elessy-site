import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <Link href="/" aria-label="ELESSY Nigeria Limited, home" className={cn("inline-flex min-h-[44px] items-center gap-3", className)}>
      <span aria-hidden className="block h-3.5 w-3.5 bg-signal" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[22px] font-extrabold tracking-[0.12em]", light ? "text-white" : "text-brand")}>ELESSY</span>
        <span className={cn("mt-1 text-[8.5px] font-semibold tracking-[0.28em]", light ? "text-sage" : "text-steel")}>NIGERIA LIMITED</span>
      </span>
    </Link>
  );
}
