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
    name: "Clearing of land",
    slug: "clearing-of-land",
    location: "Nassarawa, Toto",
    category: "General Services",
    date: "Aug. 2025",
    client: "Federal Ministry of Agriculture & Food Security.",
    description: [
      "Clearing of land executed at Nassarawa, Toto[cite: 9].",
      "Commissioned by the Federal Ministry of Agriculture & Food Security[cite: 9]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Clearing of land cover" }
    ]
  },
  {
    id: 2,
    name: "Contract For Solid Waste Management Service With Lokoja Metropolis",
    slug: "contract-for-solid-waste-management-service-with-lokoja-metropolis",
    location: "Lokoja, Kogi State",
    category: "Environmental Services",
    date: "Feb, 2023",
    client: "Kogi State Government",
    description: [
      "Contract For Solid Waste Management Service With Lokoja Metropolis carried out in Lokoja, Kogi State[cite: 9].",
      "Managed in partnership with the Kogi State Government[cite: 9]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Contract For Solid Waste Management Service With Lokoja Metropolis cover" }
    ]
  },
  {
    id: 3,
    name: "Standby Plumbing Contractor At Governors' Residence",
    slug: "standby-plumbing-contractor-at-governors-residence",
    location: "Garki, Abuja",
    category: "Plumbing & Maintenance",
    date: "May.2022",
    client: "Assistant Director Of Maintenance",
    description: [
      "Standby Plumbing Contractor At Governors' Residence located in Garki, Abuja[cite: 9].",
      "Supervised under the Office of the Assistant Director Of Maintenance[cite: 9]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Standby Plumbing Contractor At Governors' Residence cover" }
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
      "Contract For Finishing Of Academy Block At The Maritime Academy Of Nigeria executed in Oron, Akwa Ibom State[cite: 9].",
      "Client: Maritime Academy Of Nigeria[cite: 9]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Contract For Finishing Of Academy Block At The Maritime Academy Of Nigeria cover" }
    ]
  },
  {
    id: 5,
    name: "Contract For Conversion Of School Of Maritime Transport Studies Lecture Hall To A Mini Auditorium At The Maritime Academy Of Nigeria",
    slug: "contract-for-conversion-of-school-of-maritime-transport-studies-lecture-hall-to-a-mini-auditorium",
    location: "Oron, Akwa Ibom State",
    category: "Renovation & Conversion",
    date: "Nov.2020",
    client: "Maritime Academy Of Nigeria",
    description: [
      "Contract For Conversion Of School Of Maritime Transport Studies Lecture Hall To A Mini Auditorium At The Maritime Academy Of Nigeria[cite: 9].",
      "Conducted for the Maritime Academy Of Nigeria in Oron, Akwa Ibom State[cite: 9]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Contract For Conversion Of School Of Maritime Transport Studies Lecture Hall To A Mini Auditorium At The Maritime Academy Of Nigeria cover" }
    ]
  },
  {
    id: 6,
    name: "Construction Of Perimeter Block Wall Fence Of Nation Biotechnology Development Agency Headquarters",
    slug: "construction-of-perimeter-block-wall-fence-of-nation-biotechnology-development-agency-headquarters",
    location: "Lugbe Abuja",
    category: "Construction",
    date: "Dec.2016",
    client: "Nation Biotechnology Development Agency (NABDA)",
    description: [
      "Construction Of Perimeter Block Wall Fence Of Nation Biotechnology Development Agency Headquarters in Lugbe Abuja[cite: 9].",
      "Commissioned by the Nation Biotechnology Development Agency (NABDA)[cite: 9]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction Of Perimeter Block Wall Fence Of Nation Biotechnology Development Agency Headquarters cover" }
    ]
  },
  {
    id: 7,
    name: "Construction Of Wardrobes And Kitchen cabinet At Mandate Service Quarters, Canaan Land, Ota Lagos",
    slug: "construction-of-wardrobes-and-kitchen-cabinet-at-mandate-service-quarters",
    location: "Ota, Lagos State",
    category: "Carpentry & Joinery",
    date: "Mar.2016",
    client: "Living faith World Outreach Centre (faith Tabernacle)",
    description: [
      "Construction Of Wardrobes And Kitchen cabinet At Mandate Service Quarters, Canaan Land, Ota Lagos[cite: 9].",
      "Client: Living faith World Outreach Centre (faith Tabernacle)[cite: 9]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction Of Wardrobes And Kitchen cabinet At Mandate Service Quarters, Canaan Land, Ota Lagos cover" }
    ]
  },
  {
    id: 8,
    name: "Construction of 200 capacity church auditorium,",
    slug: "construction-of-200-capacity-church-auditorium",
    location: "Ucha Benue State",
    category: "Building Construction",
    date: "2016",
    client: "Living Faith Church",
    description: [
      "Construction of 200 capacity church auditorium located in Ucha Benue State[cite: 10].",
      "Executed for Living Faith Church[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of 200 capacity church auditorium, cover" }
    ]
  },
  {
    id: 9,
    name: "Construction Of Hostel Block At GSS Gawu",
    slug: "construction-of-hostel-block-at-gss-gawu",
    location: "Garki, Abuja",
    category: "Building Construction",
    date: "Mar.2012",
    client: "FCT-Secondary Education Board",
    description: [
      "Construction Of Hostel Block At GSS Gawu in Garki, Abuja[cite: 10].",
      "Client: FCT-Secondary Education Board[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction Of Hostel Block At GSS Gawu cover" }
    ]
  },
  {
    id: 10,
    name: "Supply Of (MDGs) Drugs To 34 Health Facilities",
    slug: "supply-of-mdgs-drugs-to-34-health-facilities",
    location: "Kabba/Bunu L.G.A Kogi State",
    category: "Medical Supply",
    date: "Jul.2012",
    client: "Kogi State MDGs",
    description: [
      "Supply Of (MDGs) Drugs To 34 Health Facilities across Kabba/Bunu L.G.A Kogi State[cite: 10].",
      "Sponsored by Kogi State MDGs[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply Of (MDGs) Drugs To 34 Health Facilities cover" }
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
      "Contract Award For The Renovation Of Classroom Block in Yagba West, Kogi State[cite: 10].",
      "Client: Universal Basic Education Board Lokoja[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Contract Award For The Renovation Of Classroom Block cover" }
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
      "Supply Of (MDGs) Class Room Furniture To 3 Location In Kogi State (Okpo, Ankpa & Gidan Bassa)[cite: 10].",
      "Client: State House Abuja (MDGs)[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply Of (MDGs) Class Room Furniture To 3 Location In Kogi State cover" }
    ]
  },
  {
    id: 13,
    name: "Contract For Part Fencing Of Bio-Resource Development Center At Owode",
    slug: "contract-for-part-fencing-of-bio-resource-development-center-at-owode",
    location: "Wuse, Abuja",
    category: "Construction",
    date: "Jul.2010",
    client: "Nation Biotechnology Development Agency (NABDA)",
    description: [
      "Contract For Part Fencing Of Bio-Resource Development Center At Owode, managed from Wuse, Abuja[cite: 10].",
      "Client: Nation Biotechnology Development Agency (NABDA)[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Contract For Part Fencing Of Bio-Resource Development Center At Owode cover" }
    ]
  },
  {
    id: 14,
    name: "Production Of A Set Of ETF Standard Furniture For A Block",
    slug: "production-of-a-set-of-etf-standard-furniture-for-a-block",
    location: "UBE/JSS/Slamiya Olle, Omala L.G.A",
    category: "Furniture Manufacturing",
    date: "Jan.2010",
    client: "Kogi State Universal Basic Education Board",
    description: [
      "Production Of A Set Of ETF Standard Furniture For A Block at UBE/JSS/Slamiya Olle, Omala L.G.A[cite: 10].",
      "Client: Kogi State Universal Basic Education Board[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Production Of A Set Of ETF Standard Furniture For A Block cover" }
    ]
  },
  {
    id: 15,
    name: "Supply Of 32 & 21 Flick Design Televisions",
    slug: "supply-of-32-and-21-flick-design-televisions",
    location: "Radio House Abuja",
    category: "Equipment Supply",
    date: "Apr.2009",
    client: "Voice Of Nigeria Broadcasting House Abuja",
    description: [
      "Supply Of 32 & 21 Flick Design Televisions to Radio House Abuja[cite: 10].",
      "Client: Voice Of Nigeria Broadcasting House Abuja[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply Of 32 & 21 Flick Design Televisions cover" }
    ]
  },
  {
    id: 16,
    name: "Supply Of Free To Air Satellite",
    slug: "supply-of-free-to-air-satellite",
    location: "Nigeria labor Congress",
    category: "Telecommunications",
    date: "Aug.2008",
    client: "KOCCIMA Investment",
    description: [
      "Supply Of Free To Air Satellite for the Nigeria labor Congress[cite: 10].",
      "Client: KOCCIMA Investment[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply Of Free To Air Satellite cover" }
    ]
  },
  {
    id: 17,
    name: "Survey Of Telecommunication Tower (Mass)",
    slug: "survey-of-telecommunication-tower-mass",
    location: "North West Zone Nigeria",
    category: "Surveying Services",
    date: "Apr.2006",
    client: "Nigerian Communication Commission ABJ",
    description: [
      "Survey Of Telecommunication Tower (Mass) across the North West Zone Nigeria[cite: 10].",
      "Client: Nigerian Communication Commission ABJ[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Survey Of Telecommunication Tower (Mass) cover" }
    ]
  },
  {
    id: 18,
    name: "Furnishing Of The NHIS Zonal Manager's Residence",
    slug: "furnishing-of-the-nhis-zonal-managers-residence-kano",
    location: "Kano, Kano State",
    category: "Interior Furnishing",
    date: "May.1999",
    client: "National Health Insurance Scheme Abuja",
    description: [
      "Furnishing Of The NHIS Zonal Manager's Residence in Kano, Kano State[cite: 10].",
      "Client: National Health Insurance Scheme Abuja[cite: 10]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
    ]
  },
  {
    id: 19,
    name: "Furnishing Of The NHIS Zonal Manager's Residence",
    slug: "furnishing-of-the-nhis-zonal-managers-residence-lagos",
    location: "Lagos, Lagos State",
    category: "Interior Furnishing",
    date: "May.1999",
    client: "National Health Insurance Scheme Abuja",
    description: [
      "Furnishing Of The NHIS Zonal Manager's Residence in Lagos, Lagos State[cite: 1].",
      "Client: National Health Insurance Scheme Abuja[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
    ]
  },
  {
    id: 20,
    name: "Furnishing Of The NHIS Zonal Manager's Residence",
    slug: "furnishing-of-the-nhis-zonal-managers-residence-enugu",
    location: "Enugu, Enugu State",
    category: "Interior Furnishing",
    date: "May.1999",
    client: "National Health Insurance Scheme Abuja",
    description: [
      "Furnishing Of The NHIS Zonal Manager's Residence in Enugu, Enugu State[cite: 1].",
      "Client: National Health Insurance Scheme Abuja[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
    ]
  },
  {
    id: 21,
    name: "Furnishing Of The NHIS Zonal Manager's Residence",
    slug: "furnishing-of-the-nhis-zonal-managers-residence-port-harcourt",
    location: "Port-Harcourt, River State",
    category: "Interior Furnishing",
    date: "May.1999",
    client: "National Health Insurance Scheme Abuja",
    description: [
      "Furnishing Of The NHIS Zonal Manager's Residence in Port-Harcourt, River State[cite: 1].",
      "Client: National Health Insurance Scheme Abuja[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
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
      "Renovation And Rehabilitation Of The Burnt Ward At The General Hospital in Lokoja, Kogi State[cite: 1].",
      "Client: Kogi State Ministry Of Health[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Renovation And Rehabilitation Of The Burnt Ward At The General Hospital cover" }
    ]
  },
  {
    id: 23,
    name: "Routine Service Of Peugeot 504 Station Wagon (FG 1%!& No. 2)",
    slug: "routine-service-of-peugeot-504-station-wagon",
    location: "Lagos State",
    category: "Automotive Maintenance",
    date: "Jun.1996",
    client: "National Agricultural Land Development Authority (NALDA)",
    description: [
      "Routine Service Of Peugeot 504 Station Wagon in Lagos State[cite: 1].",
      "Client: National Agricultural Land Development Authority (NALDA)[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Routine Service Of Peugeot 504 Station Wagon cover" }
    ]
  },
  {
    id: 24,
    name: "Contract For Supply, Installation And Commissioning Of 33KV/11KV Power To Aminu Kano Teaching Hospital, Kano",
    slug: "contract-for-supply-installation-and-commissioning-of-33kv-11kv-power-to-aminu-kano-teaching-hospital",
    location: "Kano State",
    category: "Electrical Power",
    date: "Sept.1994",
    client: "Ecological Consultants",
    description: [
      "Contract For Supply, Installation And Commissioning Of 33KV/11KV Power To Aminu Kano Teaching Hospital, Kano[cite: 1].",
      "Client: Ecological Consultants[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Contract For Supply, Installation And Commissioning Of 33KV/11KV Power To Aminu Kano Teaching Hospital, Kano cover" }
    ]
  },
  {
    id: 25,
    name: "Office Block For Alhaji Salisu Barau At Ibrahim Taiwo Road, Kano",
    slug: "office-block-for-alhajisalisu-barau-at-ibrahim-taiwo-road-kano",
    location: "Kano State",
    category: "Commercial Construction",
    date: "Nov.1986",
    client: "Environmental Development Consultants",
    description: [
      "Office Block For Alhaji Salisu Barau At Ibrahim Taiwo Road, Kano[cite: 1].",
      "Client: Environmental Development Consultants[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Office Block For Alhaji Salisu Barau At Ibrahim Taiwo Road, Kano cover" }
    ]
  },
  {
    id: 26,
    name: "Construction of hotel block",
    slug: "construction-of-hotel-block",
    location: "G.S.S Gawu-Abuja",
    category: "Building Construction",
    date: "Mar. 2012",
    client: "FCT-Secondary Education board Abuja",
    description: [
      "Construction of hotel block at G.S.S Gawu-Abuja[cite: 1].",
      "Client: FCT-Secondary Education board Abuja[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of hotel block cover" }
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
      "Renovation of Class Room Block at LGEA Primary School, Apara Egbe Yagba West[cite: 1].",
      "Client: Kogi State Universal Basic Education Board[cite: 1]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Renovation of Class Room Block cover" }
    ]
  },
  {
    id: 28,
    name: "Fencing of Bio-Resources Development Center",
    slug: "fencing-of-bio-resources-development-center",
    location: "Owode, Ogun State",
    category: "Construction",
    date: "July.2010",
    client: "National Biotechnology Development Agency, Abuja.",
    description: [
      "Fencing of Bio-Resources Development Center in Owode, Ogun State[cite: 2].",
      "Client: National Biotechnology Development Agency, Abuja[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Fencing of Bio-Resources Development Center cover" }
    ]
  },
  {
    id: 29,
    name: "Construction of Primary Health Care Block",
    slug: "construction-of-primary-health-care-block",
    location: "Odo- Ape Bunu in Kabba LGA, Kogi State.",
    category: "Healthcare Construction",
    date: "Oct. 2009",
    client: "Kabba/Bunu Local Govrnmnet Ministry of Works",
    description: [
      "Construction of Primary Health Care Block in Odo- Ape Bunu, Kabba LGA, Kogi State[cite: 2].",
      "Client: Kabba/Bunu Local Government Ministry of Works[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of Primary Health Care Block cover" }
    ]
  },
  {
    id: 30,
    name: "Upgrade & Rehabilitation of primary health Centers",
    slug: "upgrade-and-rehabilitation-of-primary-health-centers",
    location: "Ejiba, Yagba West LGA Kogi State",
    category: "Healthcare Renovation",
    date: "April. 2009",
    client: "Kogi State MDGs",
    description: [
      "Upgrade & Rehabilitation of primary health Centers in Ejiba, Yagba West LGA Kogi State[cite: 2].",
      "Client: Kogi State MDGs[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Upgrade & Rehabilitation of primary health Centers cover" }
    ]
  },
  {
    id: 31,
    name: "Construction of legislative Residential Quarters",
    slug: "construction-of-legislative-residential-quarters",
    location: "Along Ganaja Road, Lokoja Kogi State.",
    category: "Residential Construction",
    date: "May.2005",
    client: "Kogi State Ministry of Works & Housing",
    description: [
      "Construction of legislative Residential Quarters along Ganaja Road, Lokoja Kogi State[cite: 2].",
      "Client: Kogi State Ministry of Works & Housing[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of legislative Residential Quarters cover" }
    ]
  },
  {
    id: 32,
    name: "General Renovation of Intermediate state Quarters",
    slug: "general-renovation-of-intermediate-state-quarters",
    location: "Abuja",
    category: "Renovation",
    date: "Aug. 2003",
    client: "Central Bank of Abuja (CBN)",
    description: [
      "General Renovation of Intermediate state Quarters in Abuja[cite: 2].",
      "Client: Central Bank of Abuja (CBN)[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "General Renovation of Intermediate state Quarters cover" }
    ]
  },
  {
    id: 33,
    name: "Construction of Commissioner Residential Quarters",
    slug: "construction-of-commissioner-residential-quarters",
    location: "Along Gaaja Road Lokoja, Kogi State",
    category: "Residential Construction",
    date: "Apr. 2003",
    client: "Kogi State Ministry ogf Work & Housing",
    description: [
      "Construction of Commissioner Residential Quarters along Gaaja Road Lokoja, Kogi State[cite: 2].",
      "Client: Kogi State Ministry of Work & Housing[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of Commissioner Residential Quarters cover" }
    ]
  },
  {
    id: 34,
    name: "Construction of Generator House",
    slug: "construction-of-generator-house",
    location: "Abuja",
    category: "Building Construction",
    date: "Jul.2001",
    client: "National Commission for Museums & Monuments",
    description: [
      "Construction of Generator House in Abuja[cite: 2].",
      "Client: National Commission for Museums & Monuments[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of Generator House cover" }
    ]
  },
  {
    id: 35,
    name: "Construction of UBE Block of 3Classroom/Store & VIP Toilets",
    slug: "construction-of-ube-block-of-3-classroom-store-and-vip-toilets",
    location: "Ogbonicha Primary School, ofu LGA Kogi State",
    category: "Educational Building",
    date: "Fe.2001",
    client: "National primary Education Commission",
    description: [
      "Construction of UBE Block of 3Classroom/Store & VIP Toilets at Ogbonicha Primary School, ofu LGA Kogi State[cite: 2].",
      "Client: National Primary Education Commission[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of UBE Block of 3Classroom/Store & VIP Toilets cover" }
    ]
  },
  {
    id: 36,
    name: "Guest Chalet at State Road Kano",
    slug: "guest-chalet-at-state-road-kano",
    location: "Kano",
    category: "Residential Construction",
    date: "Nov.1998",
    client: "Shehu Giwa & Partners",
    description: [
      "Guest Chalet at State Road Kano[cite: 2].",
      "Client: Shehu Giwa & Partners[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Guest Chalet at State Road Kano cover" }
    ]
  },
  {
    id: 37,
    name: "Construction of 2 Bedroom Bungalows at The Lokongoma Phase III Lokoja",
    slug: "construction-of-2-bedroom-bungalows-at-the-lokongoma-phase-iii-lokoja",
    location: "Lokoja",
    category: "Residential Construction",
    date: "Oct. 1998",
    client: "Ministry of Works, Transport & Housing",
    description: [
      "Construction of 2 Bedroom Bungalows at The Lokongoma Phase III Lokoja[cite: 2].",
      "Client: Ministry of Works, Transport & Housing[cite: 2]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction of 2 Bedroom Bungalows at The Lokongoma Phase III Lokoja cover" }
    ]
  },
  {
    id: 38,
    name: "Renovation & Rehabilitation of the Burnt Ward",
    slug: "renovation-and-rehabilitation-of-the-burnt-ward",
    location: "Lokoja General Hospital",
    category: "Healthcare Renovation",
    date: "Mar.1998",
    client: "Kogi State Ministry of Health",
    description: [
      "Renovation & Rehabilitation of the Burnt Ward at Lokoja General Hospital[cite: 3].",
      "Client: Kogi State Ministry of Health[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Renovation & Rehabilitation of the Burnt Ward cover" }
    ]
  },
  {
    id: 39,
    name: "Renovation & Upgrade of Primary Health Center (PHC)",
    slug: "renovation-and-upgrade-of-primary-health-center-phc",
    location: "Abejokolo, Omala LGA Kogi State",
    category: "Healthcare Renovation",
    date: "Aug.1997",
    client: "Kogi State Ministry Health",
    description: [
      "Renovation & Upgrade of Primary Health Center (PHC) in Abejokolo, Omala LGA Kogi State[cite: 3].",
      "Client: Kogi State Ministry Health[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Renovation & Upgrade of Primary Health Center (PHC) cover" }
    ]
  },
  {
    id: 40,
    name: "Office Block for Alhaji Salisu Barau at Ibrahim Taiwo Road Kano",
    slug: "office-block-for-alhajisalisu-barau-at-ibrahim-taiwo-road-kano",
    location: "Kano",
    category: "Commercial Construction",
    date: "Jan. 1987",
    client: "Environmental Development Consultants",
    description: [
      "Office Block for Alhaji Salisu Barau at Ibrahim Taiwo Road Kano[cite: 3].",
      "Client: Environmental Development Consultants[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Office Block for Alhaji Salisu Barau at Ibrahim Taiwo Road Kano cover" }
    ]
  },
  {
    id: 41,
    name: "Large Lecture Theatre (Faculty of Science)",
    slug: "large-lecture-theatre-faculty-of-science",
    location: "Iliorin",
    category: "Educational Building",
    date: "Jul.1996",
    client: "University of Ilorin, Ilorin",
    description: [
      "Large Lecture Theatre (Faculty of Science) in Iliorin[cite: 3].",
      "Client: University of Ilorin, Ilorin[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Large Lecture Theatre (Faculty of Science) cover" }
    ]
  },
  {
    id: 42,
    name: "Electrification of Icheke-Ajokpachi Community",
    slug: "electrification-of-icheke-ajokpachi-community",
    location: "Omala L.G.A Kogi State",
    category: "Electrical Power",
    date: "Mar. 2012",
    client: "Kogi State Ministry of Rural Development",
    description: [
      "Electrification of Icheke-Ajokpachi Community in Omala L.G.A Kogi State[cite: 3].",
      "Client: Kogi State Ministry of Rural Development[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrification of Icheke-Ajokpachi Community cover" }
    ]
  },
  {
    id: 97,
    name: "Construction & installation of Street Light Along Lokoja-Ganaja Road",
    slug: "construction-and-installation-of-street-light-along-lokoja-ganaja-road",
    location: "Lokoja Kogi State",
    category: "Electrical & Lighting",
    date: "Dec.2011",
    client: "Zerock Construction Company Limited",
    description: [
      "Construction & installation of Street Light Along Lokoja-Ganaja Road[cite: 3].",
      "Client: Zerock Construction Company Limited[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction & installation of Street Light Along Lokoja-Ganaja Road cover" }
    ]
  },
  {
    id: 43,
    name: "Rehabilitation of Street Light Lokoja Metropolis",
    slug: "rehabilitation-of-street-light-lokoja-metropolis",
    location: "Lokoja Township Kogi State",
    category: "Electrical & Lighting",
    date: "Nov.2011",
    client: "Kogi State Government Ministry of Woks",
    description: [
      "Rehabilitation of Street Light Lokoja Metropolis[cite: 3].",
      "Client: Kogi State Government Ministry of Works[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Rehabilitation of Street Light Lokoja Metropolis cover" }
    ]
  },
  {
    id: 44,
    name: "Electrification of Ochaja Secondary School/Community",
    slug: "electrification-of-ochaja-secondary-school-community",
    location: "Dekina L.G.A Kogi State",
    category: "Electrical Power",
    date: "Aug.2011",
    client: "Kogi State Ministry of Rural Development",
    description: [
      "Electrification of Ochaja Secondary School/Community in Dekina L.G.A Kogi State[cite: 3].",
      "Client: Kogi State Ministry of Rural Development[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrification of Ochaja Secondary School/Community cover" }
    ]
  },
  {
    id: 45,
    name: "Electrification of icheke-Ate Community",
    slug: "electrification-of-icheke-ate-community",
    location: "Omala L.G.A Kogi State",
    category: "Electrical Power",
    date: "Aug.2011",
    client: "Kogi State Ministry of Rural Development",
    description: [
      "Electrification of icheke-Ate Community in Omala L.G.A Kogi State[cite: 3].",
      "Client: Kogi State Ministry of Rural Development[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrification of icheke-Ate Community cover" }
    ]
  },
  {
    id: 46,
    name: "Maintenance of 33kva Overhead Lines",
    slug: "maintenance-of-33kva-overhead-lines",
    location: "Katanpe Gwagwalada Abuja",
    category: "Electrical Power",
    date: "Mar.2010",
    client: "Abuja Electricity Distribution Plc.",
    description: [
      "Maintenance of 33kva Overhead Lines in Katanpe Gwagwalada Abuja[cite: 3].",
      "Client: Abuja Electricity Distribution Plc[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Maintenance of 33kva Overhead Lines cover" }
    ]
  },
  {
    id: 47,
    name: "Solar Bases Rural",
    slug: "solar-bases-rural",
    location: "Sasaro & Egbegiri",
    category: "Energy",
    date: "Sept.2009",
    client: "Energy",
    description: [
      "Solar Bases Rural deployment in Sasaro & Egbegiri[cite: 3].",
      "Client: Energy sector[cite: 3]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Solar Bases Rural cover" }
    ]
  },
  {
    id: 48,
    name: "Internal Electrification of Faculty of Law",
    slug: "internal-electrification-of-faculty-of-law",
    location: "University of Ilorin Permanent Site Ilorin, Kwara State",
    category: "Electrical Power",
    date: "May.2009",
    client: "Works Development University, Ilorin",
    description: [
      "Internal Electrification of Faculty of Law at University of Ilorin Permanent Site[cite: 4].",
      "Client: Works Development University, Ilorin[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Internal Electrification of Faculty of Law cover" }
    ]
  },
  {
    id: 49,
    name: "Construction Of PHC Block",
    slug: "construction-of-phc-block",
    location: "Bunu District, Kogi State",
    category: "Healthcare Construction",
    date: "Oct.2009",
    client: "Kabba-Bunu Local Government",
    description: [
      "Construction Of PHC Block in Bunu District, Kogi State[cite: 4].",
      "Client: Kabba-Bunu Local Government[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction Of PHC Block cover" }
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
      "Supply & Installation of 200kva Transformer at Deputy Governor's House, Makurdi, Benue State[cite: 4].",
      "Client: Zerock Construction Company Ltd[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply & Installation of 200kva Transformer cover" }
    ]
  },
  {
    id: 51,
    name: "Relocation of High Tension (HT) Poles Along Lokoja Township Roads",
    slug: "relocation-of-high-tension-ht-poles-along-lokoja-township-roads",
    location: "Lokoja, Kogi State",
    category: "Electrical Power",
    date: "Dec.2008",
    client: "Kogi State Ministry of Works & Housing",
    description: [
      "Relocation of High Tension (HT) Poles Along Lokoja Township Roads[cite: 4].",
      "Client: Kogi State Ministry of Works & Housing[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Relocation of High Tension (HT) Poles Along Lokoja Township Roads cover" }
    ]
  },
  {
    id: 52,
    name: "Construction & Installation of Street Light Along Obasanjo Square",
    slug: "construction-and-installation-of-street-light-along-obasanjo-square",
    location: "Lokoa, Kogi State",
    category: "Electrical & Lighting",
    date: "Jul.2006",
    client: "Zerock Construction Company Ltd",
    description: [
      "Construction & Installation of Street Light Along Obasanjo Square[cite: 4].",
      "Client: Zerock Construction Company Ltd[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction & Installation of Street Light Along Obasanjo Square cover" }
    ]
  },
  {
    id: 53,
    name: "Electrification of Permanent Secretary Residential Quarters",
    slug: "electrification-of-permanent-secretary-residential-quarters",
    location: "Along Ganaja Road Lokoja, Kogi State",
    category: "Electrical Power",
    date: "Dec.2005",
    client: "Kogi State Ministry of Works & Housing",
    description: [
      "Electrification of Permanent Secretary Residential Quarters along Ganaja Road Lokoja[cite: 4].",
      "Client: Kogi State Ministry of Works & Housing[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrification of Permanent Secretary Residential Quarters cover" }
    ]
  },
  {
    id: 54,
    name: "Construction & Installation of Street Light Along Stella Obasanjo Library/Government House/Kogi Hotel/Unity Square Road",
    slug: "construction-and-installation-of-street-light-along-stella-obasanjo-library",
    location: "Lokoja, Kogi State",
    category: "Electrical & Lighting",
    date: "Oct.2005",
    client: "Bulletin Construction Co. Ltd",
    description: [
      "Construction & Installation of Street Light Along major city roads in Lokoja[cite: 4].",
      "Client: Bulletin Construction Co. Ltd[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction & Installation of Street Light Along Stella Obasanjo Library cover" }
    ]
  },
  {
    id: 55,
    name: "Upgrade/Improvement of Fire Fighting System of Central",
    slug: "upgrade-improvement-of-fire-fighting-system-of-central",
    location: "Central Bank of Nigeria (CBN) Benin Branch",
    category: "Safety & Security",
    date: "Sept.2003",
    client: "Yaroson Partnership Ltd",
    description: [
      "Upgrade/Improvement of Fire Fighting System of Central Bank of Nigeria (CBN) Benin Branch[cite: 4].",
      "Client: Yaroson Partnership Ltd[cite: 4]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Upgrade/Improvement of Fire Fighting System of Central cover" }
    ]
  },
  {
    id: 56,
    name: "Supply & Installation of Air Conditioning Units",
    slug: "supply-and-installation-of-air-conditioning-units",
    location: "University Of Ilorin Teaching Hospital Kwara State",
    category: "HVAC Services",
    date: "Sept.2001",
    client: "University of Ilorin Teaching Hospital",
    description: [
      "Supply & Installation of Air Conditioning Units at University Of Ilorin Teaching Hospital[cite: 5].",
      "Client: University of Ilorin Teaching Hospital[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply & Installation of Air Conditioning Units cover" }
    ]
  },
  {
    id: 57,
    name: "External Power Supply And Distribution At Bayero University",
    slug: "external-power-supply-and-distribution-at-bayero-university",
    location: "Kano State",
    category: "Electrical Power",
    date: "Apr.2001",
    client: "Rabo Engineers",
    description: [
      "External Power Supply And Distribution At Bayero University, Kano State[cite: 5].",
      "Client: Rabo Engineers[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "External Power Supply And Distribution At Bayero University cover" }
    ]
  },
  {
    id: 58,
    name: "Laying of Electricity Power Cable To Admin. Block",
    slug: "laying-of-electricity-power-cable-to-admin-block",
    location: "Aminu Kano Teaching Hospital Kano",
    category: "Electrical Power",
    date: "Sept.2000",
    client: "Aminu Kano Teaching Hospital Kano",
    description: [
      "Laying of Electricity Power Cable To Admin. Block at Aminu Kano Teaching Hospital Kano[cite: 5].",
      "Client: Aminu Kano Teaching Hospital Kano[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Laying of Electricity Power Cable To Admin. Block cover" }
    ]
  },
  {
    id: 59,
    name: "Supply & Extension Of 200kva, 11kva Transformer To The Residence Of The Director Secretary's Dept. CBN Abuja",
    slug: "supply-and-extension-of-200kva-11kva-transformer-to-cbn-residence",
    location: "Abuja",
    category: "Electrical Power",
    date: "Feb.2000",
    client: "Central Bank Of Nigeria (CBN)",
    description: [
      "Supply & Extension Of 200kva, 11kva Transformer to the residence of the Director Secretary's Dept. CBN Abuja[cite: 5].",
      "Client: Central Bank Of Nigeria (CBN)[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply & Extension Of 200kva, 11kva Transformer cover" }
    ]
  },
  {
    id: 60,
    name: "Power Supply To General Air-Conditioner in Phase 2 Theatre",
    slug: "power-supply-to-general-air-conditioner-in-phase-2-theatre",
    location: "Aminu Kano Teaching Hospital Kano",
    category: "Electrical Power & HVAC",
    date: "Aug.2000",
    client: "Works Department Aminu Kano Teaching Hospital Kano",
    description: [
      "Power Supply To General Air-Conditioner in Phase 2 Theatre at Aminu Kano Teaching Hospital[cite: 5].",
      "Client: Works Department Aminu Kano Teaching Hospital Kano[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Power Supply To General Air-Conditioner in Phase 2 Theatre cover" }
    ]
  },
  {
    id: 61,
    name: "External Power Supply & Distribution At Bayero University Kano",
    slug: "external-power-supply-and-distribution-at-bayero-university-kano",
    location: "Kano",
    category: "Electrical Power",
    date: "Apr.2000",
    client: "RABO Engineers",
    description: [
      "External Power Supply & Distribution At Bayero University Kano[cite: 5].",
      "Client: RABO Engineers[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "External Power Supply & Distribution At Bayero University Kano cover" }
    ]
  },
  {
    id: 62,
    name: "External Electrification Of The Junior Staff Housing",
    slug: "external-electrification-of-the-junior-staff-housing",
    location: "Kano",
    category: "Electrical Power",
    date: "Aug.2000",
    client: "Aminu Kano Teaching Hospital Kano",
    description: [
      "External Electrification Of The Junior Staff Housing in Kano[cite: 5].",
      "Client: Aminu Kano Teaching Hospital Kano[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "External Electrification Of The Junior Staff Housing cover" }
    ]
  },
  {
    id: 63,
    name: "Electrical Installation & Sub-Station",
    slug: "electrical-installation-and-sub-station",
    location: "Ashaka Cement Building, Audu Bako Road Kano",
    category: "Electrical Installation",
    date: "Jul.2000",
    client: "Building Contracting Ltd, Bompia, Kano",
    description: [
      "Electrical Installation & Sub-Station at Ashaka Cement Building, Audu Bako Road Kano[cite: 5].",
      "Client: Building Contracting Ltd, Bompia, Kano[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrical Installation & Sub-Station cover" }
    ]
  },
  {
    id: 64,
    name: "Internal Electrification",
    slug: "internal-electrification-university-of-ilorin",
    location: "University of Ilorin",
    category: "Electrical Power",
    date: "May 1998",
    client: "Works",
    description: [
      "Internal Electrification project at University of Ilorin[cite: 5].",
      "Client: Works Department[cite: 5]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Internal Electrification cover" }
    ]
  },
  {
    id: 123,
    name: "Of Small Lecture Theatre Hall",
    slug: "of-small-lecture-theatre-hall",
    location: "Permanent Site Ilorin, Kwara State",
    category: "Building Construction",
    date: "May 1995",
    client: "Department University of Ilorin",
    description: [
      "Construction work of Small Lecture Theatre Hall at Permanent Site Ilorin, Kwara State[cite: 6].",
      "Client: Department University of Ilorin[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Of Small Lecture Theatre Hall cover" }
    ]
  },
  {
    id: 65,
    name: "Rural Electrification Of 2 Villages",
    slug: "rural-electrification-of-2-villages",
    location: "Wudi L.G.A Kano State",
    category: "Electrical Power",
    date: "May 1995",
    client: "Kano State Government",
    description: [
      "Rural Electrification Of 2 Villages in Wudi L.G.A Kano State[cite: 6].",
      "Client: Kano State Government[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Rural Electrification Of 2 Villages cover" }
    ]
  },
  {
    id: 66,
    name: "Supply & Installation Of 3 Phase Meter Service Cable & Meter Board",
    slug: "supply-and-installation-of-3-phase-meter-service-cable-and-meter-board",
    location: "Ikeja",
    category: "Electrical Installation",
    date: "Nov.1994",
    client: "First Bank",
    description: [
      "Supply & Installation Of 3 Phase Meter Service Cable & Meter Board in Ikeja[cite: 6].",
      "Client: First Bank[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply & Installation Of 3 Phase Meter Service Cable & Meter Board cover" }
    ]
  },
  {
    id: 67,
    name: "Electrical Installation Service (Building)",
    slug: "electrical-installation-service-building",
    location: "Kano",
    category: "Electrical Installation",
    date: "Nov.1992",
    client: "Environmental Development Consultant",
    description: [
      "Electrical Installation Service (Building) in Kano[cite: 6].",
      "Client: Environmental Development Consultant[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrical Installation Service (Building) cover" }
    ]
  },
  {
    id: 68,
    name: "NUC Block Of Flats Garki Abuja Electrical Installation",
    slug: "nuc-block-of-flats-garki-abuja-electrical-installation",
    location: "Abuja",
    category: "Electrical Installation",
    date: "Jan.1992",
    client: "National Universities Commission",
    description: [
      "NUC Block Of Flats Garki Abuja Electrical Installation[cite: 6].",
      "Client: National Universities Commission[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "NUC Block Of Flats Garki Abuja Electrical Installation cover" }
    ]
  },
  {
    id: 69,
    name: "Electrical & Plumbing Works",
    slug: "electrical-and-plumbing-works",
    location: "Kano",
    category: "Electrical & Plumbing",
    date: "Jun.1991",
    client: "Environmental Development Consultant",
    description: [
      "Electrical & Plumbing Works executed in Kano[cite: 6].",
      "Client: Environmental Development Consultant[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrical & Plumbing Works cover" }
    ]
  },
  {
    id: 70,
    name: "Internal Electrical Installation Services",
    slug: "internal-electrical-installation-services",
    location: "Aminu Kano Teaching Hospital, Kano",
    category: "Electrical Installation",
    date: "Jul.1991",
    client: "Special Presidential Task Force 1",
    description: [
      "Internal Electrical Installation Services at Aminu Kano Teaching Hospital, Kano[cite: 6].",
      "Client: Special Presidential Task Force 1[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Internal Electrical Installation Services cover" }
    ]
  },
  {
    id: 71,
    name: "Proposed Redevelopment Of The Site At 595 Club Road Kano",
    slug: "proposed-redevelopment-of-the-site-at-595-club-road-kano",
    location: "Kano",
    category: "Redevelopment",
    date: "Nov.1989",
    client: "Kay-Tee Associates",
    description: [
      "Proposed Redevelopment Of The Site At 595 Club Road Kano[cite: 6].",
      "Client: Kay-Tee Associates[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Proposed Redevelopment Of The Site At 595 Club Road Kano cover" }
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
      "Drilling & Installation Of Hand Pump Borehole under MDGS-CGS Projects[cite: 6].",
      "Client: Kogi State MDGs[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Drilling & Installation Of Hand Pump Borehole cover" }
    ]
  },
  {
    id: 73,
    name: "2009 MDGs Quick Wins Project & Program",
    slug: "2009-mdgs-quick-wins-project-and-program",
    location: "Kogi State",
    category: "Development Program",
    date: "Mar.2010",
    client: "State House Abuja",
    description: [
      "2009 MDGs Quick Wins Project & Program in Kogi State[cite: 6].",
      "Client: State House Abuja[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "2009 MDGs Quick Wins Project & Program cover" }
    ]
  },
  {
    id: 74,
    name: "Contract For Street Lighting Of Stella Obasanjo /Govt.",
    slug: "contract-for-street-lighting-of-stella-obasanjo-govt",
    location: "Lokoja, Kogi State",
    category: "Electrical & Lighting",
    date: "Oct.2005",
    client: "Bulletin Construction Company Nig.",
    description: [
      "Contract For Street Lighting Of Stella Obasanjo /Govt in Lokoja, Kogi State[cite: 6].",
      "Client: Bulletin Construction Company Nig[cite: 6]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Contract For Street Lighting Of Stella Obasanjo /Govt. cover" }
    ]
  },
  {
    id: 75,
    name: "Installation Of New 250kva Perkin Generator, Servicing The Existing 165kva Perkin Generator, Mechanical & Electrical Work in The Water Works",
    slug: "installation-of-new-250kva-perkin-generator-water-works",
    location: "Idah Water Works",
    category: "Mechanical & Electrical",
    date: "Sept.2003",
    client: "Kogi State Ministry Of Water Resources & Rural Development",
    description: [
      "Installation Of New 250kva Perkin Generator, Servicing The Existing 165kva Perkin Generator, Mechanical & Electrical Work in The Water Works[cite: 7].",
      "Client: Kogi State Ministry Of Water Resources & Rural Development[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Installation Of New 250kva Perkin Generator cover" }
    ]
  },
  {
    id: 76,
    name: "Upgrade/Improvement Of Fire Fighting System In CBN Benin",
    slug: "upgrade-improvement-of-fire-fighting-system-in-cbn-benin",
    location: "Benin",
    category: "Safety & Security",
    date: "Sept.2003",
    client: "Messrs.' Unecon Associates",
    description: [
      "Upgrade/Improvement Of Fire Fighting System In CBN Benin[cite: 7].",
      "Client: Messrs.' Unecon Associates[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Upgrade/Improvement Of Fire Fighting System In CBN Benin cover" }
    ]
  },
  {
    id: 77,
    name: "Refurbishing Of The 25kva Generator & Control Panel",
    slug: "refurbishing-of-the-25kva-generator-and-control-panel",
    location: "Ekuku Waters Kogi State",
    category: "Mechanical & Electrical",
    date: "Aug.2003",
    client: "Kogi State Ministry Of Water Resources",
    description: [
      "Refurbishing Of The 25kva Generator & Control Panel in Ekuku Waters Kogi State[cite: 7].",
      "Client: Kogi State Ministry Of Water Resources[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Refurbishing Of The 25kva Generator & Control Panel cover" }
    ]
  },
  {
    id: 78,
    name: "General Renovation Of Intermediate Staff Quarters, Block D25, Flat 196, I&J Estate II.",
    slug: "general-renovation-of-intermediate-staff-quarters",
    location: "Garki, Abuja",
    category: "Renovation",
    date: "Aug.2003",
    client: "Assistant Director Of Maintenance (Mech)",
    description: [
      "General Renovation Of Intermediate Staff Quarters, Block D25, Flat 196, I&J Estate II in Garki, Abuja[cite: 7].",
      "Client: Assistant Director Of Maintenance (Mech)[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "General Renovation Of Intermediate Staff Quarters cover" }
    ]
  },
  {
    id: 79,
    name: "Installation Of Generator Set At General Hospital",
    slug: "installation-of-generator-set-at-general-hospital",
    location: "Idah, Kogi State",
    category: "Mechanical & Electrical",
    date: "Aug.2003",
    client: "Kogi State Ministry Of Health",
    description: [
      "Installation Of Generator Set At General Hospital in Idah, Kogi State[cite: 7].",
      "Client: Kogi State Ministry Of Health[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Installation Of Generator Set At General Hospital cover" }
    ]
  },
  {
    id: 80,
    name: "Standby contractor For Outsourced Mechanical Engineering Work",
    slug: "standby-contractor-for-outsourced-mechanical-engineering-work",
    location: "Garki, Abuja",
    category: "Mechanical Engineering",
    date: "Apr.2003",
    client: "CBN",
    description: [
      "Standby contractor For Outsourced Mechanical Engineering Work in Garki, Abuja[cite: 7].",
      "Client: CBN[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Standby contractor For Outsourced Mechanical Engineering Work cover" }
    ]
  },
  {
    id: 81,
    name: "Water Works",
    slug: "water-works-idah",
    location: "Idah",
    category: "Water Engineering",
    date: "Feb.2003",
    client: "Ministry Of Water Resources & Rural Development",
    description: [
      "Water Works project in Idah[cite: 7].",
      "Client: Ministry Of Water Resources & Rural Development[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Water Works cover" }
    ]
  },
  {
    id: 82,
    name: "Construction Of Generator House",
    slug: "construction-of-generator-house-garki-abuja",
    location: "Garki, Abuja",
    category: "Building Construction",
    date: "Jul.2001",
    client: "Notional Commission For Museums And Monuments",
    description: [
      "Construction Of Generator House in Garki, Abuja[cite: 7].",
      "Client: Notional Commission For Museums And Monuments[cite: 7]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction Of Generator House cover" }
    ]
  },
  {
    id: 83,
    name: "Supply & Sewing Of 54 Nos Complete NHIS Drivers Uniform",
    slug: "supply-and-sewing-of-54-nos-complete-nhis-drivers-uniform",
    location: "Abuja",
    category: "Tailoring & Supply",
    date: "Jun.2001",
    client: "National Health Insurance Scheme",
    description: [
      "Supply & Sewing Of 54 Nos Complete NHIS Drivers Uniform in Abuja[cite: 8].",
      "Client: National Health Insurance Scheme[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Supply & Sewing Of 54 Nos Complete NHIS Drivers Uniform cover" }
    ]
  },
  {
    id: 84,
    name: "External Mechanical & Plumbing Services Installation At CBN Estate",
    slug: "external-mechanical-and-plumbing-services-installation-at-cbn-estate",
    location: "Central Bank Of Nigeria (CBN) Abuja",
    category: "Mechanical & Plumbing",
    date: "Jun.2001",
    client: "Yaroson & Partners Consultant, Kaduna",
    description: [
      "External Mechanical & Plumbing Services Installation At CBN Estate, Abuja[cite: 8].",
      "Client: Yaroson & Partners Consultant, Kaduna[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "External Mechanical & Plumbing Services Installation At CBN Estate cover" }
    ]
  },
  {
    id: 85,
    name: "Inter Connection Of Stand By generator Set Electricity Power Supply",
    slug: "inter-connection-of-stand-by-generator-set-electricity-power-supply",
    location: "Staff Housing Estate, Aminu Kano Teaching Hospital, Kano",
    category: "Electrical Power",
    date: "Jun.2001",
    client: "Works Department, Aminu Kano Teaching Hospital Kano",
    description: [
      "Inter Connection Of Stand By generator Set Electricity Power Supply at Staff Housing Estate, Aminu Kano Teaching Hospital, Kano[cite: 8].",
      "Client: Works Department, Aminu Kano Teaching Hospital Kano[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Inter Connection Of Stand By generator Set cover" }
    ]
  },
  {
    id: 86,
    name: "Water SUPPLY Connections To CBN I & Junior staff Housing Estate",
    slug: "water-supply-connections-to-cbn-i-and-junior-staff-housing-estate",
    location: "CBN Garki, Abuja",
    category: "Water Engineering",
    date: "Jun.1999",
    client: "Integrated Development Consultant Ltd Kaduna",
    description: [
      "Water SUPPLY Connections To CBN I & Junior staff Housing Estate in CBN Garki, Abuja[cite: 8].",
      "Client: Integrated Development Consultant Ltd Kaduna[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Water SUPPLY Connections To CBN I & Junior staff Housing Estate cover" }
    ]
  },
  {
    id: 87,
    name: "Construction Of septic Tank & Soak Away Pits",
    slug: "construction-of-septic-tank-and-soak-away-pits",
    location: "CBN Garki Abuja",
    category: "Civil Construction",
    date: "Jun.1999",
    client: "A.Awe Engineering Consultants, Ibadan",
    description: [
      "Construction Of septic Tank & Soak Away Pits in CBN Garki Abuja[cite: 8].",
      "Client: A.Awe Engineering Consultants, Ibadan[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction Of septic Tank & Soak Away Pits cover" }
    ]
  },
  {
    id: 88,
    name: "Installation & Commissioning Of External Plumbing Services Equipment",
    slug: "installation-and-commissioning-of-external-plumbing-services-equipment",
    location: "CBN Garki Abuja",
    category: "Plumbing Services",
    date: "Dec.1998",
    client: "Yeroson Partnership",
    description: [
      "Installation & Commissioning Of External Plumbing Services Equipment in CBN Garki Abuja[cite: 8].",
      "Client: Yeroson Partnership[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Installation & Commissioning Of External Plumbing Services Equipment cover" }
    ]
  },
  {
    id: 89,
    name: "Mechanical Installation Sub Contractor In Respect Of Proposed Flat At Plots 1307 & 1308 Wuse II Abuja",
    slug: "mechanical-installation-sub-contractor-wuse-ii-abuja",
    location: "Abuja",
    category: "Mechanical Installation",
    date: "Feb.1998",
    client: "Prime Consultants Ltd",
    description: [
      "Mechanical Installation Sub Contractor In Respect Of Proposed Flat At Plots 1307 & 1308 Wuse II Abuja[cite: 8].",
      "Client: Prime Consultants Ltd[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Mechanical Installation Sub Contractor cover" }
    ]
  },
  {
    id: 90,
    name: "Repairs & Services Of Office Equipment",
    slug: "repairs-and-services-of-office-equipment",
    location: "Abuja",
    category: "Maintenance Services",
    date: "Aug.1997",
    client: "National Auto-Motive Council",
    description: [
      "Repairs & Services Of Office Equipment in Abuja[cite: 8].",
      "Client: National Auto-Motive Council[cite: 8]."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Repairs & Services Of Office Equipment cover" }
    ]
  }
];