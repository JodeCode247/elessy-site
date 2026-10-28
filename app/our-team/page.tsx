import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { TeamCarousel } from "@/components/sections/TeamCarousel";
import { EnquiryBand } from "@/components/sections/EnquiryBand";

export const metadata: Metadata = {
  title: "Our team",
  description: "Meet the executives leading ELESSY Nigeria Limited.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Our team" title="Meet Our Executives" intro="The people committed to statisfying the and quality requirements of our clients." />
      <TeamCarousel />
      <EnquiryBand />
    </>
  );
}