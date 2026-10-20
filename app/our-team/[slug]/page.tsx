import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Linkedin, Mail, Phone } from "lucide-react";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { executives } from "@/lib/team";

type Props = {
  params: Promise<{ slug: string }>;
};


export function generateStaticParams() {
  return executives.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = executives.find((x) => x.slug === slug);
  return e ? { title: `${e.name}, ${e.role}`, description: e.bio[0] } : {};
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;
  const i = executives.findIndex((x) => x.slug === slug);
  const e = executives[i];
  if (!e) notFound();
  const next = executives[(i + 1) % executives.length];
  const initials = e.name.split(" ").slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");

  return (
    <>
      <article className="pt-[calc(72px+2.5rem)] pb-16 lg:pt-[calc(84px+4rem)] lg:pb-24">
        <div className="container-page">
          <Link href="/our-team" className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-brand hover:underline">
            <ArrowLeft aria-hidden className="h-4 w-4" /> All executives
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-brand lg:max-w-none">
              {e.photo ? (
                <Image src={e.photo} alt={`${e.name}, ${e.role}`} fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover object-top" />
              ) : (
                <span aria-hidden className="absolute inset-0 flex items-center justify-center font-display text-8xl font-extrabold text-sage">{initials}</span>
              )}
            </div>

            <div>
              <p className="eyebrow">{e.role}</p>
              <h1 className="mt-3 text-h1">{e.name}</h1>

              <div className="mt-8 space-y-5">
                {e.bio.map((p) => (
                  <p key={p.slice(0, 30)} className="max-w-prose text-[18px] leading-[1.75] text-ink/90">{p}</p>
                ))}
              </div>
                
              {e.highlights && e.highlights.length > 0 && (
                <ul className="mt-8 space-y-3 border-t border-line pt-8">
                  <h3>Qualification:</h3>
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[16px]">
                      <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand" /> {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-display text-[15px] font-bold text-brand">
                {e.email && <a href={`mailto:${e.email}`} className="inline-flex min-h-[44px] items-center gap-2 hover:underline"><Mail aria-hidden className="h-4 w-4" />{e.email}</a>}
                {e.phone && <a href={`tel:${e.phone.replace(/\s/g, "")}`} className="inline-flex min-h-[44px] items-center gap-2 hover:underline"><Phone aria-hidden className="h-4 w-4" />{e.phone}</a>}
                {e.linkedin && <a href={e.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 hover:underline"><Linkedin aria-hidden className="h-4 w-4" />LinkedIn</a>}
              </div>

              {next && next.slug !== e.slug && (
                <Link href={`/our-team/${next.slug}`} className="mt-12 flex items-center justify-between border-t border-line pt-6 hover:text-brand">
                  <span>
                    <span className="block text-[13px] text-steel">Next executive</span>
                    <span className="font-display text-[18px] font-bold">{next.name}, {next.role}</span>
                  </span>
                  <ArrowRight aria-hidden className="h-6 w-6" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
      <EnquiryBand />
    </>
  );
}