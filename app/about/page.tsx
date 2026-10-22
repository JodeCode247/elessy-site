import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Reveal } from "@/components/ui/Reveal";
import { clientTypes, company, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "ELESSY Nigeria Limited has delivered engineering, construction, water, power and solar projects across Nigeria since 1983.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About ELESSY" title="Engineering and construction across Nigeria since 1983." />

      <section aria-labelledby="story" className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[6fr_5fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our story</p>

            <h2
              id="story"
              className="mt-4 max-w-[20ch] text-h2"
            >
              Built by engineers and managers, growing in strength.
            </h2>

            <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-steel">
              <p>
                ELESSY Nigeria Limited was registered with the {company.regBody} as
                a limited liability company in {company.founded} (Registration No.{" "}
                {company.regNo}). It began with an associate team of experts with
                both engineering and management backgrounds, and has been growing
                in strength ever since.
              </p>

              <p>
                Our experience spans building, electrical, mechanical and civil
                engineering. The company was set up to import, sell, construct
                and install engineering devices.
              </p>

              <p>
                As the Nigerian economy has changed, so has ELESSY. We have
                diversified into services, industry and power, and into boreholes,
                potable and drinking water treatment plants, sewage plants, solar
                energy and agro-allied services. With new energy innovation, we
                have invested in solar services to complement the federal
                government&apos;s efforts to revive the energy sector.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex min-h-[320px] items-center justify-center bg-white p-8 md:min-h-[420px] md:p-12">
              <div className="relative aspect-square w-full max-w-[320px]">
                <Image
                  src="/images/elessy-logo.png"
                  alt="ELESSY Nigeria Limited company logo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Mission and vision" className="bg-brand text-white">
        <div className="container-page grid gap-px bg-white/15 md:grid-cols-2">
          <Reveal className="bg-brand py-14 md:py-20 md:pr-12">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-signal">Our mission</p>
            <p className="mt-5 max-w-md font-display text-[clamp(1.375rem,2.4vw,1.875rem)] font-bold leading-snug text-white">To provide the most effective and ethical representation possible, and to inspire moments of optimism and happiness through quality, professional service.</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-brand py-14 md:py-20 md:pl-12">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-signal">Our vision</p>
            <p className="mt-5 max-w-md font-display text-[clamp(1.375rem,2.4vw,1.875rem)] font-bold leading-snug text-white">To give our customers the best service from beginning to end, with clear and secure methods, and fast, quality delivery.</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="what-we-do" className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 id="what-we-do" className="mt-4 max-w-[14ch] text-h2">Professional services, delivered on time and on budget.</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-steel">We are committed to meeting our clients&apos; needs and requirements in a timely and cost-effective way, using all of our people and knowledge.</p>
          </Reveal>
          <ol className="border-t border-line">
            {services.map((s, i) => (
              <li key={s.slug} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-4 md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1fr)]">
                <span className="text-[13px] tabular-nums text-steel">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[17px] font-bold leading-snug">{s.name}</span>
                <span className="col-start-2 text-[14px] text-steel md:col-start-3">{s.short}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="clients" className="border-t border-line bg-white py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our clients</p>
            <h2 id="clients" className="mt-4 max-w-[14ch] text-h2">Projects throughout Nigeria.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-prose text-[17px] leading-relaxed text-steel">ELESSY undertakes projects across the country. Our clients include:</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {clientTypes.map((c) => (
                <li key={c} className="rounded-full border border-line bg-site px-5 py-2.5 font-display text-[15px] font-bold">{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ProcessSteps />
      <EnquiryBand />
    </>
  );
}