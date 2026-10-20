"use client";

import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services, type Service } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function Panel({ s, mobile }: { s: Service; mobile?: boolean }) {
  return (
    <div>
      <div className={cn("relative w-full overflow-hidden bg-brand-deep", mobile ? "aspect-[16/10]" : "aspect-[16/7]")}>
        <Image src={s.image} alt={s.imageAlt} fill sizes={mobile ? "(max-width: 1024px) 100vw" : "(min-width: 1024px) 60vw, 100vw"} className="object-cover" />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-10">
        <div>
          <h2 className={cn("text-h2", mobile && "sr-only")}>{s.name}</h2>
          <p className="max-w-prose text-[17px] leading-relaxed text-steel md:mt-4">{s.summary}</p>
        </div>
        <ul className="space-y-2.5">
          {s.scope.map((t) => (
            <li key={t} className="flex gap-3 text-[16px]"><Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand" />{t}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={`/contact?service=${encodeURIComponent(s.name)}`}>Request a quote</Button>
        <Button href={site.phoneHref} variant="outline">Call us</Button>
      </div>
    </div>
  );
}

export function ServicesExplorer() {
  const [active, setActive] = useState<string>(services[0]?.slug ?? "");

  useEffect(() => {
    const apply = () => {
      const h = window.location.hash.slice(1);
      if (services.some((s) => s.slug === h)) setActive(h);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const current = services.find((s) => s.slug === active) ?? services[0];
  if (!current) return null;

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = services.findIndex((s) => s.slug === active);
    const delta = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = services[(i + delta + services.length) % services.length];
    if (!next) return;
    setActive(next.slug);
    document.getElementById(`tab-${next.slug}`)?.focus();
  };

  return (
    <section aria-label="Our services" className="section-y">
      <div className="container-page">
        {/* Desktop: list + detail */}
        <div className="hidden gap-16 lg:grid lg:grid-cols-[340px_minmax(0,1fr)]">
          <div role="tablist" aria-orientation="vertical" aria-label="Services" onKeyDown={onKey} className="self-start border-t border-line">
            {services.map((s) => {
              const on = s.slug === active;
              return (
                <button
                  key={s.slug}
                  id={`tab-${s.slug}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls={`panel-${s.slug}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(s.slug)}
                  className={cn("relative flex min-h-[56px] w-full items-center gap-3 border-b border-line px-4 text-left font-display text-[17px] transition-colors", on ? "bg-brand font-bold text-white" : "hover:bg-white")}
                >
                  {on && <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-signal" />}
                  <ServiceIcon name={s.icon} className="h-5 w-5 shrink-0" />
                  {s.name}
                </button>
              );
            })}
          </div>
          <div id={`panel-${current.slug}`} role="tabpanel" aria-labelledby={`tab-${current.slug}`} tabIndex={0}>
            <Panel s={current} />
          </div>
        </div>

        {/* Mobile and tablet: accordion */}
        <div className="border-t border-line lg:hidden">
          {services.map((s) => {
            const on = s.slug === active;
            return (
              <div key={s.slug} id={s.slug} className="scroll-mt-24 border-b border-line">
                <h2>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`m-panel-${s.slug}`}
                    onClick={() => setActive(on ? "" : s.slug)}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 text-left font-display text-[19px] font-bold"
                  >
                    <span className={cn(on && "text-brand")}>{s.name}</span>
                    {on ? <Minus aria-hidden className="h-5 w-5 text-brand" /> : <Plus aria-hidden className="h-5 w-5 text-brand" />}
                  </button>
                </h2>
                {on && (
                  <div id={`m-panel-${s.slug}`} role="region" aria-label={s.name} className="pb-8">
                    <Panel s={s} mobile />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
