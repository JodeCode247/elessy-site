import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { JobsCompleted } from "@/components/sections/JobsCompleted";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { MissionVision } from "@/components/sections/MissionVision";
import { TeamCarousel } from "@/components/sections/TeamCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <ServiceIndex />
      <JobsCompleted />
      <MissionVision />
      <TeamCarousel/>

      {/* Featured capability: asymmetric, full-bleed image */}
      <EnquiryBand />
    </>
  );
}