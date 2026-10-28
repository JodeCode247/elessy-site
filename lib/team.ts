export type Executive = {
  slug: string;          // used in the URL: /team/<slug>
  name: string;
  role: string;
  photo?: string;        // e.g. "/images/team/jane-doe.jpg" (put files in public/images/team)
  bio: string[];         // one string per paragraph
  highlights?: string[]; // qualifications or key experience
  email?: string;
  phone?: string;
  linkedin?: string;     // full URL
};

// PLACEHOLDERS: replace names, roles, bios and photos with the real executives.
export const executives: Executive[] = [
  { slug: "managing-director",
    name: "Chief (AMB) Joe Elebiyo", 
    role: "Managing Director/CEO", 
    bio: ["Chief Joe Elebiyo studied sociology at the University of Abuja. A seasoned professional with a unique touch of experience, he has handled several projects in Nigeria. He was the Board Chairman of VITA TOK Ltd Company (American based), Chairman of KOCCIMA Investment Nig. Ltd, Patron of Cassava Shake Holder Association of Nigeria Abuja, and the MD/CEO of Elessy Nig. Ltd, Board Member Cocoa Researcher Institute Ibadan (CRIN), AG Board Chairman Upper Basin Authority Yola Adamawa State, and President Kogi State Chamber of Commerce Industry and Agriculture."],
    photo:"/images/team/elebiyo.jpg", 
    highlights: [
      "Ph.D. Leadership and Development Studies",
      "M.Sc. Peace Studies, Conflicts and Resolution",
      "B.Sc. Sociology",
      "National Diploma in Business Administration","Certificate in Local Government Management",
      "Certificate in Small and Medium Scale Entrepreneurship"
    ] },
  
  { slug: "executive-director-administration",
     name: "Mrs Vivian Okojie", 
     role: "Executive Director (Administration), USA",
     photo:"/images/team/vivian-okojie.jpg", 
     bio: [
      "Mrs. Vivian holds a Ph.D in industrial and organizational psychology, University of Phoenix, Houston, TX, M.Sc. (Counseling) Center for Biblical Studies, Tallahassee, FL. Holds B.Sc. in Business Administration in Florida A&M University, Tallahassee, FL. She has practical working experience in Biomedical Engineering, Software Engineering and Electrical Engineering. And she is an Executive Director with Elessy Nig. Ltd.",
      "Vivian Elebiyo-Okojie is an author, motivational speaker, entrepreneur, and the Inventor of the Obella. She serves on the board of the directors for phenomenal African Women and Widows Mite Place. Vivian is the Executive Innovator of Eleviv Strategy Group, a company which creates new approaches which results in maximum effectiveness by offering training, executive coaching, project planning and development, business restructuring, brainstorming, idea refinement, and idea banking.",
      "She has degree in Business Administration: Florida A&M University, (2002); Information Technology, University of Phoenix (2012); A.S Public Relations; Masters in Christian Counseling from the Center for Biblical Studies; MBA: American Intercontinental University (2016). Some of her written works has been features in newspapers and several magazines. Vivian was a semi-finalist pick for the $250,000 business plan competition with Inc. magazine and Alibaba."
     ] ,
      highlights: [
      "Leadership Certificate (Women Lead. Program)",
      "Masters of Business Administration (American Intercontinental University,Houston,TX)",
      "Bachelor of Science Business",
    ]
    },
  
  
  { slug: "executive-director-technical",
     name: "Arc. Daramola Kehinde Oluwaseyi",
     role: "Executive Director (Technical)",
     photo:"/images/team/daramora.jpg", 
     bio: [
      "Mrs. Kehinde holds a M.Sc. in Architecture, Covenant University Ota, Ogun State, Nigeria. She also holds a B.Sc. Architecture. She has practical working experience in Building construction, Designing of various building project in Nigeria. And recently, She is a Director with Eleesy Nig. Ltd. Arc. Daramola Kehinde is a Registered Architect with the Architects Registration Council of Nigeria (ARCON). She holds her Masters and Bachelor’s Degree in Architecture from Covenant University Nigeria.",
      "Since her graduation in 2008, she has given her skill and expertise in various projects in residential buildings, commercial and institutional buildings; she has also handled few furniture projects under the company’s portfolio."
     ] ,
     highlights:[
      "Project Management Professional 2021",
      "ARCON (F/3307) 2014",
      "M.Sc. Architecture",
      "B.Sc. Architecture"
     ]
    },
  
  
  { slug: "executive-director-operation",
    name: "Mayowa Joel Elebiyo", 
    role: "Finance Director",
    photo:"/images/team/mayowa.jpg", 
    bio: [
      "Mayowa Joel Elebiyo, a dedicated and hardworking professional with a decade of experience, stands as a catalyst for positive change. Since 2010, he has been actively involved in community service, introducing innovative measures for peace-building and contributing to social, cultural, and people-oriented activities. Mayowa’s commitment extends beyond his professional roles, evident in his extensive volunteer work and the establishment of personal projects.",
      "In his role as a Volunteer and Assistant Welfare Director at Bread of Hope International Children and Youth Foundation, Mayowa demonstrated his planning and implementation skills for welfare programs. His administrative proficiency included record-keeping and coordinating logistics for various events. He engaged in research and analysis on social issues, collaborating with community organizations, stakeholders, and government agencies to forge impactful partnerships.",
      "As a Graduate Trainee and Office Assistant at 1 Division Nigerian Army, Kawo-Kaduna, Mayowa excelled in performing routine office tasks, managing communications, and handling data entry. His responsibilities also extended to organizing and maintaining both physical and digital records, showcasing his meticulous approach to information management.",
      "In his role as a Coordinator at Generation for Societal Change in 2015, Mayowa facilitates and supports the team in the state, overseeing the professional development network and providing day-to-day management of the initiative. He serves as the primary contact, delivering strategic and administrative planning, and reporting on overall activities to the headquarters."
    ],
  highlights:[
      "B.Sc. Political Science"
     ]},
  // { slug: "head-of-projects", name: "Full Name", role: "Head of Projects", bio: ["Add a short biography here."] },
  // { slug: "head-of-business-development", name: "Full Name", role: "Head of Business Development", bio: ["Add a short biography here."] },
];