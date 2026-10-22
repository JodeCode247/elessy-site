"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const overlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Scroll lock, Escape to close, focus trap
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const f = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = f[0];
      const last = f[f.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open, close]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300",
          overlay ? "bg-transparent" : "bg-white shadow-[0_1px_0_rgb(var(--line))]"
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between lg:h-[84px]">
          <Logo tone={overlay ? "light" : "dark"} />
          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[15px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:w-[26px] after:origin-left after:scale-x-0 after:bg-signal after:transition-transform hover:after:scale-x-100",
                    overlay ? "text-white" : "text-ink hover:text-brand",
                    active && "font-semibold after:scale-x-100",
                    active && !overlay && "text-brand"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button href="/contact" className="hidden lg:inline-flex">Make an enquiry</Button>
            <a href={site.phoneHref} aria-label={`Call ${site.phone}`} className={cn("inline-flex h-11 w-11 items-center justify-center lg:hidden", overlay ? "text-white" : "text-ink")}>
              <Phone aria-hidden className="h-5 w-5" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={cn("inline-flex h-11 w-11 items-center justify-center lg:hidden", overlay ? "text-white" : "text-ink")}
            >
              <Menu aria-hidden className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-50 flex min-h-[100svh] flex-col bg-brand px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 text-white lg:hidden"
        >
          <div className="flex h-[60px] items-center justify-between">
            <Logo tone="light" />
            <button ref={closeRef} type="button" onClick={close} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage/60">
              <X aria-hidden className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-6 flex-1 overflow-y-auto">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-white/15">
                  <Link href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className="flex min-h-[60px] items-center font-display text-[28px] font-bold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 space-y-4">
            <Button href="/contact" className="w-full min-h-[56px] text-[17px]">Make an enquiry</Button>
            <a href={site.phoneHref} className="flex min-h-[44px] items-center gap-3 text-[15px]"><Phone aria-hidden className="h-5 w-5 text-signal" />{site.phone}</a>
            <a href={`mailto:${site.email}`} className="flex min-h-[44px] items-center gap-3 text-[15px]">{site.email}</a>
          </div>
        </div>
      )}
    </>
  );
}
