import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceIndex() {
  return (
    <section aria-labelledby="service-index" className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal>
          <p className="eyebrow">What we deliver</p>
          <h2 id="service-index" className="mt-4 max-w-[14ch] text-h2">Our disciplines. One accountable team.</h2>
          <Link href="/services" className="mt-8 inline-flex min-h-[44px] items-center gap-2 font-display text-[15px] font-bold text-brand hover:underline">
            All services <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Reveal>
        <ol className="border-t border-line">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line">
              <Link href={`/services#${s.slug}`} className="group grid min-h-[64px] grid-cols-[2rem_1fr_auto] items-center gap-x-3 py-3 transition-colors hover:bg-white md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-5 md:px-3">
                <span className="text-[13px] tabular-nums text-steel">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[18px] font-bold md:text-[20px]">{s.name}</span>
                <span className="hidden text-[14px] text-steel md:block">{s.short}</span>
                <ArrowRight aria-hidden className="h-5 w-5 text-brand transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
