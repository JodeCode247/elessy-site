import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { EnquiryBand } from "@/components/sections/EnquiryBand";

export const metadata: Metadata = { title: "Products and catalogue", description: "Solar, power, water and telecom equipment supplied, installed and serviced by ELESSY." };

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products and catalogue" title="Equipment we supply and install." intro="We make acquiring and setting up your equipment seamless. Feel free to request a quote on any item you require. Depending on your project's needs, we can supply the product on its own, or our team of expert technicians can handle the entire process from start to finish—including professional installation and full commissioning to ensure everything runs perfectly." />
      <ProductsGrid />
      <EnquiryBand />
    </>
  );
}
