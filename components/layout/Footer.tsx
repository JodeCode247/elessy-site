import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";
import { CompanyMap } from "@/components/ui/CompanyMap";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#174B35] text-white">

      {/* Subtle green and yellow background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,145,102,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[#F2B632]/[0.08] blur-3xl" />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">

        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="mb-4 inline-flex rounded-md bg-white p-2">
            <Image
              src="/images/elessy-logo.png"
              alt="ELESSY company logo"
              width={150}
              height={100}
              className="h-auto w-36 object-contain"
            />
          </div>

          <Logo tone="light" />

          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/85">
            {site.tagline}
          </p>
        </div>

        {/* Services */}
        <FooterCol title="Services">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services#${s.slug}`}>
              {s.name}
            </FooterLink>
          ))}
        </FooterCol>

        {/* Company */}
        <FooterCol title="Company">
          {nav.filter((n) => n.href !== "/services").map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
        </FooterCol>

        {/* Contact */}
        <FooterCol title="Contact">
          <FooterLink href={`mailto:${site.email}`}>
            {site.email}
          </FooterLink>

          <FooterLink href={site.phoneHref}>
            {site.phone}
          </FooterLink>

          <div className="mt-4 space-y-3">
            <CompanyMap city="ABUJA" address={site.address} />
            <CompanyMap city="LAGOS" address={site.address2} />
            <CompanyMap city="LOKOJA" address={site.address3} />
          </div>
        </FooterCol>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/15 bg-[#103B2A]">
        <div className="container-page flex flex-col gap-2 py-6 text-[13px] text-white/65 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-[14px] font-bold uppercase tracking-[0.18em] text-[#F2B632]">
        {title}
      </h2>

      <ul className="mt-4 space-y-1">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex min-h-[40px] items-center text-[15px] text-white/85 transition-colors hover:text-[#F2B632]"
      >
        {children}
      </Link>
    </li>
  );
}
