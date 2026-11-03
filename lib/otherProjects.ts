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

export const otherProjects: Project[] = [
{
  id: 5,
  name: "Contract For Conversion Of School Of Maritime Transport Studies Lecture Hall To A Mini Auditorium At The Maritime Academy Of Nigeria",
  slug: "contract-for-conversion-of-school-of-maritime-transport-studies-lecture-hall-to-a-mini-auditorium",
  location: "Oron, Akwa Ibom State",
  category: "Renovation & Conversion",
  date: "Nov.2020",
  client: "Maritime Academy Of Nigeria",
  description: [
    "Contract For Conversion Of School Of Maritime Transport Studies Lecture Hall To A Mini Auditorium At The Maritime Academy Of Nigeria.",
    "Conducted for the Maritime Academy Of Nigeria in Oron, Akwa Ibom State."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Contract For Conversion Of School Of Maritime Transport Studies Lecture Hall To A Mini Auditorium At The Maritime Academy Of Nigeria cover" }
  ]
},
{
  id: 6, //this
  name: "Construction Of Perimeter  Wall Fence Of National Biotechnology Development Agency Headquarters",
  slug: "construction-of-perimeter-wall-fence-of-nation-biotechnology-development-agency-headquarters",
  location: "Lugbe, Abuja",
  category: "Construction",
  date: "Dec.2016",
  client: "National Biotechnology Development Agency (NABDA)",
  description: [
    "Construction Of Perimeter  Wall Fence Of Nation Biotechnology Development Agency Headquarters in Lugbe Abuja.",
    "Commissioned by the Nation Biotechnology Development Agency (NABDA)."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction Of Perimeter Block Wall Fence Of Nation Biotechnology Development Agency Headquarters cover" }
  ]
},
{
  id: 7,
  name: "Construction Of Wardrobes And Kitchen cabinet At Mandate Service Quarters Living Faith Church, Canaan Land Ota",
  slug: "construction-of-wardrobes-and-kitchen-cabinet-at-mandate-service-quarters",
  location: "Ota, Lagos State",
  category: "Carpentry & Joinery",
  date: "Mar.2016",
  client: "Living faith World Outreach Centre (faith Tabernacle)",
  description: [
    "Construction Of Wardrobes And Kitchen cabinet At Mandate Service Quarters, Canaan Land, Ota Lagos.",
    "Client: Living faith World Outreach Centre (faith Tabernacle)."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction Of Wardrobes And Kitchen cabinet At Mandate Service Quarters, Canaan Land, Ota Lagos cover" }
  ]
},
{
  id: 8,
  name: "Construction of 200 capacity Living Faith Church auditorium ",
  slug: "construction-of-200-capacity-church-auditorium",
  location: "Ucha, Benue State",
  category: "Building Construction",
  date: "2016",
  client: "Living Faith Church",
  description: [
    "Construction of 200 capacity church auditorium located in Ucha Benue State.",
    "Executed for Living Faith Church."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction of 200 capacity church auditorium, cover" }
  ]
},
{
    id: 49,
    name: "Construction Of Primary Healthcare (PHC) Block Ape Community",
    slug: "construction-of-phc-block",
    location: "Bunu District, Kogi State",
    category: "Healthcare Construction",
    date: "Oct.2009",
    client: "Kabba-Bunu Local Government",
    description: [
      "Construction Of PHC Block in Bunu District, Kogi State.",
      "Client: Kabba-Bunu Local Government."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Construction Of PHC Block cover" }
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
      "Electrification of Permanent Secretary Residential Quarters along Ganaja Road Lokoja.",
      "Client: Kogi State Ministry of Works & Housing."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "Electrification of Permanent Secretary Residential Quarters cover" }
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
    "Construction Of Hostel Block At GSS Gawu in Garki, Abuja.",
    "Client: FCT-Secondary Education Board."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction Of Hostel Block At GSS Gawu cover" }
  ]
},
{
    id: 62,
    name: "External Electrification Supply to The Junior Staff Quarters",
    slug: "external-electrification-of-the-junior-staff-Quarters",
    location: "Aminu Kano Teaching Hospital Kano.",
    category: "Electrical Power",
    date: "Aug.2000",
    client: "Aminu Kano Teaching Hospital Kano",
    description: [
      "External Electrification Of The Junior Staff Quarters in Kano.",
      "Client: Aminu Kano Teaching Hospital Kano."
    ],
    images: [
      { src: "https://via.placeholder.com/150", alt: "External Electrification Of The Junior Staff Housing cover" }
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
      "Supply & Installation of Air Conditioning Units at University Of Ilorin Teaching Hospital.",
      "Client: University of Ilorin Teaching Hospital."
    ],
    images: [
      { src: "", alt: "Supply & Installation of Air Conditioning Units cover" }
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
    "Contract For Part Fencing Of Bio-Resource Development Center At Owode, managed from Wuse, Abuja.",
    "Client: Nation Biotechnology Development Agency (NABDA)."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Contract For Part Fencing Of Bio-Resource Development Center At Owode cover" }
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
    "Supply Of 32 & 21 Flick Design Televisions to Radio House Abuja.",
    "Client: Voice Of Nigeria Broadcasting House Abuja."
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
    "Supply Of Free To Air Satellite for the Nigeria labor Congress.",
    "Client: KOCCIMA Investment."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Supply Of Free To Air Satellite cover" }
  ]
},
{
  id: 17,
  name: "Survey Of Telecommunication Tower (Mass) For National Commuincation Commission (NCC) North-West Zone Area Of Nigeria",
  slug: "survey-of-telecommunication-tower-mass",
  location: "North West Zone Nigeria",
  category: "Surveying Services",
  date: "Apr.2006",
  client: "Nigerian Communication Commission ABJ",
  description: [
    "Survey Of Telecommunication Tower (Mass) across the North West Zone Nigeria.",
    "Client: Nigerian Communication Commission ABJ."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Survey Of Telecommunication Tower (Mass) cover" }
  ]
},
{
  id: 18,
  name: "Furnishing Of The National Health Insurance Scheme (NHIS) Zonal Manager's Residence",
  slug: "furnishing-of-the-nhis-zonal-managers-residence-kano",
  location: "Kano, Kano State",
  category: "Interior Furnishing",
  date: "May.1999",
  client: "National Health Insurance Scheme Abuja",
  description: [
    "Furnishing Of The NHIS Zonal Manager's Residence in Kano, Kano State.",
    "Client: National Health Insurance Scheme Abuja."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
  ]
},
{
  id: 19,
  name: "Furnishing Of The National Health Insurance Scheme (NHIS) Zonal Manager's Residence,Lagos State",
  slug: "furnishing-of-the-Nhis-zonal-managers-residence-lagos",
  location: "Ikeja, Lagos State",
  category: "Interior Furnishing",
  date: "May.1999",
  client: "National Health Insurance Scheme Abuja",
  description: [
    "Furnishing Of The NHIS Zonal Manager's Residence in Lagos, Lagos State.",
    "Client: National Health Insurance Scheme Abuja."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
  ]
},
{
  id: 20,
  name: "Furnishing Of The National Health Insurance Scheme (NHIS) Zonal Manager's Residence, Enugu State",
  slug: "furnishing-of-the-nhis-zonal-managers-residence-enugu",
  location: "Enugu, Enugu State",
  category: "Interior Furnishing",
  date: "May.1999",
  client: "National Health Insurance Scheme Abuja",
  description: [
    "Furnishing Of The NHIS Zonal Manager's Residence in Enugu, Enugu State.",
    "Client: National Health Insurance Scheme Abuja."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
  ]
},
{
  id: 21,
  name: "Furnishing Of The National Health Insurance Scheme (NHIS) Zonal Manager's Residence,River State",
  slug: "furnishing-of-the-nhis-zonal-managers-residence-port-harcourt",
  location: "Port-Harcourt, River State",
  category: "Interior Furnishing",
  date: "May.1999",
  client: "National Health Insurance Scheme Abuja",
  description: [
    "Furnishing Of The NHIS Zonal Manager's Residence in Port-Harcourt, River State.",
    "Client: National Health Insurance Scheme Abuja."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Furnishing Of The NHIS Zonal Manager's Residence cover" }
  ]
},

{
  id: 26,
  name: "Construction of Hostel block",
  slug: "construction-of-hostel-block",
  location: "G.S.S Gawu-Abuja",
  category: "Building Construction",
  date: "Mar. 2012",
  client: "FCT-Secondary Education board Abuja",
  description: [
    "Construction of hotel block at G.S.S Gawu-Abuja.",
    "Client: FCT-Secondary Education board Abuja."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction of hotel block cover" }
  ]
},

{
  id: 28,
  name: "Fencing of Biotech Development Center",
  slug: "fencing-of-bio-tech-development-center",
  location: "Owode, Ogun State",
  category: "Construction",
  date: "July.2010",
  client: "National Biotechnology Development Agency, Abuja.",
  description: [
    "Fencing of Bio-Resources Development Center in Owode, Ogun State.",
    "Client: National Biotechnology Development Agency, Abuja."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Fencing of Bio-Resources Development Center cover" }
  ]
},
{
  id: 29,
  name: "Construction of Primary Health Care Block",
  slug: "construction-of-primary-health-care-block",
  location: "Ape Bunu in Kabba LGA, Kogi State.",
  category: "Healthcare Construction",
  date: "Oct. 2009",
  client: "Kabba/Bunu Local Govrnmnet Ministry of Works",
  description: [
    "Construction of Primary Health Care Block in Ape Bunu, Kabba LGA, Kogi State.",
    "Client: Kabba/Bunu Local Government Ministry of Works."
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
    "Upgrade & Rehabilitation of primary health Centers in Ejiba, Yagba West LGA Kogi State.",
    "Client: Kogi State MDGs."
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
    "Construction of legislative Residential Quarters along Ganaja Road, Lokoja Kogi State.",
    "Client: Kogi State Ministry of Works & Housing."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction of legislative Residential Quarters cover" }
  ]
},
{
  id: 32,
  name: "General Renovation of Intermediate Staff Quarters for Central Bank Of Nigeria",
  slug: "general-renovation-of-intermediate-staff-quarters",
  location: "Abuja",
  category: "Renovation",
  date: "Aug. 2003",
  client: "Central Bank of Abuja (CBN)",
  description: [
    "General Renovation of Intermediate staff Quarters in Abuja.",
    "Client: Central Bank of Abuja (CBN)."
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
    "Construction of Commissioner Residential Quarters along Gaaja Road Lokoja, Kogi State.",
    "Client: Kogi State Ministry of Work & Housing."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction of Commissioner Residential Quarters cover" }
  ]
},
{
  id: 34,
  name: "Construction of Generator House Museum Office ",
  slug: "construction-of-generator-house",
  location: "Ibadan ,Oyo State",
  category: "Building Construction",
  date: "Jul.2001",
  client: "National Commission for Museums & Monuments",
  description: [
    "Construction of Generator House in Abuja.",
    "Client: National Commission for Museums & Monuments."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction of Generator House cover" }
  ]
},

{
  id: 37,
  name: "Construction of 2 Bedroom Bungalows at The Lokongoma Phase III Lokoja",
  slug: "construction-of-2-bedroom-bungalows-at-the-lokongoma-phase-3-lokoja",
  location: "Lokoja",
  category: "Residential Construction",
  date: "Oct. 1998",
  client: "Ministry of Works, Transport & Housing",
  description: [
    "Construction of 2 Bedroom Bungalows at The Lokongoma Phase III Lokoja.",
    "Client: Ministry of Works, Transport & Housing."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction of 2 Bedroom Bungalows at The Lokongoma Phase III Lokoja cover" }
  ]
},

{
  id: 41,
  name: "Electrical Installation For Large Lecture Theatre Hall (Faculty of Science) University Of Ilorin",
  slug: "large-lecture-theatre-faculty-of-science",
  location: "Iliorin",
  category: "Educational Building",
  date: "Jul.1996",
  client: "University of Ilorin, Ilorin",
  description: [
    "Large Lecture Theatre (Faculty of Science) in Iliorin",
    "Client: University of Ilorin, Ilorin"
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Large Lecture Theatre (Faculty of Science) cover" }
  ]
},

{
  id: 44,
  name: "Electrification Supply to Ochaja Secondary School/Community",
  slug: "electrification-of-ochaja-secondary-school-community",
  location: "Dekina L.G.A Kogi State",
  category: "Electrical Power",
  date: "Aug.2011",
  client: "Kogi State Ministry of Rural Development",
  description: [
    "Electrification of Ochaja Secondary School/Community in Dekina L.G.A Kogi State",
    "Client: Kogi State Ministry of Rural Development"
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Electrification of Ochaja Secondary School/Community cover" }
  ]
},
{
  id: 45,
  name: "Rural Electrification of Icheke-Ate Community",
  slug: "electrification-of-icheke-ate-community",
  location: "Omala L.G.A Kogi State",
  category: "Electrical Power",
  date: "Aug.2011",
  client: "Kogi State Ministry of Rural Development",
  description: [
    "Electrification of icheke-Ate Community in Omala L.G.A Kogi State",
    "Client: Kogi State Ministry of Rural Development"
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Electrification of icheke-Ate Community cover" }
  ]
},
{
  id: 46,
  name: "Maintenance of 33kv Overhead Lines",
  slug: "maintenance-of-33kv-overhead-lines",
  location: "Katanpe to Gwagwalada Abuja",
  category: "Electrical Power",
  date: "Mar.2010",
  client: "Abuja Electricity Distribution Plc.",
  description: [
    "Maintenance of 33kva Overhead Lines in Katanpe to Gwagwalada Abuja",
    "Client: Abuja Electricity Distribution Plc."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Maintenance of 33kva Overhead Lines cover" }
  ]
},
{
  id: 47,
  name: "Solar Base Rural Installation",
  slug: "solar-bases-rural",
  location: "Sasaro & Egbegiri",
  category: "Energy",
  date: "Sept.2009",
  client: "Energy",
  description: [
    "Solar Bases Rural Installation in Sasaro & Egbegiri",
    "Client: Energy sector"
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Solar Bases Rural cover" }
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
    "Relocation of High Tension (HT) Poles Along Lokoja Township Roads.",
    "Client: Kogi State Ministry of Works & Housing."
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
    "Construction & Installation of Street Light Along Obasanjo Square.",
    "Client: Zerock Construction Company Ltd."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction & Installation of Street Light Along Obasanjo Square cover" }
  ]
},

{
  id: 54,
  name: "Construction & Installation of Street Lights Along Stella Obasanjo Library/Government House/Kogi Hotel/Unity Square Road",
  slug: "construction-and-installation-of-street-lights-along-stella-obasanjo-library",
  location: "Lokoja, Kogi State",
  category: "Electrical & Lighting",
  date: "Oct.2005",
  client: "Bulletin Construction Co. Ltd",
  description: [
    "Construction & Installation of Street Lights Along major city roads in Lokoja.",
    "Client: Bulletin Construction Co. Ltd."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction & Installation of Street Light Along Stella Obasanjo Library cover" }
  ]
},
{
  id: 55,
  name: "Upgrade/Improvement of Fire Fighting System",
  slug: "upgrade-improvement-of-fire-fighting-system",
  location: "Central Bank of Nigeria (CBN) Benin Branch",
  category: "Safety & Security",
  date: "Sept.2003",
  client: "Yaroson Partnership Ltd",
  description: [
    "Upgrade/Improvement of Fire Fighting System of Central Bank of Nigeria (CBN) Benin Branch.",
    "Client: Yaroson Partnership Ltd."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Upgrade/Improvement of Fire Fighting System of Central cover" }
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
    "External Power Supply And Distribution At Bayero University, Kano State.",
    "Client: Rabo Engineers."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "External Power Supply And Distribution At Bayero University cover" }
  ]
},
{
  id: 58,
  name: "Laying of Electricity Power Cable To Admin Block",
  slug: "laying-of-electricity-power-cable-to-admin-block",
  location: "Aminu Kano Teaching Hospital Kano",
  category: "Electrical Power",
  date: "Sept.2000",
  client: "Aminu Kano Teaching Hospital Kano",
  description: [
    "Laying of Electricity Power Cable To Admin. Block at Aminu Kano Teaching Hospital Kano.",
    "Client: Aminu Kano Teaching Hospital Kano."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Laying of Electricity Power Cable To Admin. Block cover" }
  ]
},

{
  id: 60,
  name: "Power Supply To The Theatre",
  slug: "power-supply-to-theatre",
  location: "Aminu Kano Teaching Hospital Kano",
  category: "Electrical Power & HVAC",
  date: "Aug.2000",
  client: "Works Department Aminu Kano Teaching Hospital Kano",
  description: [
    "Power Supply the Theatre at Aminu Kano Teaching Hospital.",
    "Client: Works Department Aminu Kano Teaching Hospital Kano."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Power Supply To General Air-Conditioner in Phase 2 Theatre cover" }
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
    "Internal Electrification project at University of Ilorin.",
    "Client: Works Department."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Internal Electrification cover" }
  ]
},
{
  id: 123,
  name: "Electrical Installation for Small Lecture Theatre Hall",
  slug: "Electrical Installation-small-lecture-theatre-hall",
  location: "Permanent Site Ilorin, Kwara State",
  category: "Building Construction",
  date: "May 1995",
  client: "Department University of Ilorin",
  description: [
    "Electrical Installation for Small Lecture Theatre Hall at Permanent Site Ilorin, Kwara State.",
    "Client: Department University of Ilorin."
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
    "Rural Electrification Of 2 Villages in Wudi L.G.A Kano State.",
    "Client: Kano State Government."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Rural Electrification Of 2 Villages cover" }
  ]
},

{
  id: 69, //edit
  name: "Electrical & Plumbing Works",
  slug: "electrical-and-plumbing-works",
  location: "Kano",
  category: "Electrical & Plumbing",
  date: "Jun.1991",
  client: "Environmental Development Consultant",
  description: [
    "Electrical & Plumbing Works executed in Kano.",
    "Client: Environmental Development Consultant."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Electrical & Plumbing Works cover" }
  ]
},
{
  id: 70,
  name: "Internal Electrical Installation Services for Wards",
  slug: "internal-electrical-installation-services",
  location: "Aminu Kano Teaching Hospital, Kano",
  category: "Electrical Installation",
  date: "Jul.1991",
  client: "Special Presidential Task Force 1",
  description: [
    "Internal Electrical Installation Services at Aminu Kano Teaching Hospital, Kano.",
    "Client: Special Presidential Task Force 1."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Internal Electrical Installation Services cover" }
  ]
},

{
  id: 74,
  name: "Contract For Street Lights from  Stella Obasanjo to Government House.",
  slug: "contract-for-street-lights-of-stella-obasanjo-govt",
  location: "Lokoja, Kogi State",
  category: "Electrical & Lighting",
  date: "Oct.2005",
  client: "Bulletin Construction Company Nig.",
  description: [
    "Contract For Street Lights from  Stella Obasanjo to Government House in Lokoja, Kogi State.",
    "Client: Bulletin Construction Company Nig."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Contract For Street Lighting Of Stella Obasanjo /Govt. cover" }
  ]
},
{
  id: 75,
  name: "Installation Of New 250kva Perkin Generator.",
  slug: "installation-of-new-250kva-perkin-generator-water-works",
  location: "Idah Water Works",
  category: "Mechanical & Electrical",
  date: "Sept.2003",
  client: "Kogi State Ministry Of Water Resources & Rural Development",
  description: [
    "Installation Of New 250kva Perkin Generator, Servicing The Existing 165kva Perkin Generator, Mechanical & Electrical Work in The Water Works.",
    "Client: Kogi State Ministry Of Water Resources & Rural Development."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Installation Of New 250kva Perkin Generator cover" }
  ]
},
{
  id: 77,
  name: "Refurbishing Of The 25kva Generator & Control Panel",
  slug: "refurbishing-of-the-25kva-generator-and-control-panel",
  location: "Ekuku Waters Works Okene, Kogi State",
  category: "Mechanical & Electrical",
  date: "Aug.2003",
  client: "Kogi State Ministry Of Water Resources",
  description: [
    "Refurbishing Of The 25kva Generator & Control Panel in Ekuku Waters Works Okene, Kogi State.",
    "Client: Kogi State Ministry Of Water Resources."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Refurbishing Of The 25kva Generator & Control Panel cover" }
  ]
},
{
  id: 78,
  name: "Mechanical Installation Of Intermediate Staff Quarters for I&J Estate II.",
  slug: "general-renovation-of-intermediate-staff-quarters",
  location: "Durumi, Abuja",
  category: "Mechanical & Electrical",
  date: "Aug.2003",
  client: "Assistant Director Of Maintenance (Mech)",
  description: [
    "General Renovation Of Intermediate Staff Quarters, Block D25, Flat 196, I&J Estate II in Garki, Abuja.",
    "Client: Assistant Director Of Maintenance (Mech)."
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
    "Installation Of Generator Set At General Hospital in Idah, Kogi State.",
    "Client: Kogi State Ministry Of Health."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Installation Of Generator Set At General Hospital cover" }
  ]
},
{
  id: 85,
  name: "Inter Connection Of StandBy generator Set/Electricity Power Supply",
  slug: "inter-connection-of-stand-by-generator-set-electricity-power-supply",
  location: "Aminu Kano Teaching Hospital, Kano",
  category: "Electrical Power",
  date: "Jun.2001",
  client: "Works Department, Aminu Kano Teaching Hospital Kano",
  description: [
    "Inter Connection Of Stand By generator Set/ Electricity Power Supply at Staff Housing Estate, Aminu Kano Teaching Hospital, Kano.",
    "Client: Works Department, Aminu Kano Teaching Hospital Kano."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Inter Connection Of Stand By generator Set cover" }
  ]
},
{
  id: 86,
  name: "External Water Supply Connections To I&J  staff Housing Estate CBN",
  slug: "water-supply-connections-to-cbn-i-and-junior-staff-housing-estate",
  location: "CBN Garki, Abuja",
  category: "Water Engineering",
  date: "Jun.1999",
  client: "Integrated Development Consultant Ltd Kaduna",
  description: [
    "Water SUPPLY Connections To  I & J Housing Estate in CBN Garki, Abuja.",
    "Client: Integrated Development Consultant Ltd Kaduna."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Water SUPPLY Connections To CBN I & Junior staff Housing Estate cover" }
  ]
},
{
  id: 87,
  name: "Construction Of Septic Tank & Soak Away Pits for I&J Housing Estate",
  slug: "construction-of-septic-tank-and-soak-away-pits",
  location: "CBN Garki Abuja",
  category: "Civil Construction",
  date: "Jun.1999",
  client: "A.Awe Engineering Consultants, Ibadan",
  description: [
    "Construction Of septic Tank & Soak Away Pits in CBN Garki Abuja.",
    "Client: A.Awe Engineering Consultants, Ibadan."
  ],
  images: [
    { src: "https://via.placeholder.com/150", alt: "Construction Of septic Tank & Soak Away Pits cover" }
  ]
},
]
