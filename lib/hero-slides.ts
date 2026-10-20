// Swap these to change the hero images. Files live in /public/images.
// `position` tunes object-position per screen so the subject stays visible on portrait phones.
export type HeroSlide = {
  src: string;
  alt: string;
  label: string;
  position: { desktop: string; mobile: string };
};

export const heroSlides: HeroSlide[] = [
  { src: "/images/beautiful-view-construction-site-city-sunset.jpg", alt: "Tower crane and steel frame of a building under construction at dusk", label: "Building construction", position: { desktop: "62% 55%", mobile: "60% 50%" } },
  { src: "/images/hero-telecom.jpg", alt: "Lattice telecom tower with antennas against rolling hills", label: "Telecom infrastructure", position: { desktop: "62% 50%", mobile: "62% 45%" } },
  { src: "/images/hero-solar.jpg", alt: "Rows of solar panels receding toward a low sun", label: "Solar installation", position: { desktop: "50% 62%", mobile: "50% 60%" } },
  { src: "/images/hero-borehole.jpg", alt: "Borehole drilling rig beside a spray of clean water", label: "Borehole drilling", position: { desktop: "55% 60%", mobile: "58% 55%" } },
  
];
