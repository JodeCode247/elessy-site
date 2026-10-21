import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Tell ELESSY about your project. An engineer will respond with next steps." };

type Props = { searchParams: Promise<{ service?: string; product?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const sp = await searchParams;
  const rows = [
    { Icon: Phone, label: "Phone and WhatsApp", value: site.phone, href: site.phoneHref },
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { Icon: MapPin, label: "Office", value: site.address },
    { Icon: Clock, label: "Hours", value: site.hours },
  ];
  return (
    <>
      <PageHeader eyebrow="Contact" title="Tell us about your project." intro="Share a few details and an engineer will respond with next steps." />
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <ul className="space-y-7 self-start">
            {rows.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Icon aria-hidden className="h-5 w-5" /></span>
                <div>
                  <p className="text-[13px] text-steel">{label}</p>
                  {href ? <a href={href} className="inline-flex min-h-[32px] items-center font-display text-[18px] font-bold hover:text-brand">{value}</a> : <p className="font-display text-[18px] font-bold">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <EnquiryForm defaultService={sp.service} defaultProduct={sp.product} />
        </div>
      </section>
    </>
  );
}