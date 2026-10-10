export interface Speaker {
  id: number;
  name: string;
  company: string;
  category: 'keynote' | 'speaker';
  current_designation: string;
  topic?: string;
  image: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

export interface AgendaItem {
  time: string;
  ampm: 'AM' | 'PM';
  title: string;
  type: string;
  typeColor: string;
  duration: string;
  subtitle?: string;
  dotColor: string;
  speaker?: string;
  category: 'Keynote' | 'Tech' | 'Networking' | 'Fun' | 'Ceremony';
}

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  badge: string;
  status: 'available' | 'closing-soon' | 'closed';
  buttonText: string;
  glowColor: string;
  ticketsClaimed: number;
  totalTickets: number;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  category: 'Title' | 'Technology' | 'Academic Host' | 'Community';
  description?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  role: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

export interface ContestItem {
  id: string;
  tag: string;
  pill: string;
  title: string;
  steps: string[];
  featured?: boolean;
}

export interface PrizeItem {
  rank: string;
  worth: string;
  name: string;
  item: string;
  image: string;
}

export const EVENT_DETAILS = {
  name: "AWS Student Community Day 2026 · Central India",
  shortName: "AWS SCD RISU 2026",
  tagline: "One day. One stage. The ultimate student-driven AWS cloud gathering in Central India.",
  edition: "Central India Edition • Bhilai",
  date: "October 26, 2026",
  isoDate: "2026-10-26T08:00:00+05:30",
  time: "8:00 AM - 5:30 PM IST",
  host: "AWS Student Builder Group (SBG) RISU",
  institution: "Rungta International Skills University",
  institutionAcronym: "RISU",
  city: "Bhilai, Chhattisgarh, India",
  venueName: "Rungta International Skills University (RISU) Campus",
  venueAddress: "Rungta Knowledge City, Kohka-Kurud Road, Bhilai, Chhattisgarh 490024",
  mapUrl: "https://maps.google.com/?q=Rungta+International+Skills+University+Bhilai",
  contactEmail: "aws.sbg.risu@gmail.com",
  contactPhone: "+91 8518903022",
  socials: {
    meetup: "https://www.meetup.com/aws-sbg-at-risu/",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    instagram: "https://www.instagram.com/aws_student_builder_group_risu/",
    twitter: "https://x.com/awsscrisu/",
    registrationLink: "https://meetio.online/events/aws-scd-risu-2026/ticket"
  }
};

export const EVENT_STATS = [
  { label: "Builders Expected", value: "+550", helper: "Students from across India" },
  { label: "Hours of Community", value: "9.5h", helper: "Keynotes, demos & hands-on" },
  { label: "Technical Sessions", value: "12+", helper: "Architectures, GenAI & DevOps" },
  { label: "Day to Remember", value: "1", helper: "Epic Central India gathering" },
];

export const PILLARS = [
  {
    num: "01",
    title: "Learn",
    desc: "Opening keynotes from AWS DevRel leadership and Amazon experts on what's actually shipping in 2026."
  },
  {
    num: "02",
    title: "Connect",
    desc: "Panel discussions and interactive sessions with AWS Community Builders, architects, and industry recruiters."
  },
  {
    num: "03",
    title: "Belong",
    desc: "Meet 500+ passionate student builders, expand your cloud network, and join Central India's premier community."
  }
];

export const WHY_ATTEND = [
  { title: "AWS DevRel Leadership Session", desc: "Keynote by Praful Bagai (Head of DevRel, AWS India & South Asia)" },
  { title: "Amazon Global Education Address", desc: "Special address by Jessica Gilmore, EdD (Amazon)" },
  { title: "Free Meals + Official AWS Swag Kit", desc: "Breakfast, lavish buffet lunch, custom t-shirt, stickers & lanyard" },
  { title: "AWS Live Kahoot Quiz on Stage", desc: "Compete in live cloud trivia and win Amazon Echo Dots & smart electronics" },
  { title: "Official Verified Certificate", desc: "AWS SBG & RISU co-branded verified completion certificate" },
  { title: "All-Attendee Group Photo & Networking", desc: "Direct 1-on-1 networking with speakers, organizers and tech partners" }
];

export const TRACKS = [
  {
    num: "01",
    title: "Generative AI & Amazon Bedrock",
    description: "Building production-grade multimodal AI agents, RAG pipelines, and fine-tuning foundation models with Amazon Bedrock.",
    icon: "Brain",
    accent: "from-amber-500 to-orange-500",
    tags: ["Amazon Bedrock", "Claude 3.5", "RAG Pipelines", "AI Agents"]
  },
  {
    num: "02",
    title: "Cloud Native & Hyperscale Serverless",
    description: "Architecting zero-downtime distributed systems handling 90M+ requests with multi-region AWS resilience and low latency.",
    icon: "Server",
    accent: "from-blue-500 to-cyan-500",
    tags: ["AWS Lambda", "DynamoDB", "EventBridge", "ECS / Fargate"]
  },
  {
    num: "03",
    title: "DevSecOps & Zero-Trust Cloud Security",
    description: "Hardening cloud perimeters, automated IAM governance, runtime threat detection, and continuous Terraform CI/CD pipelines.",
    icon: "ShieldCheck",
    accent: "from-emerald-500 to-teal-500",
    tags: ["IAM Identity Center", "GuardDuty", "WAF", "Terraform / CDK"]
  },
  {
    num: "04",
    title: "Career Pathways & Cloud Mastery",
    description: "Cracking AWS certifications, resume blueprints for global tech roles, building open-source projects, and DevRel careers.",
    icon: "Zap",
    accent: "from-purple-500 to-indigo-500",
    tags: ["AWS Certified", "Resume Clinic", "Open Source", "Hackathons"]
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: "Jessica Gilmore, EdD",
    company: "Amazon",
    category: "keynote",
    current_designation: "Global Education & Customer Success Leader",
    topic: "Special Address: Fostering Next-Gen Global Builders & Community Impact",
    image: "/praful_bagai.png",
    bio: "Global Education Leader at Amazon championing student development, diversity in tech, and university innovation across the world.",
    linkedin: "https://www.linkedin.com/in/jessicagilmore/"
  },
  {
    id: 2,
    name: "Praful Bagai",
    company: "Amazon Web Services",
    category: "keynote",
    current_designation: "Head of DevRel – India & South Asia",
    topic: "Opening Keynote: Future of Cloud Builders & Developer Ecosystem",
    image: "/praful_bagai.png",
    bio: "Head of Developer Relations across India and South Asia at AWS. Empowering millions of builders and student developers to ship scalable software on AWS.",
    linkedin: "https://www.linkedin.com/in/prafulbagai/"
  },
  {
    id: 3,
    name: "Deepak Nishad",
    company: "Snapmint",
    category: "speaker",
    current_designation: "DevOps Engineer & Cloud Architect",
    topic: "Scaling to 90 Million Users: A Blueprint for Highly Available Cloud Systems",
    image: "/deepak_nishad_.jpg",
    bio: "High-scale infrastructure specialist managing high-concurrency event loops, multi-region architectures, and cost optimization at Snapmint.",
    linkedin: "https://www.linkedin.com/in/deepak-nishad/"
  },
  {
    id: 4,
    name: "Nikita Mourya",
    company: "AWS Community Builder",
    category: "speaker",
    current_designation: "Staff Cloud Platform Engineer",
    topic: "The Building Blocks of AI Agents with Amazon Bedrock",
    image: "/nikita_mourya.png",
    bio: "AWS Community Builder specializing in Generative AI, serverless workflows, and agentic orchestration with AWS Bedrock.",
    linkedin: "https://www.linkedin.com/in/nikita-mourya/"
  },
  {
    id: 5,
    name: "Varsha Verma",
    company: "AWS Community Builder",
    category: "speaker",
    current_designation: "Cloud Security Specialist",
    topic: "Cloud Under Lockdown: Rethinking Zero-Trust Cloud Security",
    image: "/Varsha_Verma.jpeg",
    bio: "AWS Community Builder specializing in threat modeling, automated guardrails, IAM least-privilege, and cloud resilience.",
    linkedin: "https://www.linkedin.com/in/varsha-verma/"
  },
  {
    id: 6,
    name: "Anmoldeep Singh Arora",
    company: "Accenture",
    category: "speaker",
    current_designation: "AI Engineer & AWS Community Builder",
    topic: "Agile AI with AWS: Rapid Prototyping to Enterprise Deployment",
    image: "/anmoldeep_singh.png",
    bio: "Pioneering LLM applications, multimodal models, and automated deployment pipelines on Amazon Web Services.",
    linkedin: "https://www.linkedin.com/in/anmoldeep-singh-arora/"
  },
  {
    id: 7,
    name: "Aishwary Gathe",
    company: "Meetio",
    category: "speaker",
    current_designation: "DevRel Engineer",
    topic: "Building Resilient Event Platforms on AWS Serverless",
    image: "/deepak_nishad_.jpg",
    bio: "Community builder and developer advocate driving seamless event ticketing and developer ecosystems with cloud technologies.",
    linkedin: "https://www.linkedin.com/in/aishwarygathe/"
  }
];

export const AGENDA: AgendaItem[] = [
  {
    time: "08:00",
    ampm: "AM",
    title: "Registration, Badge Collection & Hot Breakfast",
    type: "Check-in",
    typeColor: "#f0a838",
    duration: "60 min",
    subtitle: "Collect your official attendee kit, custom holographic badge & connect over breakfast at RISU.",
    dotColor: "#f0a838",
    category: "Networking"
  },
  {
    time: "09:00",
    ampm: "AM",
    title: "Grand Opening Ceremony & Welcome Note",
    type: "Ceremony",
    typeColor: "#34d399",
    duration: "30 min",
    subtitle: "Welcome address by Leadership at Rungta International Skills University and AWS SBG RISU Leads.",
    dotColor: "#34d399",
    category: "Ceremony"
  },
  {
    time: "09:30",
    ampm: "AM",
    title: "Jessica Gilmore, EdD — Special Address",
    speaker: "Jessica Gilmore, EdD",
    type: "Special Keynote (Virtual)",
    typeColor: "#38bdf8",
    duration: "20 min",
    subtitle: "Global Education & Customer Success Leader, Amazon",
    dotColor: "#38bdf8",
    category: "Keynote"
  },
  {
    time: "09:50",
    ampm: "AM",
    title: "Praful Bagai — Opening Keynote: Future of Cloud Builders",
    speaker: "Praful Bagai",
    type: "Opening Keynote",
    typeColor: "#f90",
    duration: "40 min",
    subtitle: "Head of DevRel – India & South Asia, Amazon Web Services (AWS)",
    dotColor: "#f90",
    category: "Keynote"
  },
  {
    time: "10:30",
    ampm: "AM",
    title: "The Building Blocks of AI Agents with Amazon Bedrock",
    speaker: "Nikita Mourya",
    type: "Technical Session",
    typeColor: "#a855f7",
    duration: "45 min",
    subtitle: "AWS Community Builder & Staff Platform Engineer",
    dotColor: "#a855f7",
    category: "Tech"
  },
  {
    time: "11:15",
    ampm: "AM",
    title: "AWS Kahoot Quiz & Cloud Trivia — Round 1",
    type: "Activity",
    typeColor: "#f43f5e",
    duration: "20 min",
    subtitle: "Live mobile trivia on auditorium screen. Top scorers win instant Amazon Echo Dots & swags!",
    dotColor: "#f43f5e",
    category: "Fun"
  },
  {
    time: "11:35",
    ampm: "AM",
    title: "Cloud Under Lockdown: Rethinking Zero-Trust Security",
    speaker: "Varsha Verma",
    type: "Technical Session",
    typeColor: "#38bdf8",
    duration: "45 min",
    subtitle: "AWS Community Builder & Cloud Security Specialist",
    dotColor: "#38bdf8",
    category: "Tech"
  },
  {
    time: "12:20",
    ampm: "PM",
    title: "Lavish Buffet Lunch, Tech Expo & Community Networking",
    type: "Networking Break",
    typeColor: "#34d399",
    duration: "70 min",
    subtitle: "Enjoy a sumptuous multi-course buffet while connecting with sponsors, mentors & peers at RISU.",
    dotColor: "#34d399",
    category: "Networking"
  },
  {
    time: "01:30",
    ampm: "PM",
    title: "Scaling to 90 Million Users: Highly Available Cloud Blueprint",
    speaker: "Deepak Nishad",
    type: "Technical Session",
    typeColor: "#f90",
    duration: "45 min",
    subtitle: "DevOps Engineer at Snapmint reveals secrets of handling hyperscale workloads.",
    dotColor: "#f90",
    category: "Tech"
  },
  {
    time: "02:15",
    ampm: "PM",
    title: "Agile AI with AWS: Rapid Prototyping to Enterprise Deployment",
    speaker: "Anmoldeep Singh Arora",
    type: "Technical Session",
    typeColor: "#ec4899",
    duration: "45 min",
    subtitle: "AI Engineer at Accenture on deploying scalable LLMs and generative pipelines.",
    dotColor: "#ec4899",
    category: "Tech"
  },
  {
    time: "03:00",
    ampm: "PM",
    title: "Building Resilient Event Infrastructure with Serverless",
    speaker: "Aishwary Gathe",
    type: "Technical Session",
    typeColor: "#38bdf8",
    duration: "30 min",
    subtitle: "DevRel at Meetio on event-driven architectures & real-world reliability.",
    dotColor: "#38bdf8",
    category: "Tech"
  },
  {
    time: "03:30",
    ampm: "PM",
    title: "Grand Panel Discussion: Breaking Into Cloud & AI in 2026",
    type: "Panel Discussion",
    typeColor: "#a855f7",
    duration: "40 min",
    subtitle: "All speakers on stage: open Q&A, cloud careers, certifications, and open source opportunities.",
    dotColor: "#a855f7",
    category: "Keynote"
  },
  {
    time: "04:10",
    ampm: "PM",
    title: "AWS Kahoot Grand Finale & Mega Lucky Draw",
    type: "Activity",
    typeColor: "#f43f5e",
    duration: "25 min",
    subtitle: "Final showdown for the Amazon Echo Dot, Fire TV Stick, smart tech gifts, and certification vouchers.",
    dotColor: "#f43f5e",
    category: "Fun"
  },
  {
    time: "04:35",
    ampm: "PM",
    title: "Closing Ceremony, Volunteer Felicitation & Official Group Photo",
    type: "Ceremony",
    typeColor: "#34d399",
    duration: "35 min",
    subtitle: "Vote of thanks by AWS SBG RISU, distribution of certificates, and grand community photograph.",
    dotColor: "#34d399",
    category: "Ceremony"
  }
];

export const CONTESTS: ContestItem[] = [
  {
    id: "kahoot",
    tag: "AWS KAHOOT QUIZ",
    pill: "Live on stage",
    title: "Test your cloud smarts live on the big stage.",
    featured: true,
    steps: [
      "Bring a charged smartphone — the quiz runs live during the summit.",
      "Answer fast and accurately to climb the real-time auditorium scoreboard.",
      "Stay sharp across questions covering AWS services, Bedrock, and cloud trivia.",
      "Top 3 fastest builders walk away with Amazon Echo and premium gear on the spot."
    ]
  },
  {
    id: "refer",
    tag: "REFER & EARN",
    pill: "Win with friends",
    title: "Bring your builder squad, top the community leaderboard.",
    steps: [
      "Register for AWS SCD 2026 and get your unique referral code.",
      "Share it with your classmates, peers, and tech clubs across colleges.",
      "Ensure your crew checks in on event day at Rungta International Skills University.",
      "Top referrers take home smart wearables, AWS hoodies, and exclusive swags."
    ]
  }
];

export const PRIZES: PrizeItem[] = [
  {
    rank: "1st Prize",
    worth: "Worth ₹4,499",
    name: "Amazon Echo Dot (5th Gen)",
    item: "Smart speaker with Alexa & deep bass sound + AWS Swag Box",
    image: "/AWS.png"
  },
  {
    rank: "2nd Prize",
    worth: "Worth ₹2,999",
    name: "Amazon Fire TV Stick Lite",
    item: "Full HD streaming device with Alexa Voice Remote + AWS Hoodie",
    image: "/AWS.png"
  },
  {
    rank: "3rd Prize",
    worth: "Worth ₹1,899",
    name: "Fastrack Smart Fitness Band",
    item: "AMOLED fitness tracker + AWS Cloud Builder Kit",
    image: "/AWS.png"
  }
];

export const TICKETS: TicketTier[] = [
  {
    id: "early-bird",
    name: "EARLY BIRD",
    price: 259,
    badge: "Closing Soon",
    status: "closing-soon",
    buttonText: "Secure Early Bird",
    glowColor: "#ff9900",
    ticketsClaimed: 185,
    totalTickets: 200,
    features: [
      "Full Event Day Access at RISU Campus",
      "All AWS Keynotes & Tech Sessions",
      "Exclusive AWS Student Swag Kit",
      "Custom Holographic Lanyard Badge",
      "Official Verified Participation Certificate",
      "Breakfast, High Tea & Full Buffet Lunch",
      "Eligibility for Kahoot Quiz & Lucky Draws",
      "Best Discounted Price Guaranteed"
    ]
  },
  {
    id: "regular",
    name: "REGULAR BUILDER",
    price: 299,
    badge: "Filling Fast",
    status: "available",
    buttonText: "Book Standard Pass",
    glowColor: "#3b82f6",
    popular: true,
    ticketsClaimed: 120,
    totalTickets: 300,
    features: [
      "Full Event Day Access at RISU Campus",
      "All AWS Keynotes & Tech Sessions",
      "Exclusive AWS Student Swag Kit",
      "Custom Holographic Lanyard Badge",
      "Official Verified Participation Certificate",
      "Breakfast, High Tea & Full Buffet Lunch",
      "Full Hands-on Demo Track Access",
      "Cloud Architecture Networking Access"
    ]
  },
  {
    id: "premium",
    name: "PREMIUM PASS",
    price: 499,
    badge: "Limited Seats",
    status: "closing-soon",
    buttonText: "Upgrade to Premium",
    glowColor: "#ec4899",
    ticketsClaimed: 85,
    totalTickets: 100,
    features: [
      "Reserved Front-Row Auditorium Seating",
      "Exclusive AWS Community Event T-Shirt",
      "Post-Event Closed AMA with AWS Speakers",
      "Priority Fast-Track Check-In at RISU",
      "Full Buffet Lunch & Premium Refreshments",
      "Exclusive Student Swag Box",
      "Special Mention Certificate of Excellence",
      "Private Professional Networking Lounge"
    ]
  },
  {
    id: "patron",
    name: "COMMUNITY PATRON",
    price: 3999,
    badge: "Sold Out",
    status: "closed",
    buttonText: "Become a Patron (Closed)",
    glowColor: "#eab308",
    ticketsClaimed: 25,
    totalTickets: 25,
    features: [
      "VIP Fast-Track Check-In & Stage Access",
      "Includes All PREMIUM Ticket Privileges",
      "VIP Seating throughout the Event",
      "On-Stage Recognition at Opening Ceremony",
      "Official Patron Appreciation Memento",
      "Speaker Meet & Greet Dinner Access",
      "Name & Logo on Official Website & Screens",
      "Exclusive Speaker & Leadership Group Photo"
    ]
  }
];

export const SPONSORS: Sponsor[] = [
  {
    name: "Amazon Web Services",
    logo: "/AWS.png",
    category: "Title",
    description: "The world's most comprehensive and broadly adopted cloud platform."
  },
  {
    name: "Meetio",
    logo: "/meetio.png",
    category: "Technology",
    description: "Official ticketing, badge credentials & event technology partner."
  },
  {
    name: "Rungta International Skills University",
    logo: "/risu-logo.svg",
    category: "Academic Host",
    description: "Skill-first university empowering the next generation of cloud architects."
  },
  {
    name: "AWS Student Builder Groups",
    logo: "/AWS_SBG.png",
    category: "Community",
    description: "Global builder clubs fostering peer cloud learning and development."
  }
];

export const COMMUNITY_PARTNERS = [
  { name: "AWS SBG Amity", logo: "/AWS_SBG.png", category: "Community" },
  { name: "AWS SBG SSIPMT", logo: "/AWS_SBG.png", category: "Community" },
  { name: "AWS Cloud Club Central India", logo: "/AWS.png", category: "Community" },
  { name: "RISU Student Tech Council", logo: "/risu-crest.svg", category: "Host Community" },
];

export const ORGANIZERS: TeamMember[] = [
  {
    id: 1,
    name: "Uddyan Sahu",
    title: "AWS SBG Leader, RISU",
    role: "Team Lead · Lead Organiser",
    image: "/risu-crest.svg",
    linkedin: "https://www.linkedin.com/in/uddyan-sahu/",
    email: "aws.sbg.risu@gmail.com"
  },
  {
    id: 2,
    name: "Gunjan Ghangare",
    title: "AWS Community Enthusiast",
    role: "Technical Lead · Co-Organiser",
    image: "/risu-crest.svg",
    linkedin: "https://www.linkedin.com/in/gunjanghangare"
  },
  {
    id: 3,
    name: "Chetna Sakarde",
    title: "Operations Specialist",
    role: "Event & Operations Lead",
    image: "/risu-crest.svg",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/"
  },
  {
    id: 4,
    name: "Netra Khobragade",
    title: "Visual Designer",
    role: "Design & Brand Lead",
    image: "/risu-crest.svg",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/"
  },
  {
    id: 5,
    name: "Aryan Vijaykar",
    title: "Cloud Outreach Strategist",
    role: "Community & Outreach Lead",
    image: "/risu-crest.svg",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/"
  },
  {
    id: 6,
    name: "Prof. RISU Mentors",
    title: "Faculty Advisory Board, RISU",
    role: "Academic Patrons",
    image: "/risu-crest.svg",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Who can attend AWS Student Community Day RISU 2026?",
    answer: "The event is open to all university students, polytechnic diploma candidates, engineering and BCA/MCA/B.Sc students, tech enthusiasts, and early-career developers who are eager to explore cloud computing, AI, and DevOps."
  },
  {
    question: "Do I need prior AWS cloud experience?",
    answer: "Not at all! AWS Student Community Day is designed to be highly accessible and beginner-friendly while delivering advanced architectural sessions for seasoned builders. Everyone learns something new."
  },
  {
    question: "Is there any restriction on college, branch or graduation year?",
    answer: "Zero restrictions. Students from Rungta International Skills University (RISU) as well as any college across Chhattisgarh and India can register. All academic branches and batches are warmly welcome."
  },
  {
    question: "What should I bring on the day of the event?",
    answer: "Bring your College Student ID card, confirmation ticket (on your phone), and a fully charged laptop with charger if you wish to participate in the hands-on architecture clinics and live quizzes."
  },
  {
    question: "Will food, swags, and certificates be provided?",
    answer: "Yes! Every ticket includes full breakfast, lavish buffet lunch, high tea, an official AWS Student Swag Kit, custom holographic attendee badge, and a verified Certificate of Participation co-signed by AWS SBG & RISU."
  },
  {
    question: "How do I reach Rungta International Skills University (RISU), Bhilai?",
    answer: "RISU is conveniently situated in Bhilai, Chhattisgarh. It is only 8 km from Bhilai Power House Railway Station (BPH) and 12 km from Durg Junction Railway Station (DURG). Autos, cabs, and campus transit are easily accessible."
  },
  {
    question: "How does the live AWS Kahoot Quiz work?",
    answer: "The quiz takes place live on the auditorium main screen. All attendees connect via their smartphones at kahoot.it, answer speed and accuracy questions on AWS, and the top 3 live scorers win Amazon Echo Dots, smart gear, and hoodies on stage."
  },
  {
    question: "I want to sponsor, partner, or volunteer. Where should I reach out?",
    answer: "We welcome industry and community partners! Please write to aws.sbg.risu@gmail.com or connect directly via the Contact section on this website to receive the sponsorship prospectus."
  }
];

export const CREDITS_ROLL = {
  presents: "AWS Student Builder Group · RISU presents",
  title: "AWS Student Community Day 2026",
  dateAndVenue: "October 26, 2026 · Rungta International Skills University, Bhilai",
  coreTeam: [
    { role: "Team Lead · Lead Organiser", name: "Uddyan Sahu" },
    { role: "Technical Lead · Co-Organiser", name: "Gunjan Ghangare" },
    { role: "Event & Operations Lead", name: "Chetna Sakarde" },
    { role: "Design & Brand Lead", name: "Netra Khobragade" },
    { role: "Community & Outreach Lead", name: "Aryan Vijaykar" },
    { role: "Academic Patrons", name: "RISU Faculty Advisory Board" }
  ],
  onStage: [
    { role: "Special Address (Virtual)", name: "Jessica Gilmore, EdD (Amazon)" },
    { role: "Opening Keynote", name: "Praful Bagai (Head of DevRel AWS)" },
    { role: "Speaker · High Scale Systems", name: "Deepak Nishad (Snapmint)" },
    { role: "Speaker · AI Agents with Bedrock", name: "Nikita Mourya (AWS Community Builder)" },
    { role: "Speaker · Cloud Security", name: "Varsha Verma (AWS Community Builder)" },
    { role: "Speaker · Agile AI on AWS", name: "Anmoldeep Singh Arora (Accenture)" },
    { role: "Speaker · Serverless Events", name: "Aishwary Gathe (Meetio)" }
  ],
  partners: [
    { role: "Title Partner", name: "Amazon Web Services (AWS)" },
    { role: "Academic Host Institution", name: "Rungta International Skills University (RISU)" },
    { role: "Technology Partner", name: "Meetio" },
    { role: "Student Community", name: "AWS Student Builder Groups" }
  ],
  volunteers: [
    "Ayush Sharma", "Pooja Verma", "Nikhil Agrawal", "Riya Patel", "Aditya Sahu", 
    "Shubham Dewangan", "Ananya Sen", "Tushar Gupta", "Sakshi Dubey", "Aman Jain"
  ],
  starring: "550+ Student Builders from across India who made Central India's cloud revolution real.",
  closing: "Thank you, Bhilai & Central India!"
};
