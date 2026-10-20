import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { articles } from "@/lib/content";

export const metadata: Metadata = { title: "Resources", description: "Practical guides on solar, water, electrical and telecom projects from ELESSY engineers." };

export default function ResourcesPage() {
  const [feature, ...rest] = articles;
  if (!feature) return null;
  return (
    <>
      <PageHeader eyebrow="Resources" title="Practical guides from our engineers." />
      <section className="section-y">
        <div className="container-page">
          <Link href={`/resources/${feature.slug}`} className="group grid gap-8 lg:grid-cols-[6fr_5fr] lg:items-center lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-deep">
              <Image src={feature.image} alt={feature.alt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div>
              <p className="eyebrow">{feature.tag}</p>
              <h2 className="mt-3 text-h2 group-hover:text-brand">{feature.title}</h2>
              <p className="mt-4 text-[17px] text-steel">{feature.excerpt}</p>
              <span className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-display font-bold text-brand">Read article <ArrowRight aria-hidden className="h-4 w-4" /></span>
            </div>
          </Link>
          <ul className="mt-16 border-t border-line">
            {rest.map((a) => (
              <li key={a.slug} className="border-b border-line">
                <Link href={`/resources/${a.slug}`} className="group grid gap-5 py-6 sm:grid-cols-[220px_1fr_auto] sm:items-center sm:gap-8">
                  <div className="relative aspect-[11/7] overflow-hidden bg-brand-deep"><Image src={a.image} alt={a.alt} fill sizes="220px" className="object-cover" /></div>
                  <div>
                    <p className="eyebrow">{a.tag}</p>
                    <h3 className="mt-2 text-h3 group-hover:text-brand">{a.title}</h3>
                    <p className="mt-2 text-[14px] text-steel">{a.readTime}</p>
                  </div>
                  <ArrowRight aria-hidden className="hidden h-6 w-6 text-brand transition-transform group-hover:translate-x-1 sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
