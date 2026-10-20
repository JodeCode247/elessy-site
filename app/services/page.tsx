import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesExplorer } from "@/components/sections/ServicesExplorer";
import { EnquiryBand } from "@/components/sections/EnquiryBand";

export const metadata: Metadata = { title: "Services", description: "Architecture, engineering consultancy, building construction, electrical, solar, borehole drilling and telecom installation." };

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Seven disciplines, delivered end to end." intro="Choose a service to see what is included, then request a quote." />
      <ServicesExplorer />
      <EnquiryBand />
    </>
  );
}
