// Single source of truth for business details.
// PLACEHOLDERS: replace phone, WhatsApp, email, address and hours with ELESSY's real details.
export const site = {
  name: "ELESSY Nigeria Limited",
  short: "ELESSY",
  tagline: "CONSTRUCTION | ENGINEERING | ARCHITECTURE",
  description:
    "ELESSY Nigeria Limited delivers architecture, engineering consultancy, building construction, electrical, solar, borehole and telecom installation across Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://elessyng.com.ng",
  phone: "+234 912 239 4851",
  phone2: "+234 806 574 4015",
  phone3: "+234 254 574 4994",
  phoneHref: "tel:+2349122394851",
  phoneHref2: "tel:+2348065744015",
  phoneHref3: "tel:+2342545744994",
  whatsappHref: "https://wa.me/2347085335167",
  email: "elessynglimited@gmail.com",
  address:"No.2, Owo close, Off Akure Crescent,Behind Post Office,Area 10 Garki, Abuja.",
  address2: "12 Sanyaolu Street Oko Oba Agege Lagos",
  address3: "Suite 1&3 Elessy Office Complex,No. 51, Okene-Kabba Road,Opp. Civil Defence Office,Lokoja, Kogi State.",
  hours: "Monday to Friday, 8:00am to 5:00pm",
  client_message: "Hello Elessy ng, I am interested in your engineering and construction services. Can we discuss."
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  
  { href: "/our-team", label: "Our Team" },
  { href: "/projects", label: "Projects" },
  // { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/products", label: "Products" },
  
  
] as const;
