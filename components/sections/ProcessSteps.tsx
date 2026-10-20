import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSteps() {
  return (
    <section aria-labelledby="process" className="section-y border-t border-line bg-site">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 id="process" className="mt-4 text-h2">Four steps from first call to handover.</h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <li className="border-t border-line pt-5">
                <span className="font-display text-[16px] font-bold text-brand-mid">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-h3">{p.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-steel">{p.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
