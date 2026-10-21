import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { EnquiryBand } from "@/components/sections/EnquiryBand";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects completed by ELESSY Nigeria Limited across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Work we have delivered across Nigeria." intro="A selection of completed projects. Select one to see more." />
      <ProjectsGrid />
      <EnquiryBand />
    </>
  );
}