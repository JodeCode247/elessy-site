"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const PROJECTS_PER_PAGE = 12;

export function ProjectsGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;

  const visibleProjects = useMemo(
    () => projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE),
    [startIndex]
  );

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  function goToPage(page: number) {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));

    document
      .getElementById("projects-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      aria-label="Completed projects"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="container-page">
        {/* Section introduction */}
        <div className="mb-10 grid gap-6 border-b border-neutral-200 pb-8 md:grid-cols-[1fr_auto] md:items-end lg:mb-12">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-red-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Our portfolio
              </span>
            </div>

          </div>

          <div className="flex items-center gap-3 md:pb-1">
            <div className="flex h-12 w-12 items-center justify-center border border-neutral-200 bg-neutral-50">
              <ArrowDownRight
                aria-hidden="true"
                className="h-5 w-5 text-red-600"
              />
            </div>

            <div>
              <p className="text-2xl font-bold tracking-tight text-neutral-950">
                {projects.length.toString().padStart(2, "0")}
              </p>

              <p className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                Total projects
              </p>
            </div>
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visibleProjects.length} of {projects.length} projects.
          Page {currentPage} of {Math.max(totalPages, 1)}.
        </p>

        {/* Project grid */}
        {visibleProjects.length === 0 ? (
          <div
            id="projects-grid"
            className="border border-neutral-200 bg-neutral-50 px-6 py-20 text-center"
          >
            <h3 className="font-display text-xl font-bold text-neutral-950">
              No projects available
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Projects will appear here when they become available.
            </p>
          </div>
        ) : (
          <ul
            id="projects-grid"
            className="scroll-mt-24 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12"
          >
            {visibleProjects.map((project, index) => (
              <li
                key={project.id ?? `${project.name}-${index}`}
                className="min-w-0"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex h-full flex-col"
                >
                  {/* Project image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    {project.images?.[0]?.src ? (
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt || project.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 px-4 text-center text-sm text-neutral-500">
                        Project image unavailable
                      </div>
                    )}

                    {/* Image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Category label */}
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex max-w-full items-center bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-neutral-900 shadow-sm sm:text-[11px]">
                        {project.category}
                      </span>
                    </div>

                    {/* Arrow action */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-red-600 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
                      />
                    </div>
                  </div>

                  {/* Project information */}
                  <div className="flex flex-1 flex-col border-b border-neutral-200 py-5 transition-colors duration-300 group-hover:border-red-600">
                    <h3 className="font-display text-lg font-bold leading-snug text-neutral-950 transition-colors duration-200 group-hover:text-red-600 sm:text-xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-neutral-600">
                      <MapPin
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-red-600"
                      />

                      <span>{project.location}</span>
                    </p>

                    {project.date && (
                      <p className="mt-2 pl-6 text-xs font-medium tracking-wide text-neutral-500">
                        {project.date}
                      </p>
                    )}

                    <div className="mt-5 flex items-center justify-between gap-3 pt-1">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500 transition-colors group-hover:text-red-600">
                        Explore project
                      </span>

                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 text-red-600 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Project pagination"
            className="mt-12 flex flex-col gap-5 border-t border-neutral-200 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm text-neutral-600">
              Showing{" "}
              <span className="font-semibold text-neutral-950">
                {startIndex + 1}–
                {Math.min(
                  startIndex + PROJECTS_PER_PAGE,
                  projects.length
                )}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-neutral-950">
                {projects.length}
              </span>{" "}
              projects
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="flex h-11 w-11 items-center justify-center border border-neutral-200 text-neutral-800 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-neutral-200 disabled:hover:bg-white disabled:hover:text-neutral-800"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>

              {pageNumbers.map((page) => (
                <button
                  key={page}
                  type="button"
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  onClick={() => goToPage(page)}
                  className={cn(
                    "flex h-11 min-w-11 items-center justify-center border px-3 text-sm font-semibold transition-colors",
                    currentPage === page
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:border-red-600 hover:text-red-600"
                  )}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                aria-label="Next page"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="flex h-11 w-11 items-center justify-center border border-neutral-200 bg-white text-neutral-800 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-neutral-200 disabled:hover:bg-white disabled:hover:text-neutral-800"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
