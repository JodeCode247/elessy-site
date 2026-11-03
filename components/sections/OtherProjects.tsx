"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { otherProjects } from "@/lib/otherProjects";
import { cn } from "@/lib/utils";

export function OtherProjects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <div className="mb-5 max-w-2xl">
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Other Projects
          </h2>

          <p className="mt-4 text-[16px] leading-relaxed text-steel">
            Explore more projects delivered by ELESSY Nigeria Limited across
            different sectors and locations.
          </p>
        </div>

        <div className="border-t border-line">
          {otherProjects.map((project, index) => {
            const isOpen = activeProject === index;

            return (
              <div key={project.name} className="border-b border-line">
                <button
                  type="button"
                  onClick={() =>
                    setActiveProject(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className={cn(
                    "group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors",
                    isOpen && "text-brand"
                  )}
                >
                  <div className="flex min-w-0 items-start gap-5">
                    <span className="pt-1 text-sm font-semibold text-brand/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand md:text-xl">
                        {project.name}
                      </h3>

                      <p className="mt-1 text-sm text-steel">
                        {project.location} 
                        <span className="mx-2 text-brand">•</span>
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-10 md:pl-14">
                      <div className="max-w-3xl border-l-2 border-brand/30 pl-5">
                        {project.description.map((paragraph, i) => (
                          <p
                            key={i}
                            className="mb-3 text-[15px] leading-relaxed text-steel last:mb-0"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}