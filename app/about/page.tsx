import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MissionVision } from "@/components/sections/MissionVision";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Reveal } from "@/components/ui/Reveal";
import { clientTypes, company, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "ELESSY Nigeria Limited has delivered engineering, construction, water, power and solar projects across Nigeria since 1983.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ELESSY"
        title="Engineering and construction across Nigeria since 1983."
      />

      {/* Company history */}
      <section
        aria-labelledby="story"
        className="section-y bg-white"
      >
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our story</p>

            <h2
              id="story"
              className="mt-4 max-w-[17ch] font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
            >
              Experience built over decades of engineering.
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-steel md:text-[17px]">
              <p>
                ELESSY Nigeria Limited was registered with the{" "}
                {company.regBody} as a limited liability company in{" "}
                {company.founded} (Registration No. {company.regNo}). It began
                with an associate team of experts with engineering and
                management backgrounds and has continued to grow in strength.
              </p>

              <p>
                Our experience spans building, electrical, mechanical and civil
                engineering. The company was established to import, sell,
                construct and install engineering devices.
              </p>

              <p>
                As Nigeria&apos;s needs have evolved, ELESSY has diversified
                into industry, power and infrastructure, including boreholes,
                potable water treatment, sewage treatment, solar energy and
                agro-allied services. Our investment in solar solutions
                complements the wider effort to improve energy access across
                the country.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-line bg-site p-6 sm:p-9 lg:p-10">
              <div className="flex min-h-[260px] items-center justify-center border-b border-line bg-white p-8 sm:min-h-[320px]">
                <div className="relative aspect-square w-full max-w-[270px]">
                  <Image
                    src="/images/elessy-logo.png"
                    alt="ELESSY Nigeria Limited"
                    fill
                    sizes="(min-width: 1024px) 30vw, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 pt-6">
                <div>
                  <p className="font-display text-3xl font-bold text-brand sm:text-4xl">
                    {company.founded}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-steel">
                    Established in Nigeria
                  </p>
                </div>

                <div className="border-l border-line pl-5">
                  <p className="font-display text-xl font-bold text-ink">
                    Nationwide
                  </p>
                  <p className="mt-2 text-sm leading-6 text-steel">
                    Engineering and infrastructure services
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      

      <MissionVision/>

      {/* Clients */}
      <section
        aria-labelledby="clients"
        className="border-t border-line bg-site py-16 md:py-20 lg:py-24"
      >
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Who we work with</p>

            <h2
              id="clients"
              className="mt-4 max-w-[15ch] font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
            >
              Supporting clients across Nigeria.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-7 text-steel">
              Our work serves a range of organisations and sectors. We
              approach each project with attention to its specific technical
              requirements and operating environment.
            </p>

            <ul className="mt-7 border-t border-line">
              {clientTypes.map((client) => (
                <li
                  key={client}
                  className="flex items-center justify-between gap-4 border-b border-line py-4"
                >
                  <span className="text-base font-medium text-ink">
                    {client}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 bg-brand"
                  />
                </li>
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