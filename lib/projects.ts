export type ProjectImage = { src: string; alt: string };

export type Project = {
  id?: string | number;         // used in the URL: /projects/<slug>
  name: string;
  slug: string;
  location: string;
  category: string;        // use a service name so filtering matches your services
  date?: string;
  client?: string;
  description: string[];   // paragraphs shown on the project page
  images: ProjectImage[];  // first image is the cover
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Clearing of Farm Land for Federal Ministry of Agriculture",
    slug: "clearing-of-farm-land",
    location: "Toto, Nassarawa State",
    category: "General Services",
    date: "Aug. 2025",
    client: "Federal Ministry of Agriculture & Food Security.",
    description: [
      "Clearing of land executed at Nassarawa, Toto.",
      "Commissioned by the Federal Ministry of Agriculture & Food Security."
    ],
    images: [
      { src: "images/projects/land-clearing.jpg", alt: "Clearing of land cover" }
    ]
  },
  {

    id: 3,
    name: "External Water Reticulation for Central Bank of Nigeria (CBN)",
    slug: "standby-plumbing-contractor-at-CBN-governors-residence",
    location: "Wuse, Abuja",
    category: "Plumbing & Maintenance",
    date: "May.2022",
    client: "Assistant Director Of Maintenance",
    description: [
      "Standby Plumbing Contractor At Governors' Residence located in Garki, Abuja.",
      "Supervised under the Office of the Assistant Director Of Maintenance."
    ],
    images: [
      { src: "images/projects/image56.jpg", alt: "Standby Plumbing Contractor At Governors' Residence cover" }
    ]
  },
  {
    id: 4,
    name: "Contract For Finishing Of Academy Block At The Maritime Academy Of Nigeria",
    slug: "contract-for-finishing-of-academy-block-at-the-maritime-academy-of-nigeria",
    location: "Oron, Akwa Ibom State",
    category: "Construction & Finishing",
    date: "Aug.2021",
    client: "Maritime Academy Of Nigeria",
    description: [
      "Contract For Finishing Of Academy Block At The Maritime Academy Of Nigeria executed in Oron, Akwa Ibom State.",
      "Client: Maritime Academy Of Nigeria."
    ],
    images: [
      { src: "images/projects/maritime.jpg", alt: "Contract For Finishing Of Academy Block At The Maritime Academy Of Nigeria cover" }
    ]
  },
  {
    id: 10,
    name: "Supply Of (MDGs) Medication Drugs To 34 Health Care Facilities",
    slug: "supply-of-mdgs-drugs-to-34-health-facilities",
    location: "Kabba/Bunu L.G.A Kogi State",
    category: "Medical Supply",
    date: "Jul.2012",
    client: "Kogi State MDGs",
    description: [
      "Supply Of (MDGs) Medication Drugs To 34 Health Care Facilities across Kabba/Bunu L.G.A Kogi State.",
      "Sponsored by Kogi State MDGs."
    ],
    images: [
      { src: "images/projects/image10.jpg", alt: "Supply Of (MDGs) Drugs To 34 Health Facilities cover" }
    ]
  },
  {
    id: 11,
    name: "Contract Award For The Renovation Of Classroom Block",
    slug: "contract-award-for-the-renovation-of-classroom-block",
    location: "Yagba West, Kogi State",
    category: "Renovation",
    date: "Nov.2011",
    client: "Universal Basic Education Board Lokoja",
    description: [
      "Contract Award For The Renovation Of Classroom Block in Yagba West, Kogi State.",
      "Client: Universal Basic Education Board Lokoja."
    ],
    images: [
      { src: "images/projects/image11.jpg", alt: "Contract Award For The Renovation Of Classroom Block cover" }
    ]
  },
  {
    id: 12,
    name: "Supply Of (MDGs) Class Room Furniture To 3 Location In Kogi State",
    slug: "supply-of-mdgs-class-room-furniture-to-3-location-in-kogi-state",
    location: "Okpo, Ankpa & Gidan Bassa, Kogi State",
    category: "Furniture Supply",
    date: "Mar.2010",
    client: "State House Abuja (MDGs)",
    description: [
      "Supply Of (MDGs) Class Room Furniture To 3 Location In Kogi State (Okpo, Ankpa & Gidan Bassa).",
      "Client: State House Abuja (MDGs)."
    ],
    images: [
      { src: "images/projects/image12.jpg", alt: "Supply Of (MDGs) Class Room Furniture To 3 Location In Kogi State cover" }
    ]
  },
  {
    id: 14,
    name: "Production Of A Set Of ETF Standard Furniture For Block Of Classroom",
    slug: "production-of-a-set-of-etf-standard-furniture",
    location: "UBE/JSS/Slamiya Ife, Omala L.G.A",
    category: "Furniture Manufacturing",
    date: "Jan.2010",
    client: "Kogi State Universal Basic Education Board",
    description: [
      "Production Of A Set Of ETF Standard Furniture For A Block at UBE/JSS/Slamiya Olle, Omala L.G.A.",
      "Client: Kogi State Universal Basic Education Board."
    ],
    images: [
      { src: "images/projects/image14.jpg", alt: "Production Of A Set Of ETF Standard Furniture For A Block cover" }
    ]
  },
  {
    id: 22,
    name: "Renovation And Rehabilitation Of The Burnt Ward At The General Hospital",
    slug: "renovation-and-rehabilitation-of-the-burnt-ward-at-the-general-hospital",
    location: "Lokoja, Kogi State",
    category: "Healthcare Renovation",
    date: "Mar.1998",
    client: "Kogi State Ministry Of Health",
    description: [
      "Renovation And Rehabilitation Of The Burnt Ward At The General Hospital in Lokoja, Kogi State.",
      "Client: Kogi State Ministry Of Health."
    ],
    images: [
      { src: "images/projects/image22.jpg", alt: "Renovation And Rehabilitation Of The Burnt Ward At The General Hospital cover" }
    ]
  },
  {
    id: 24,
    name: "Contract For Supply, Installation And Commissioning Of 33KV/11KV Power Cable To Aminu Kano Teaching Hospital, Kano",
    slug: "contract-for-supply-installation-and-commissioning-of-33kv-11kv-power-to-aminu-kano-teaching-hospital",
    location: "Kano State",
    category: "Electrical Power",
    date: "Sept.1994",
    client: "Ecological Consultants",
    description: [
      "Contract For Supply, Installation And Commissioning Of 33KV/11KV Power To Aminu Kano Teaching Hospital, Kano.",
      "Client: Ecological Consultants."
    ],
    images: [
      { src: "images/projects/image62.jpg", alt: "Contract For Supply, Installation And Commissioning Of 33KV/11KV Power To Aminu Kano Teaching Hospital, Kano cover" }
    ]
  },
  {
    id: 25,
    name: "Office Complex For Alhaji Barau At Ibrahim Taiwo Road, Kano",
    slug: "office-block-for-alhajisalisu-Barau-at-ibrahim-taiwo-road-kano",
    location: "Kano State",
    category: "Commercial Construction",
    date: "Nov.1986",
    client: "Environmental Development Consultants",
    description: [
      "Office Block For Alhaji Salisu Barau At Ibrahim Taiwo Road, Kano.",
      "Client: Environmental Development Consultants."
    ],
    images: [
      { src: "images/projects/image25.jpg", alt: "Office Block For Alhaji Salisu Barau At Ibrahim Taiwo Road, Kano cover" }
    ]
  },
  {
    id: 27,
    name: "Renovation of Class Room Block",
    slug: "renovation-of-class-room-block",
    location: "LGEA Primary School, Apara Egbe Yagba West",
    category: "Renovation",
    date: "Nov.2011",
    client: "Kogi State Universal Basic Education Board",
    description: [
      "Renovation of Class Room Block at LGEA Primary School, Apara Egbe Yagba West.",
      "Client: Kogi State Universal Basic Education Board."
    ],
    images: [
      { src: "images/projects/image27.jpg", alt: "Renovation of Class Room Block cover" }
    ]
  },
  {
    id: 35,
    name: "Construction of UBE Block of 3 Classroom/Store & VIP Toilets",
    slug: "construction-of-ube-block-of-3-classroom-store-and-vip-toilets",
    location: "Ogbonicha Primary School, ofu LGA Kogi State",
    category: "Educational Building",
    date: "Feb.2001",
    client: "National primary Education Commission",
    description: [
      "Construction of UBE Block of 3Classroom/Store & VIP Toilets at Ogbonicha Primary School, ofu LGA Kogi State.",
      "Client: National Primary Education Commission."
    ],
    images: [
      { src: "images/projects/image35.jpg", alt: "Construction of UBE Block of 3Classroom/Store & VIP Toilets cover" }
    ]
  },
  {
    id: 39,
    name: "Renovation & Upgrading of Primary Health Center (PHC) For Ministry Of Health Lokoja ",
    slug: "renovation-and-upgrade-of-primary-health-center-phc",
    location: "Abejukolo, Omala LGA Kogi State",
    category: "Healthcare Renovation",
    date: "Aug.1997",
    client: "Kogi State Ministry Health",
    description: [
      "Renovation & Upgrade of Primary Health Center (PHC) in Abejukolo, Omala LGA Kogi State.",
      "Client: Kogi State Ministry Health."
    ],
    images: [
      { src: "images/projects/image39.jpg", alt: "Renovation & Upgrade of Primary Health Center (PHC) cover" }
    ]
  },
  {
    id: 99,
    name: "Rural Electrification Work For Icheke-Ajokpachi Community",
    slug: "electrification-of-icheke-ajokpachi-community",
    location: "Omala L.G.A Kogi State",
    category: "Electrical Power",
    date: "Mar. 2012",
    client: "Kogi State Ministry of Rural Development",
    description: [
      "Electrification of Icheke-Ajokpachi Community in Omala L.G.A Kogi State.",
      "Client: Kogi State Ministry of Rural Development."
    ],
    images: [
      { src: "images/projects/image62.jpg", alt: "Electrification of Icheke-Ajokpachi Community cover" }
    ]
  },
  {
    id: 42,
    name: "Construction & installation of Street Lights Along Lokoja-Ganaja Road",
    slug: "construction-and-installation-of-street-lights-along-lokoja-ganaja-road",
    location: "Lokoja, Kogi State",
    category: "Electrical & Lighting",
    date: "Dec.2011",
    client: "Zerock Construction Company Limited",
    description: [
      "Construction & installation of Street Lights Along Lokoja-Ganaja Road.",
      "Client: Zerock Construction Company Limited"
    ],
    images: [
      { src: "images/projects/image42.jpg", alt: "Construction & installation of Street Light Along Lokoja-Ganaja Road cover" }
    ]
  },
  {
    id: 43,
    name: "Rehabilitation of Street Lights Lokoja Metropolis",
    slug: "rehabilitation-of-street-lights-lokoja-metropolis",
    location: "Lokoja, Township Kogi State",
    category: "Electrical & Lighting",
    date: "Nov.2011",
    client: "Kogi State Government Ministry of Woks",
    description: [
      "Rehabilitation of Street Light Lokoja Metropolis.",
      "Client: Kogi State Government Ministry of Works."
    ],
    images: [
      { src: "images/projects/image43.jpg", alt: "Rehabilitation of Street Light Lokoja Metropolis cover" }
    ]
  },
  {
    id: 48,
    name: "Internal Electrification Installion for Faculty of Law",
    slug: "internal-electrification-of-faculty-of-law",
    location: "University of Ilorin Permanent Site Ilorin, Kwara State",
    category: "Electrical Power",
    date: "May.2009",
    client: "Works Development University, Ilorin",
    description: [
      "Internal Electrification of Faculty of Law at University of Ilorin Permanent Site.",
      "Client: Works Development University, Ilorin."
    ],
    images: [
      { src: "images/projects/image48.jpg", alt: "Internal Electrification of Faculty of Law cover" }
    ]
  },
  
  {
    id: 50,
    name: "Supply & Installation of 200kva Transformer",
    slug: "supply-and-installation-of-200kva-transformer",
    location: "Deputy Governor's House, Makurdi, Benue State",
    category: "Electrical Power",
    date: "Mar.2009",
    client: "Zerock Construction Company Ltd",
    description: [
      "Supply & Installation of 200kva Transformer at Deputy Governor's House, Makurdi, Benue State.",
      "Client: Zerock Construction Company Ltd."
    ],
    images: [
      { src: "images/projects/image79.jpg", alt: "Supply & Installation of 200kva Transformer cover" }
    ]
  },
  
  {
    id: 59,
    name: "Supply & Extension Of 200kva, 11kv Transformer To The Residence Of The Director's Secretary CBN Abuja",
    slug: "supply-and-extension-of-200kva-11kv-transformer-to-cbn-residence",
    location: "Abuja",
    category: "Electrical Power",
    date: "Feb.2000",
    client: "Central Bank Of Nigeria (CBN)",
    description: [
      "Supply & Extension Of 200kva, 11kv Transformer to the residence of the Director's Secretary CBN Abuja.",
      "Client: Central Bank Of Nigeria (CBN)."
    ],
    images: [
      { src: "images/projects/image59.jpg", alt: "Supply & Extension Of 200kva, 11kva Transformer cover" }
    ]
  },
  
  {
    id: 63,
    name: "Electrical Installation & Sub-Station for Asaka Cement Building",
    slug: "electrical-installation-and-sub-station",
    location: "Asaka Cement Building, Audu Bako Way Kano",
    category: "Electrical Installation",
    date: "Jul.2000",
    client: "Building Contracting Ltd, Bompia, Kano",
    description: [
      "Electrical Installation & Sub-Station at Asaka Cement Building, Audu Bako Road Kano.",
      "Client: Building Contracting Ltd, Bompia, Kano."
    ],
    images: [
      { src: "images/projects/image63.jpg", alt: "Electrical Installation & Sub-Station cover" }
    ]
  },
  {
    id: 66,
    name: "Electrical Installation for  First Bank PLC Regional Headquater Kano",
    slug: "supply-and-installationr",
    location: "Kano",
    category: "Electrical Installation",
    date: "Nov.1994",
    client: "First Bank",
    description: [
      "Electrical Installation for  First Bank plc Regional Headquater Kano",
      "Client: First Bank."
    ],
    images: [
      { src: "images/projects/image66.jpg", alt: "Supply & Installation" }
    ]
  },
  {
    id: 68,
    name: "Electrical Installation for National University Commision (NUC) Block Of Flats ",
    slug: "nuc-block-of-flats-garki-abuja-electrical-installation",
    location: "Garki Area 10,Abuja",
    category: "Electrical Installation",
    date: "Jan.1992",
    client: "National Universities Commission",
    description: [
      "NUC Block Of Flats Garki Abuja Electrical Installation.",
      "Client: National Universities Commission."
    ],
    images: [
      { src: "images/projects/image68.jpg", alt: "NUC Block Of Flats Garki Abuja Electrical Installation cover" }
    ]
  },
  {
    id: 72,
    name: "Drilling & Installation Of Hand Pump Borehole",
    slug: "drilling-and-installation-of-hand-pump-borehole",
    location: "MDGS-CGS Projects",
    category: "Water Engineering",
    date: "Dec.2010",
    client: "Kogi State MDGs",
    description: [
      "Drilling & Installation Of Hand Pump Borehole under MDGS-CGS Projects.",
      "Client: Kogi State MDGs."
    ],
    images: [
      { src: "images/projects/image72.jpg", alt: "Drilling & Installation Of Hand Pump Borehole cover" }
    ]
  },
  {
    id: 88,
    name: "Installation & Commissioning Of External Plumbing Equipment  I&J Housing Estate",
    slug: "installation-and-commissioning-of-external-plumbing-equipment",
    location: "CBN Garki Abuja",
    category: "Plumbing Services",
    date: "Dec.1998",
    client: "Yeroson Partnership",
    description: [
      "Installation & Commissioning Of External Plumbing Equipment in CBN Garki Abuja.",
      "Client: Yeroson Partnership."
    ],
    images: [
      { src: "images/projects/image88.jpg", alt: "Installation & Commissioning Of External Plumbing Services Equipment cover" }
    ]
  },
  {
    id: 89,
    name: "Electrical/  Mechanical Installation for Block of Flat At Wuse II Abuja",
    slug: "mechanical-installation-sub-contractor-wuse-ii-abuja",
    location: "Wuse II Abuja",
    category: "Mechanical Installation",
    date: "Feb.1998",
    client: "Prime Consultants Ltd",
    description: [
      "Mechanical Installation Sub Contractor In Respect Of Proposed Flat At Plots 1307 & 1308 Wuse II Abuja.",
      "Client: Prime Consultants Ltd."
    ],
    images: [
      { src: "images/projects/image89.jpg", alt: "Mechanical Installation Sub Contractor cover" }
    ]
  },
];
