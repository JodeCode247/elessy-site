import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";
import { CompanyMap } from "@/components/ui/CompanyMap";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
                <div className="flex flex-col items-start">
          {/* Company logo picture above the company name */}
          <div className="mb-4 inline-flex rounded-md bg-white p-2">
            <Image
              src="/images/elessy-logo.png"
              alt="ELESSY company logo"
              width={150}
              height={100}
              className="h-auto w-36 object-contain"
            />
          </div>

          {/* Company name underneath the picture */}
          <Logo tone="light" />

          {/* Company tagline */}
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/80">
            {site.tagline}
          </p>
        </div>
        <FooterCol title="Services">
          {services.slice(0, 5).map((s) => (
            <FooterLink key={s.slug} href={`/services#${s.slug}`}>{s.name}</FooterLink>
          ))}
        </FooterCol>
        <FooterCol title="Company">
          {nav.filter((n) => n.href !== "/services").map((n) => (
            <FooterLink key={n.href} href={n.href}>{n.label}</FooterLink>
          ))}
        </FooterCol>
        <FooterCol title="Contact">
          <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
          <FooterLink href={`mailto:${site.email}`}>{site.email2}</FooterLink>
          <FooterLink href={site.phoneHref}>{site.phone}</FooterLink>
          <FooterLink href={site.phoneHref}>{site.phone2}</FooterLink>
          <FooterLink href={site.phoneHref}>{site.phone3}</FooterLink>
          

          <CompanyMap
            city="ABUJA"
            address={site.address}
            />

          <CompanyMap
            city="LAGOS"
            address={site.address2}
          />

          <CompanyMap
            city="LOKOJA"
            address={site.address3}
          />
        </FooterCol>

      </div>
      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-2 py-6 text-[13px] text-sage sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-[14px] font-bold uppercase tracking-[0.18em] text-signal">{title}</h2>
      <ul className="mt-4">{children}</ul>
    </div>
  );
}
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="inline-flex min-h-[40px] items-center text-[15px] text-white/80 transition-colors hover:text-white">{children}</Link>
    </li>
  );
}
