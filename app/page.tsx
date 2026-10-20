import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <ServiceIndex />

      {/* Featured capability: asymmetric, full-bleed image */}
      <section aria-labelledby="featured" className="bg-brand text-white">
        <div className="grid lg:grid-cols-[7fr_5fr]">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[560px]">
            <Image src="/images/hero-borehole.jpg" alt="Drilling rig beside a spray of clean water" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover [object-position:60%_60%]" />
          </div>
          <Reveal className="flex flex-col justify-center px-5 py-14 md:px-10 lg:px-16 lg:py-24">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-signal">Featured capability</p>
            <h2 id="featured" className="mt-4 text-h2 text-white">Borehole and water systems, surveyed before a single metre is drilled.</h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/80">From site survey and drilling to pumps, storage and treatment, delivered with a written scope and cost.</p>
            <Link href="/services#borehole-drilling" className="mt-8 inline-flex min-h-[44px] items-center gap-2 font-display text-[15px] font-bold text-signal hover:underline">
              See borehole services <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ProcessSteps />
      <EnquiryBand />
    </>
  );
}
