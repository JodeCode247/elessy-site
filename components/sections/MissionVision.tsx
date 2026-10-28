import { Award, Eye, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { Icon: ShieldCheck, title: "Ethical", text: "Honest, ethical representation of every client." },
  { Icon: Award, title: "Professional", text: "Quality, professional service on every job." },
  { Icon: Eye, title: "Clear and secure", text: "Clear and secure methods from start to finish." },
  { Icon: Timer, title: "Fast delivery", text: "Quick, quality delivery from beginning to end." },
] as const;

function Honeycomb({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      {[
        [60, 60],
        [140, 60],
        [100, 130],
      ].map(([x, y]) => (
        <polygon
          key={`${x}-${y}`}
          points={`${x},${y - 46} ${x + 40},${y - 23} ${x + 40},${y + 23} ${x},${y + 46} ${x - 40},${y + 23} ${x - 40},${y - 23}`}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

export function MissionVision() {
  return (
    <section
      aria-labelledby="purpose"
      className="section-y overflow-hidden bg-site !py-12 md:!py-16 lg:!py-20"
    >
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Our purpose</p>

          <h2
            id="purpose"
            className="mt-3 max-w-[22ch] text-h2"
          >
            What we stand for, and where we are going.
          </h2>
        </Reveal>

        {/* Compact staggered mission and vision panels */}
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-12 lg:gap-0">
          {/* Mission */}
          <Reveal className="lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:self-start">
            <article className="relative overflow-hidden border border-line bg-white p-6 shadow-[0_16px_35px_-25px_rgb(31_26_26/0.3)] sm:p-8 lg:p-10 lg:pr-16">
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-3 select-none font-display text-[4.5rem] font-normal leading-none text-transparent opacity-25 [-webkit-text-stroke:1.5px_var(--color-brand)] sm:text-[5.5rem]"
              >
                01
              </span>

              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-[3px] w-8 bg-signal"
                />

                <h3 className="eyebrow">Our mission</h3>
              </div>

              <p className="mt-6 max-w-[58ch] font-display text-[clamp(1.125rem,1.7vw,1.5rem)] font-bold leading-[1.45] text-ink">
                To revolutionize the{" "}
                <span className="text-brand">
                  built environment by delivering exceptional engineering design
                </span>
                ,and construction solutions that surpass expectations,{" "}
                inspire confidence , and leave a lasting legacy of excellence.
                Guided by our{" "}
                <span className="text-brand">
                  passion for innovation and dedication to client satisfaction,
                </span>
                we strive to create sustainable,resilient,and transformative
                spaces that.
                <span className="text-brand">
                  enhance the way people live,work
                </span>
                and interact with their surronding.
              </p>
            </article>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.12} className="relative z-20 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mt-16 lg:translate-x-4">
            <article className="relative h-full overflow-hidden bg-brand p-6 text-white shadow-[0_22px_45px_-25px_rgb(107_15_24/0.6)] sm:p-8 lg:p-10 lg:pl-14">
              <Honeycomb className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-white/15 sm:h-48 sm:w-48" />

              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-3 select-none font-display text-[4.5rem] font-normal leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.4)] sm:text-[5.5rem]"
              >
                02
              </span>

              <div className="relative flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-[3px] w-8 bg-signal"
                />

                <h3 className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-signal">
                  Our vision
                </h3>
              </div>

              <p className="relative mt-6 font-display text-[clamp(1.125rem,1.7vw,1.5rem)] font-bold leading-[1.45] text-white">
                Empowering progress through innovative design, precision
                engineering and sustainable construction practices,
                <span className="text-signal">
                  our firm envisions a world where every structure stands as a
                  testament to excellence
                </span>
                , enriching communities and shaping the future with
                intergrity,creativity, and unwavering commitment to quality.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
``