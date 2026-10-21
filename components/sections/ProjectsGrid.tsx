"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [cat, setCat] = useState("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);

  return (
    <section aria-label="Completed projects" className="section-y">
      <div className="container-page">
        <div role="group" aria-label="Filter by service" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={cn(
                "min-h-[44px] rounded-full border px-5 font-display text-[15px] font-bold transition-colors",
                cat === c ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-brand"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">{shown.length} projects shown</p>

        {shown.length === 0 ? (
          <p className="mt-12 text-steel">No projects in this category yet.</p>
        ) : (
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-deep">
                    {p.images[0] && (
                      <Image
                        src={p.images[0].src}
                        alt={p.images[0].alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    )}
                    <span className="absolute left-0 top-4 bg-signal px-3 py-1.5 font-display text-[12px] font-bold text-ink">{p.category}</span>
                    <span aria-hidden className="absolute bottom-0 left-0 h-1 w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-h3 group-hover:text-brand">{p.name}</h2>
                      <p className="mt-2 flex items-center gap-1.5 text-[15px] text-steel"><MapPin aria-hidden className="h-4 w-4" />{p.location}{p.year && <> &middot; {p.year}</>}</p>
                    </div>
                    <ArrowUpRight aria-hidden className="mt-1 h-6 w-6 shrink-0 text-brand transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}