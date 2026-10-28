
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content";
import { projects } from "@/lib/projects";

const HEX =
  "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

const CELLS = [
  { left: 32.5, top: 29.1, z: 20 },
  { left: 0, top: 29.1, z: 10 },
  { left: 65, top: 29.1, z: 10 },
  { left: 16.25, top: 0, z: 12 },
  { left: 48.75, top: 0, z: 12 },
  { left: 16.25, top: 58.2, z: 12 },
  { left: 48.75, top: 58.2, z: 12 },
] as const;

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;

        started = true;
        observer.disconnect();
        setSeen(true);

        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setValue(Math.round(eased * target));

          if (progress < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return { ref, value, seen };
}

/** Ensures local public-folder image paths start with "/". */
function normalizeImageSrc(src: string | undefined): string | null {
  if (!src?.trim()) return null;

  const cleaned = src.trim();

  if (/^https?:\/\//i.test(cleaned)) return cleaned;

  if (cleaned.startsWith("/")) return cleaned;

  // Remove "public/" if accidentally included in the source path.
  const withoutPublic = cleaned.replace(/^public\//i, "");

  return `/${withoutPublic}`;
}

export function JobsCompleted() {
  const { ref, value, seen } = useCountUp(company.jobsCompleted);

  // Collect project images and normalize their paths.
  const pics = projects.flatMap((project) =>
    project.images.flatMap((img) => {
      const src = normalizeImageSrc(img.src);

      if (!src) return [];

      return [
        {
          ...img,
          src,
          slug: project.slug,
          name: project.name,
        },
      ];
    })
  );

  // Repeat available images until all seven hexagons are filled.
  const seven = CELLS.map((_, index) =>
    pics.length > 0 ? pics[index % pics.length] : null
  );

  return (
    <section
      aria-labelledby="jobs-completed"
      className="overflow-hidden bg-brand text-white"
    >
      <div
        ref={ref}
        className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:py-28"
      >
        {/* Count-up */}
        <div>
          <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-signal">
            Our track record
          </p>

          <p
            aria-hidden="true"
            className="mt-5 font-display text-[clamp(4.5rem,11vw,7.5rem)] font-extrabold leading-none tabular-nums"
          >
            {value}
            <span className="text-signal">+</span>
          </p>

          <h2
            id="jobs-completed"
            className="mt-3 font-display text-h2 text-white"
          >
            <span className="sr-only">
              {company.jobsCompleted}+{" "}
            </span>
            Jobs completed
          </h2>

          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/85">
            Delivered across Nigeria for banks, companies, government bodies,
            developers and private clients.
          </p>

          <div className="mt-8">
            <Button href="/projects" arrow>
              See projects
            </Button>
          </div>
        </div>

        {/* Seven overlapping hexagons */}
        <div className="relative mx-auto aspect-[100/97] w-full max-w-[560px]">
          {CELLS.map((cell, index) => {
            const pic = seven[index];

            if (!pic?.src) return null;

            return (
              <div
                key={`${pic.slug}-${index}`}
                style={{
                  left: `${cell.left}%`,
                  top: `${cell.top}%`,
                  zIndex: cell.z,
                  transitionDelay: `${index * 90}ms`,
                }}
                className={`absolute aspect-[866/1000] w-[35%] drop-shadow-[0_8px_14px_rgb(0_0_0/0.3)] transition-[opacity,scale] duration-700 ease-out ${
                  seen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <Link
                  href={pic.slug ? `/projects/${pic.slug}` : "/projects"}
                  aria-label={`View project: ${pic.name}`}
                  className={`group absolute inset-0 block ${HEX} ${
                    index === 0 ? "bg-signal" : "bg-white"
                  } transition-transform duration-300 hover:scale-[1.06]`}
                >
                  <span
                    className={`absolute inset-[3px] block overflow-hidden ${HEX}`}
                  >
                    <Image
                      src={pic.src}
                      alt={pic.alt || pic.name}
                      fill
                      sizes="(min-width: 1024px) 200px, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
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
