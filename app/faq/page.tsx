import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/content";

export const metadata: Metadata = { title: "FAQ", description: "Answers to the questions clients ask ELESSY first." };

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow="FAQ" title="Questions clients ask us first." />
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-20">
          <div className="border-t border-line">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-line">
                <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[18px] font-bold md:text-[22px] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus aria-hidden className="h-6 w-6 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="max-w-prose pb-6 text-[17px] leading-relaxed text-steel">{f.a}</p>
              </details>
            ))}
          </div>
          <aside className="self-start rounded-[6px] bg-brand p-8 text-white lg:sticky lg:top-28">
            <h2 className="text-h3 text-white">Still have a question?</h2>
            <p className="mt-3 text-white/80">Speak to an engineer. We reply to every enquiry.</p>
            <Button href="/contact" className="mt-6 w-full">Make an enquiry</Button>
          </aside>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
