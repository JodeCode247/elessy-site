import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { articles } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <article className="pt-[calc(72px+2.5rem)] lg:pt-[calc(84px+4rem)]">
        <div className="container-page max-w-3xl">
          <Link href="/resources" className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-brand hover:underline"><ArrowLeft aria-hidden className="h-4 w-4" />All resources</Link>
          <p className="eyebrow mt-6">{a.tag} &middot; {a.readTime}</p>
          <h1 className="mt-3 text-h1">{a.title}</h1>
        </div>
        <div className="container-page mt-10 max-w-5xl">
          <div className="relative aspect-[16/8] overflow-hidden bg-brand-deep"><Image src={a.image} alt={a.alt} fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" /></div>
        </div>
        <div className="container-page max-w-3xl py-12 md:py-16">
          {a.body.map((p) => <p key={p.slice(0, 24)} className="mb-6 text-[18px] leading-[1.75] text-ink/90">{p}</p>)}
        </div>
      </article>
      <EnquiryBand />
    </>
  );
}