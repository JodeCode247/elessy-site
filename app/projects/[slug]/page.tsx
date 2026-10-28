import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

function normalizeImageSrc(src: string | undefined): string | null {
  if (!src?.trim()) return null;

  const path = src.trim();

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const localPath = path.replace(/^public\//i, "");

  return `/${localPath.replace(/^\/+/, "")}`;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return project ? { title: project.name } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];
  const [cover, ...gallery] = project.images ?? [];

  const coverSrc = normalizeImageSrc(cover?.src);

  const facts = [
    { label: "Location", value: project.location },
    { label: "Service", value: project.category },
    project.date ? { label: "Year", value: project.date } : null,
    project.client ? { label: "Client", value: project.client } : null,
  ].filter(
    (fact): fact is { label: string; value: string } => fact !== null
  );

  return (
    <>
      <article className="pb-16 pt-[calc(72px+2.5rem)] lg:pb-24 lg:pt-[calc(84px+4rem)]">
        <div className="container-page">
          <Link
            href="/projects"
            className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-brand hover:underline"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            All projects
          </Link>

          <p className="eyebrow mt-6">{project.category}</p>

          <h1 className="mt-3 max-w-[20ch] text-h1">{project.name}</h1>

          {coverSrc && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-brand-deep">
              <Image
                src={coverSrc}
                alt={cover?.alt || project.name}
                fill
                priority
                sizes="(min-width: 1320px) 1240px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="mt-12 grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <dl className="self-start border-t border-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-4"
                >
                  <dt className="text-[14px] text-steel">{fact.label}</dt>
                  <dd className="font-display text-[16px] font-bold">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="space-y-5">
              

              {project.description?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 30)}
                  className="max-w-prose text-[17px] leading-[1.75] text-steel"
                >
                  {paragraph}
                </p>
              ))}

              <Button
                href={`/contact?service=${encodeURIComponent(project.category)}`}
                className="mt-4"
              >
                Start a similar project
              </Button>
            </div>
          </div>

          {gallery.length > 0 && (
            <ul className="mt-16 grid gap-4 sm:grid-cols-2">
              {gallery.map((img, galleryIndex) => {
                const imageSrc = normalizeImageSrc(img.src);

                if (!imageSrc) return null;

                return (
                  <li
                    key={`${img.src}-${galleryIndex}`}
                    className="relative aspect-[4/3] overflow-hidden bg-brand-deep"
                  >
                    <Image
                      src={imageSrc}
                      alt={img.alt || project.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </li>
                );
              })}
            </ul>
          )}

          {next && next.slug !== project.slug && (
            <Link
              href={`/projects/${next.slug}`}
              className="mt-16 flex items-center justify-between border-t border-line pt-6 hover:text-brand"
            >
              <span>
                <span className="block text-[13px] text-steel">
                  Next project
                </span>
                <span className="font-display text-[20px] font-bold">
                  {next.name}
                </span>
              </span>

              <ArrowRight aria-hidden="true" className="h-6 w-6" />
            </Link>
          )}
        </div>
      </article>

      <EnquiryBand />
    </>
  );
}
