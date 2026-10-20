import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function EnquiryBand() {
  return (
    <section aria-labelledby="enquiry-band" className="bg-brand-mid text-white">
      <div className="container-page flex flex-col gap-8 py-14 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em]">Ready to start?</p>
          <h2 id="enquiry-band" className="mt-3 max-w-[18ch] text-h1 text-white">Tell us about your project.</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" className="min-h-[56px] px-8 text-[17px]">Make an enquiry</Button>
          <Button href={site.phoneHref} variant="ghost" className="min-h-[56px] px-8 text-[17px]">Call {site.phone}</Button>
        </div>
      </div>
    </section>
  );
}
