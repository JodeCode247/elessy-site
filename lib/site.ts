// Single source of truth for business details.

import { address } from "framer-motion/client";

// PLACEHOLDERS: replace phone, WhatsApp, email, address and hours with ELESSY's real details.
export const site = {
  name: "ELESSY Nigeria Limited",
  short: "ELESSY",
  tagline: "Engineering the foundations Nigeria builds on.",
  description:
    "ELESSY Nigeria Limited delivers architecture, engineering consultancy, building construction, electrical, solar, borehole and telecom installation across Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://elessy.com.ng",
  phone: "+234 803 315 4332",
  phone2: "+234 818 692 0365",
  phone3: "+234 803 254 4994",
  phoneHref: "tel:+2348033154332",
  whatsappHref: "https://wa.me/2348033154332",
  email: "elessy2003@yahoo.com",
  address:"No.2, Owo close, Off Akure Crescent,Behind Post Office,Area 10 Garki, Abuja.",
  address2: "No. 5, Assembly Road Maplewood Estate, Oko-Oba,Agege, Lagos State",
  address3: "Suite 1&3 Elessy Office Complex,No. 51, Okene-Kabba Road,Opp. Civil Defence Office,Lokoja, Kogi State.",
  hours: "Monday to Friday, 8:00 to 17:00",
  client_message: "Hello ELESSY, I am interested in your engineering and construction services. Please provide more information."
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/our-team", label: "Our Team" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  
  
] as const;
