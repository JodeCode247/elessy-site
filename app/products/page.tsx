import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { EnquiryBand } from "@/components/sections/EnquiryBand";

export const metadata: Metadata = { title: "Products and catalogue", description: "Solar, power, water and telecom equipment supplied, installed and serviced by ELESSY." };

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products and catalogue" title="Equipment we supply and install." intro= "We supply, install and commission engineering equipment for industrial, commercial and infrastructure projects. Whether you need equipment supplied or require a complete installation, our team provides the technical support and expertise to ensure every system is properly installed, tested and ready for operation." />
      <ProductsGrid />
      <EnquiryBand />
    </>
  );
}
