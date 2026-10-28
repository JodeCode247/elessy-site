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

  return e
    ? {
        title: `${e.name}, ${e.role}`,
        description: e.bio[0],
      }
    : {};
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;
  const index = executives.findIndex((x) => x.slug === slug);
  const e = executives[index];

  if (!e) notFound();

  const next = executives[(index + 1) % executives.length];
  const initials = e.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <>
      <main className="bg-white pt-[calc(72px+2rem)] pb-16 lg:pt-[calc(84px+3rem)] lg:pb-24">
        <div className="container-page">
          <Link
            href="/our-team"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-steel transition-colors hover:text-brand"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            All executives
          </Link>

          <div className="mt-8 grid items-start gap-9 md:mt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
            {/* Executive portrait */}
            <div className="w-full max-w-lg">
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                {e.photo ? (
                  <Image
                    src={e.photo}
                    alt={`${e.name}, ${e.role}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-mist">
                    <span
                      aria-hidden
                      className="font-display text-6xl font-bold text-brand"
                    >
                      {initials}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-3 h-1 w-16 bg-brand" />
            </div>

            {/* Executive information */}
            <div className="pt-1 lg:pt-4">
              <p className="eyebrow">{e.role}</p>

              <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {e.name}
              </h1>

              <div className="mt-7 space-y-5">
                {e.bio.map((paragraph, i) => (
                  <p
                    key={`${i}-${paragraph.slice(0, 20)}`}
                    className="max-w-2xl text-base leading-8 text-steel sm:text-[17px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {e.highlights && e.highlights.length > 0 && (
                <section className="mt-9 border-t border-line pt-6">
                  <h2 className="font-display text-lg font-bold text-ink">
                    Qualifications and experience
                  </h2>

                  <ul className="mt-4 space-y-3">
                    {e.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-[15px] leading-7 text-steel"
                      >
                        <Check
                          aria-hidden
                          className="mt-1.5 h-4 w-4 shrink-0 text-brand"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Contact links */}
              {(e.email || e.phone || e.linkedin) && (
                <div className="mt-9 flex flex-col items-start gap-3 border-t border-line pt-6">
                  <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                    Contact
                  </h2>

                  {e.email && (
                    <a
                      href={`mailto:${e.email}`}
                      className="inline-flex min-h-10 items-center gap-3 text-sm text-steel transition-colors hover:text-brand"
                    >
                      <Mail
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-brand"
                      />
                      <span className="break-all">{e.email}</span>
                    </a>
                  )}

                  {e.phone && (
                    <a
                      href={`tel:${e.phone.replace(/\s/g, "")}`}
                      className="inline-flex min-h-10 items-center gap-3 text-sm text-steel transition-colors hover:text-brand"
                    >
                      <Phone
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-brand"
                      />
                      {e.phone}
                    </a>
                  )}

                  {e.linkedin && (
                    <a
                      href={e.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-3 text-sm text-steel transition-colors hover:text-brand"
                    >
                      <Linkedin
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-brand"
                      />
                      View LinkedIn profile
                    </a>
                  )}
                </div>
              )}

              {/* Next executive */}
              {next && next.slug !== e.slug && (
                <Link
                  href={`/our-team/${next.slug}`}
                  className="group mt-10 flex items-center justify-between gap-4 border-t border-line py-6 transition-colors hover:border-brand"
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-steel">
                      Next executive
                    </span>
                    <span className="mt-1 block font-display text-base font-bold text-ink transition-colors group-hover:text-brand sm:text-lg">
                      {next.name}
                    </span>
                    <span className="mt-1 block text-sm text-steel">
                      {next.role}
                    </span>
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-brand transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowRight aria-hidden className="h-5 w-5" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      <EnquiryBand />
    </>
  );
}