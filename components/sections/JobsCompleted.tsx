"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content";
import { projects } from "@/lib/projects";

const HEX = "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

/**
 * Seven overlapping hexagons: one in the centre and six around it.
 * left/top are percentages of the cluster box (aspect 100:97).
 */
const CELLS = [
  { left: 32.5, top: 29.1, z: 20 },  // centre
  { left: 0, top: 29.1, z: 10 },     // left
  { left: 65, top: 29.1, z: 10 },    // right
  { left: 16.25, top: 0, z: 12 },    // top left
  { left: 48.75, top: 0, z: 12 },    // top right
  { left: 16.25, top: 58.2, z: 12 }, // bottom left
  { left: 48.75, top: 58.2, z: 12 }, // bottom right
] as const;

/** Counts from 0 to `target` once, when the section scrolls into view. */
function useCountUp(target: number, duration = 2200) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      setSeen(true);
      return;
    }
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;
        started = true;
        io.disconnect();
        setSeen(true);
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          setValue(Math.round((1 - Math.pow(1 - p, 3)) * target)); // ease-out
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return { ref, value, seen };
}

export function JobsCompleted() {
  const { ref, value, seen } = useCountUp(company.jobsCompleted);

  // Seven pictures from your projects (repeats if you have fewer than seven)
  const pics = projects.flatMap((p) => p.images.map((img) => ({ ...img, slug: p.slug, name: p.name })));
  const seven = CELLS.map((_, i) => pics[i % Math.max(pics.length, 1)]);

  return (
    <section aria-labelledby="jobs-completed" className="overflow-hidden bg-brand text-white">
      <div ref={ref} className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:py-28">
        {/* Count-up */}
        <div>
          <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-signal">Our track record</p>
          <p aria-hidden className="mt-5 font-display text-[clamp(4.5rem,11vw,7.5rem)] font-extrabold leading-none tabular-nums">
            {value}
            <span className="text-signal">+</span>
          </p>
          <h2 id="jobs-completed" className="mt-3 font-display text-h2 text-white">
            <span className="sr-only">{company.jobsCompleted}+ </span>
            Jobs completed
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/85">
            Delivered across Nigeria for banks, companies, government bodies, developers and private clients.
          </p>
          <div className="mt-8">
            <Button href="/projects" arrow>See projects</Button>
          </div>
        </div>

        {/* Seven overlapping hexagons */}
        <div className="relative mx-auto aspect-[100/97] w-full max-w-[560px]">
          {CELLS.map((c, i) => {
            const pic = seven[i];
            if (!pic) return null;
            return (
              <div
                key={i}
                style={{ left: `${c.left}%`, top: `${c.top}%`, zIndex: c.z, transitionDelay: `${i * 90}ms` }}
                className={`absolute aspect-[866/1000] w-[35%] drop-shadow-[0_8px_14px_rgb(0_0_0/0.3)] transition-[opacity,scale] duration-700 ease-out has-[a:hover]:z-40 ${
                  seen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <Link
                  href={`/projects/${pic.slug}`}
                  aria-label={`View project: ${pic.name}`}
                  className={`group absolute inset-0 block ${HEX} ${i === 0 ? "bg-signal" : "bg-white"} transition-transform duration-300 hover:scale-[1.06]`}
                >
                  <span className={`absolute inset-[3px] block overflow-hidden ${HEX}`}>
                    <Image src={pic.src} alt="" fill sizes="(min-width: 1024px) 200px, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
