// Editable content. Copy and images are placeholders until ELESSY supplies its own.
export type Service = {
  slug: string; name: string; short: string; summary: string; scope: string[];
  image: string; imageAlt: string;
  icon: "ruler" | "compass" | "hardhat" | "zap" | "sun" | "droplets" | "radio" | "armchair" | "waves" | "package";
};

export const services: Service[] = [
  { slug: "architectural-consultancy", name: "Architectural consultancy", short: "Concept, planning and working drawings", summary: "Buildings designed around how they will be used, built and maintained, from first sketch to approved construction drawings.", scope: ["Briefing and site appraisal", "Concept and planning design", "Working drawings and specifications", "Approvals support"], image: "/images/plan.jpg", imageAlt: "Architectural elevation drawn on a blueprint grid", icon: "ruler" },
  { slug: "engineering-consultancy", name: "Engineering consultancy", short: "Building, civil, electrical and mechanical advice", summary: "Engineering advice drawn from building, electrical, mechanical and civil experience, keeping projects safe, buildable and on budget.", scope: ["Feasibility and design review", "Building, civil, electrical and mechanical input", "Supervision and inspection", "Project reporting"], image: "/images/men-at-work.jpg", imageAlt: "Engineering drawing with dimension lines", icon: "compass" },
  { slug: "building-construction", name: "Building construction", short: "Residential, commercial and industrial", summary: "Supervised delivery of new buildings, extensions and refurbishments, managed from start to handover.", scope: ["Site mobilisation and setting out", "Structure, finishes and services", "Quality and safety supervision", "Handover and documentation"], image: "/images/construction-man.jpg", imageAlt: "Tower crane over a steel building frame", icon: "hardhat" },
  { slug: "furniture-and-cabinets", name: "Kitchen cabinets and furniture", short: "Kitchens, offices and schools", summary: "Kitchen cabinets, office furniture and school furniture, supplied and fitted to your space.", scope: ["Kitchen cabinets", "Office furniture", "School furniture", "Supply and fitting"], image: "/images/cabinet.jpg", imageAlt: "Measured drawing of an interior layout", icon: "armchair" },
  { slug: "water-treatment-and-sewage", name: "Water treatment and sewage", short: "Treatment plants, sewage and reticulation", summary: "Provision of boreholes, potable and drinking water treatment plants, sewage plants and water reticulation.", scope: ["Water treatment plants", "Sewage plants", "Water reticulation", "Provision of boreholes"], image: "/images/water-treatment-plant.jpg", imageAlt: "Clean water spraying from a borehole", icon: "waves" },
  { slug: "solar-installation", name: "Solar installation", short: "Solar street lights and solar boreholes", summary: "Solar energy services to complement efforts to revive Nigeria's energy sector, including solar street lights and solar boreholes with submersible pumps.", scope: ["Solar street light installation", "Solar boreholes with submersible pumps", "System design and sizing", "Maintenance plans"], image: "/images/hero-solar.jpg", imageAlt: "Rows of solar panels under a low sun", icon: "sun" },
  { slug: "telecom-equipment", name: "Telecom equipment", short: "Supply, installation and commissioning", summary: "Supply and installation of telecommunication equipment, from masts and antennas to power and site fit-out.", scope: ["Equipment supply", "Mast and antenna installation", "Power and site fit-out", "Commissioning and handover"], image: "/images/eleman.jpg", imageAlt: "Lattice telecom tower with antennas", icon: "radio" },
  { slug: "electrical-installation", name: "Electrical installation", short: "Power from rural electrification to transformers", summary: "Internal and external electrical work, from rural electrification and street lighting to high and low tension systems, transformers and generator sets.", scope: ["Rural electrification", "Internal and external electrical work", "Street lighting, high and low tension installation", "Transformers and generator sets, supply and installation"], image: "/images/electrical-installation.jpg", imageAlt: "Power infrastructure silhouetted at sunset", icon: "zap" },

  { slug: "borehole-drilling", name: "Borehole drilling", short: "Survey, drilling, pumping and treatment", summary: "Reliable water supply, from site survey and drilling through pump installation and treatment.", scope: ["Hydrogeological survey", "Drilling and casing", "Pump and storage installation", "Water treatment options"], image: "/images/borehole.jpg", imageAlt: "Drilling rig next to a borehole spray of water", icon: "droplets" },
  { slug: "general-supplies", name: "General supplies", short: "Importation and supply of goods", summary: "General supplier of goods, including the importation and sale of engineering devices.", scope: ["Importation of engineering devices", "Supply of goods", "Delivery to site", "Quotes on request"], image: "/images/hero-construction.jpg", imageAlt: "Building site with a tower crane at dusk", icon: "package" },
];


export const process = [
  { title: "Consult", text: "We listen, survey the site and agree the scope in writing." },
  { title: "Design", text: "Drawings, specifications and a clear budget before work starts." },
  { title: "Build", text: "Supervised delivery by our engineers and trained crews." },
  { title: "Handover", text: "Testing, commissioning, documentation and aftercare." },
] as const;

export const productCategories = ["All", "Solar", "Power and cables", "Water", "Telecom"] as const;
export type ProductCategory = (typeof productCategories)[number];
export const products: { name: string; category: Exclude<ProductCategory, "All">; image: string; alt: string }[] = [
  { name: "Solar panels", category: "Solar", image: "/images/products/hero-solar.jpg", alt: "Solar panel array" },
  { name: "Inverters and batteries", category: "Solar", image: "/images/products/hero-inverter.jpg", alt: "Solar field at dusk" },
  { name: "Distribution boards and breakers", category: "Power and cables", image: "/images/products/hero-breakers.jpg", alt: "Building site at dusk" },
  { name: "Cables and conduit", category: "Power and cables", image: "/images/products/hero-conduit.jpg", alt: "Technical drawing" },
  { name: "Borehole pumps", category: "Water", image: "/images/products/hero-borehole.jpg", alt: "Borehole rig and water spray" },
  { name: "Telecom masts and antennas", category: "Telecom", image: "/images/products/hero-telecom.jpg", alt: "Telecom tower" },
  { name: "Solar street lights", category: "Solar", image: "/images/products/hero-solarlight.jpg", alt: "Solar installation at dusk" },
  { name: "Generators and transformers", category: "Power and cables", image: "/images/products/hero-transformer.jpg", alt: "Power works on a building site" },
  { name: "Water treatment plants", category: "Water", image: "/images/products/hero-water-treatment.jpg", alt: "Clean water from a borehole" },
];

export const faqs = [
  { q: "How do I request a quote?", a: "Send us the details through the enquiry form, call us, or message us on WhatsApp. We respond with next steps and, where needed, arrange a site visit." },
  { q: "Which areas do you cover?", a: "We work across Nigeria. Tell us the project location in your enquiry and we will confirm how we mobilise." },
  { q: "Do you handle design and construction together?", a: "Yes. Architecture, engineering consultancy and construction can be delivered as one package or engaged separately." },
  { q: "Can you supply equipment without installing it?", a: "Yes. Solar, electrical, water and telecom equipment can be supplied on its own or with installation and commissioning." },
  { q: "Do you offer maintenance after handover?", a: "Yes. We offer maintenance support for the systems we install. Ask about a plan when you enquire." },
  { q: "How long does a solar installation take?", a: "It depends on system size and site conditions. After a survey we give you a written programme before work begins." },
  { q: "What do you need to start a borehole project?", a: "The site location and access details. We carry out a survey first, then confirm scope, programme and cost." },
] as const;

export type Article = { slug: string; tag: string; title: string; excerpt: string; readTime: string; image: string; alt: string; body: string[] };
export const articles: Article[] = [
  { slug: "sizing-a-solar-system", tag: "Solar", title: "Sizing a solar system for your building: what to ask before you buy", excerpt: "A short checklist covering load, battery autonomy, roof space and maintenance.", readTime: "6 min read", image: "/images/hero-solar.jpg", alt: "Solar array at sunset", body: ["A solar system should be sized from your actual electricity use, not from a panel count. Start by listing every appliance, its power rating and how many hours a day it runs. That gives you the daily energy you need to replace.", "Next, decide how much of that load must keep running when the grid is off. This sets battery size and the inverter rating. Ask any supplier to show how they calculated both.", "Finally, check roof or ground space, shading, and who maintains the system after installation. A written scope and a maintenance plan matter as much as the equipment itself."] },
  { slug: "borehole-survey", tag: "Water", title: "What a borehole survey tells you before drilling starts", excerpt: "How a survey reduces risk, cost and surprises on site.", readTime: "5 min read", image: "/images/hero-borehole.jpg", alt: "Borehole rig and water", body: ["A survey studies the ground at your site to estimate where water is likely to be found and at what depth. It does not guarantee a result, but it improves the odds and avoids drilling blind.", "The findings guide casing, pump selection and storage, so the system is designed around the real conditions rather than assumptions.", "Always ask for the survey findings in writing, along with a clear scope and cost for drilling and pump installation."] },
  { slug: "planning-electrical-load", tag: "Electrical", title: "Planning electrical load for a new commercial building", excerpt: "Why load planning comes before cable sizes and distribution boards.", readTime: "6 min read", image: "/images/plan.jpg", alt: "Building elevation drawing", body: ["Electrical design starts with load: what will run, when, and how it may grow. Cable sizes, breakers and distribution boards all follow from that number.", "Plan for future growth and for backup power at the start. Adding capacity later is far more disruptive than allowing for it in the first design.", "Insist on testing and documentation at handover so the installation can be maintained safely."] },
  { slug: "telecom-site-basics", tag: "Telecom", title: "Telecom site basics: power, towers and equipment", excerpt: "The three things every telecom site depends on.", readTime: "5 min read", image: "/images/hero-telecom.jpg", alt: "Telecom tower and antennas", body: ["A telecom site has three dependencies: a structure to carry the antennas, the radio and transmission equipment, and reliable power.", "Power is often the weak point. Plan for grid, backup and monitoring together so equipment stays online.", "Commissioning and handover documentation make future maintenance and upgrades far simpler."] },
];

export const company = { founded: 1983, regNo: "54796", regBody: "Corporate Affairs Commission", jobsCompleted: 125 } as const;

// Full list of what the company offers (used on the About page)
export const companyServices = [
  "Architectural consultancy",
  "Engineering consultancy",
  "Building construction",
  "Kitchen cabinets, office furniture and school furniture",
  "Boreholes, water treatment, sewage plants and water reticulation",
  "Electrical installation: rural electrification, internal and external works, street lighting, high and low tension installation, transformers, and generator supply and installation",
  "Solar street lights and solar boreholes with submersible pumps",
  "Supply and installation of telecommunication equipment",
  "Borehole drilling",
  "General supplies",
] as const;

export const clientTypes = [
  "Banks",
  "Large companies and multinationals",
  "Government departments",
  "Local authorities",
  "Parastatals",
  "Major developers",
  "Private individuals",
] as const;
