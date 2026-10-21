import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  const p = projects[i];
  if (!p) notFound();
  const next = projects[(i + 1) % projects.length];
  const [cover, ...gallery] = p.images;

  const facts = [
    { label: "Location", value: p.location },
    { label: "Service", value: p.category },
    p.year ? { label: "Year", value: p.year } : null,
    p.client ? { label: "Client", value: p.client } : null,
  ].filter((f): f is { label: string; value: string } => f !== null);

  return (
    <>
      <article className="pt-[calc(72px+2.5rem)] pb-16 lg:pt-[calc(84px+4rem)] lg:pb-24">
        <div className="container-page">
          <Link href="/projects" className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-brand hover:underline">
            <ArrowLeft aria-hidden className="h-4 w-4" /> All projects
          </Link>
          <p className="eyebrow mt-6">{p.category}</p>
          <h1 className="mt-3 max-w-[20ch] text-h1">{p.name}</h1>

          {cover && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-brand-deep">
              <Image src={cover.src} alt={cover.alt} fill priority sizes="(min-width: 1320px) 1240px, 100vw" className="object-cover" />
            </div>
          )}

          <div className="mt-12 grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <dl className="self-start border-t border-line">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-4">
                  <dt className="text-[14px] text-steel">{f.label}</dt>
                  <dd className="font-display text-[16px] font-bold">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="space-y-5">
              <p className="max-w-prose text-lead font-semibold text-ink">{p.summary}</p>
              {p.description.map((para) => (
                <p key={para.slice(0, 30)} className="max-w-prose text-[17px] leading-[1.75] text-steel">{para}</p>
              ))}
              <Button href={`/contact?service=${encodeURIComponent(p.category)}`} className="mt-4">Start a similar project</Button>
            </div>
          </div>

          {gallery.length > 0 && (
            <ul className="mt-16 grid gap-4 sm:grid-cols-2">
              {gallery.map((img) => (
                <li key={img.src} className="relative aspect-[4/3] overflow-hidden bg-brand-deep">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </li>
              ))}
            </ul>
          )}

          {next && next.slug !== p.slug && (
            <Link href={`/projects/${next.slug}`} className="mt-16 flex items-center justify-between border-t border-line pt-6 hover:text-brand">
              <span>
                <span className="block text-[13px] text-steel">Next project</span>
                <span className="font-display text-[20px] font-bold">{next.name}</span>
              </span>
              <ArrowRight aria-hidden className="h-6 w-6" />
            </Link>
          )}
        </div>
      </article>
      <EnquiryBand />
    </>
  );
}