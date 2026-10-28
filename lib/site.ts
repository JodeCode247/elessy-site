// Single source of truth for business details.

import { address } from "framer-motion/client";

// PLACEHOLDERS: replace phone, WhatsApp, email, address and hours with ELESSY's real details.
export const site = {
  name: "ELESSY Nigeria Limited",
  short: "ELESSY",
  tagline: "CONSTRUCTION | ENGINEERING | ARCHITECTURE",
  description:
    "ELESSY Nigeria Limited delivers architecture, engineering consultancy, building construction, electrical, solar, borehole and telecom installation across Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://elessyng.com.ng",
  phone: "+234 912 239 4951",
  phone2: "+234 818 692 0365",
  phone3: "+234 803 254 4994",
  phoneHref: "tel:+2349122394951",
  whatsappHref: "https://wa.me/2348033154332",
  email2: "elessy2003@yahoo.com",
  email: "elessynigerialimited@gmail.com",
  address:"No.2, Owo close, Off Akure Crescent,Behind Post Office,Area 10 Garki, Abuja.",
  address2: "No. 5, Assembly Road Maplewood Estate, Oko-Oba,Agege, Lagos State",
  address3: "Suite 1&3 Elessy Office Complex,No. 51, Okene-Kabba Road,Opp. Civil Defence Office,Lokoja, Kogi State.",
  hours: "Monday to Friday, 8:00am to 4:00pm",
  client_message: "Hello Elessy ng, I am interested in your engineering and construction services. Can you discuss."
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/our-team", label: "Our Team" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  // { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  
  
] as const;
