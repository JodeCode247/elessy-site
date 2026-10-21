export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;            // used in the URL: /projects/<slug>
  name: string;
  location: string;
  category: string;        // use a service name so filtering matches your services
  year?: string;
  client?: string;
  summary: string;         // one sentence shown on the card
  description: string[];   // paragraphs shown on the project page
  images: ProjectImage[];  // first image is the cover
};

// PLACEHOLDERS: replace with ELESSY's real projects and photos.
// Put photos in public/images/projects/<slug>/ and reference them as "/images/projects/<slug>/1.jpg".
export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project name one",
    location: "City, State",
    category: "Building construction",
    year: "2024",
    client: "Client name",
    summary: "One sentence describing what was built for the client.",
    description: ["Describe the project: what the client needed, what ELESSY delivered, and the result.", "Add a second paragraph if needed."],
    images: [
      { src: "/images/hero-construction.jpg", alt: "Building under construction" },
      { src: "/images/plan.jpg", alt: "Project drawings" },
    ],
  },
  {
    slug: "project-two",
    name: "Project name two",
    location: "City, State",
    category: "Solar installation",
    year: "2024",
    summary: "One sentence describing the solar work delivered.",
    description: ["Describe the project and its outcome."],
    images: [{ src: "/images/hero-solar.jpg", alt: "Solar installation" }],
  },
  {
    slug: "project-three",
    name: "Project name three",
    location: "City, State",
    category: "Borehole drilling",
    year: "2023",
    summary: "One sentence describing the water project delivered.",
    description: ["Describe the project and its outcome."],
    images: [{ src: "/images/hero-borehole.jpg", alt: "Borehole drilling" }],
  },
  {
    slug: "project-four",
    name: "Project name four",
    location: "City, State",
    category: "Telecom equipment",
    year: "2023",
    summary: "One sentence describing the telecom work delivered.",
    description: ["Describe the project and its outcome."],
    images: [{ src: "/images/hero-telecom.jpg", alt: "Telecom tower" }],
  },
];