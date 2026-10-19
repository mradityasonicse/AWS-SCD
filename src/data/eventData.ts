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
  poster?: string;
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


export interface FAQItem {
  question: string;
  answer: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  collabName?: string;
  category: 'Title' | 'Technology' | 'Academic Host' | 'Community' | 'Community Platform' | string;
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
  shortName: "AWS SCD 2026 · Rungta International Skills University",
  tagline: "One day. One stage. The ultimate student-driven AWS cloud gathering in Central India.",
  edition: "Central India Edition • Bhilai",
  date: "October 21, 2026",
  isoDate: "2026-10-21T09:00:00+05:30",
  time: "9:00 AM - 4:00 PM IST",
  host: "AWS Student Builder Group (SBG) Rungta International Skills University",
  institution: "Rungta International Skills University",
  institutionAcronym: "Rungta International Skills University",
  city: "Bhilai, Chhattisgarh, India",
  venueName: "Rungta International Skills University Campus",
  venueAddress: "Rungta International Skills University, Kohka-Kurud Road, Bhilai, Chhattisgarh 490024",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=21.2350,81.3462+(Rungta+International+Skills+University+Bhilai)",
  contactEmail: "awssbg.rungta@gmail.com",
  contactPhone: "+91 8518903022",
  registrationUrl: "https://www.meetup.com/aws-sbg-at-rungta-college-of-engineering-and-technology/events/316879036/?utm_medium=referral&utm_campaign=announce_event&utm_source=link&utm_version=v2&member_id=476107778",
  socials: {
    meetup: "https://www.meetup.com/aws-sbg-at-rungta-college-of-engineering-and-technology/events/316879036/?utm_medium=referral&utm_campaign=announce_event&utm_source=link&utm_version=v2&member_id=476107778",
    linkedin: "https://www.linkedin.com/company/aws-sbg-rungta/",
    instagram: "https://www.instagram.com/aws_student_builder_group_risu/",
    twitter: "https://x.com/awsscrisu/"
  }
};

export const EVENT_STATS = [
  { label: "Builders Expected", value: "+550", helper: "Students from across India" },
  { label: "Hours of Community", value: "7h", helper: "Keynotes, demos & hands-on" },
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
  { title: "Amazon Distributed Systems Keynote", desc: "Keynote by Harshit Singh (SDE-II, Amazon) on engineering microservices at global scale" },
  { title: "AWS Cloud Architecture Masterclass", desc: "Technical deep dive by Saptarshi De (SDE-II, AWS) on resilient cloud infrastructure & serverless" },
  { title: "Free Meals + Official AWS Swag Kit", desc: "Breakfast, lavish buffet lunch, custom t-shirt, stickers & lanyard" },
  { title: "AWS Live Kahoot Quiz on Stage", desc: "Compete in live cloud trivia and win exclusive official AWS merchandise & swag kits" },
  { title: "Official Verified Certificate", desc: "AWS SBG & Rungta International Skills University co-branded verified completion certificate" },
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
    name: "Harshit Singh",
    company: "Amazon",
    category: "speaker",
    current_designation: "SDE-II , AMAZON",
    topic: "Building High-Throughput Distributed Microservices at Amazon Scale",
    image: "/speakers/harshit_singh.png",
    poster: "/speakers/harshit_singh_poster.png",
    bio: "Backend systems engineer at Amazon focused on distributed services and low-latency pipelines. Breaks down pragmatic production engineering: managing high-concurrency event loops, designing idempotent APIs, handling partial network partitions, and mitigating cascading failures during massive traffic spikes.",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Harshit+Singh+Amazon"
  },
  {
    id: 2,
    name: "Saptarshi De",
    company: "AWS",
    category: "speaker",
    current_designation: "SDE-II , AWS",
    topic: "Architecting Resilient Cloud Infrastructure & Serverless at AWS",
    image: "/speakers/saptarshi_de.png",
    poster: "/speakers/saptarshi_de_poster.png",
    bio: "Cloud systems and infrastructure engineer at AWS specializing in resilient serverless platforms. Focuses on production-grade cloud primitives: single-table DynamoDB data access patterns, cold-start telemetry optimization, event-driven orchestration with SQS/Step Functions, and zero-downtime deployment pipelines.",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Saptarshi+De+AWS"
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    name: "Aishwary Gathe",
    company: "Meetup",
    category: "speaker",
    current_designation: "DevRel Engineer",
    topic: "Building Resilient Event Platforms on AWS Serverless",
    image: "/deepak_nishad_.jpg",
    bio: "Community builder and developer advocate driving developer ecosystems and cloud platforms.",
    linkedin: "https://www.linkedin.com/in/aishwarygathe/"
  }
];

export const AGENDA: AgendaItem[] = [
  {
    time: "09:00 – 10:00 AM",
    ampm: "AM",
    title: "Registration",
    type: "Registration",
    typeColor: "#AD5CFF",
    duration: "60 min",
    subtitle: "Participant registration, attendance, and welcome.",
    dotColor: "#AD5CFF",
    category: "Networking"
  },
  {
    time: "10:00 – 10:20 AM",
    ampm: "AM",
    title: "Inauguration",
    type: "Inauguration",
    typeColor: "#AD5CFF",
    duration: "20 min",
    subtitle: "Formal opening of the event and inaugural proceedings.",
    dotColor: "#AD5CFF",
    category: "Ceremony"
  },
  {
    time: "10:20 – 10:30 AM",
    ampm: "AM",
    title: "Felicitation",
    type: "Felicitation",
    typeColor: "#AD5CFF",
    duration: "10 min",
    subtitle: "Honouring the dignitaries and invited guests.",
    dotColor: "#AD5CFF",
    category: "Ceremony"
  },
  {
    time: "10:30 – 10:40 AM",
    ampm: "AM",
    title: "Introduction",
    type: "Introduction",
    typeColor: "#AD5CFF",
    duration: "10 min",
    subtitle: "Welcome address and introduction to AWS Community Day.",
    dotColor: "#AD5CFF",
    category: "Keynote"
  },
  {
    time: "10:40 – 11:30 AM",
    ampm: "AM",
    title: "Speaker Session 1",
    speaker: "Harshit Singh (SDE-II, Amazon)",
    type: "Speaker Session",
    typeColor: "#AD5CFF",
    duration: "50 min",
    subtitle: "Invite the first speaker and conduct the session.",
    dotColor: "#AD5CFF",
    category: "Tech"
  },
  {
    time: "11:30 AM – 12:30 PM",
    ampm: "PM",
    title: "Break",
    type: "Break",
    typeColor: "#94A3B8",
    duration: "60 min",
    subtitle: "One-hour lunch or refreshment break.",
    dotColor: "#94A3B8",
    category: "Networking"
  },
  {
    time: "12:30 – 12:40 PM",
    ampm: "PM",
    title: "Introduction",
    type: "Introduction",
    typeColor: "#AD5CFF",
    duration: "10 min",
    subtitle: "Reopen the event and introduce the next speaker.",
    dotColor: "#AD5CFF",
    category: "Keynote"
  },
  {
    time: "12:40 – 02:00 PM",
    ampm: "PM",
    title: "Speaker Session 2",
    speaker: "Saptarshi De (SDE-II, AWS)",
    type: "Speaker Session",
    typeColor: "#AD5CFF",
    duration: "80 min",
    subtitle: "Invite the next speaker and conduct the session.",
    dotColor: "#AD5CFF",
    category: "Tech"
  },
  {
    time: "02:00 – 02:30 PM",
    ampm: "PM",
    title: "Q&A Session",
    speaker: "Harshit Singh & Saptarshi De",
    type: "Q&A Session",
    typeColor: "#AD5CFF",
    duration: "30 min",
    subtitle: "Audience questions and interaction with the speakers.",
    dotColor: "#AD5CFF",
    category: "Fun"
  },
  {
    time: "02:30 – 03:00 PM",
    ampm: "PM",
    title: "Closing Ceremony",
    type: "Closing Ceremony",
    typeColor: "#AD5CFF",
    duration: "30 min",
    subtitle: "Vote of thanks, acknowledgements, and closing remarks.",
    dotColor: "#AD5CFF",
    category: "Ceremony"
  },
  {
    time: "03:00 – 04:00 PM",
    ampm: "PM",
    title: "Swag Distribution",
    type: "Swag Distribution",
    typeColor: "#AD5CFF",
    duration: "60 min",
    subtitle: "Distribute AWS goodies, interact with participants, and wrap up.",
    dotColor: "#AD5CFF",
    category: "Fun"
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
      "Top 3 fastest builders walk away with exclusive AWS hoodies, swag kits, and premium merchandise on the spot."
    ]
  },
  {
    id: "refer",
    tag: "REFER & EARN",
    pill: "Win with friends",
    title: "Bring your builder squad, top the community leaderboard.",
    steps: [
      "Join the AWS SCD 2026 community and get your unique referral code.",
      "Share it with your classmates, peers, and tech clubs across colleges.",
      "Ensure your crew checks in on event day at Rungta International Skills University.",
      "Top referrers take home exclusive AWS hoodies, customized builder swags, and special community recognition."
    ]
  }
];

export const PRIZES: PrizeItem[] = [
  {
    rank: "1st Prize",
    worth: "Champion Swag Box",
    name: "Official AWS Cloud Champion Kit",
    item: "Exclusive AWS Embroidered Hoodie + Premium Builder Backpack & Gold Dev Badge",
    image: "/AWS.png"
  },
  {
    rank: "2nd Prize",
    worth: "Runner-Up Kit",
    name: "AWS Builder Runner-Up Pack",
    item: "AWS Limited Edition Hoodie + Insulated Stainless Steel Flask & Dev Pack",
    image: "/AWS.png"
  },
  {
    rank: "3rd Prize",
    worth: "Contender Kit",
    name: "AWS Community Contender Pack",
    item: "AWS Builder Tee + Custom Cap, Metal Pins & Cloud Swag Bundle",
    image: "/AWS.png"
  }
];


export const SPONSORS: Sponsor[] = [
  {
    name: "Amazon Web Services",
    logo: "/AWS.png",
    collabName: "AWS Cloud · Title",
    category: "Title",
    description: "The world's most comprehensive and broadly adopted cloud platform."
  }
];


export const ORGANIZERS: TeamMember[] = [
  {
    id: 1,
    name: "Uddyan Sahu",
    title: "AWS SBG Leader, Rungta International Skills University",
    role: "Team Lead · Lead Organiser",
    image: "/risu-logo.png",
    linkedin: "https://www.linkedin.com/in/uddyan-sahu/",
    email: "awssbg.rungta@gmail.com"
  },
  {
    id: 2,
    name: "Gunjan Ghangare",
    title: "AWS Community Enthusiast",
    role: "Technical Lead · Co-Organiser",
    image: "/risu-logo.png",
    linkedin: "https://www.linkedin.com/in/gunjanghangare"
  },
  {
    id: 3,
    name: "Chetna Sakarde",
    title: "Operations Specialist",
    role: "Event & Operations Lead",
    image: "/risu-logo.png",
    linkedin: "https://www.linkedin.com/company/aws-sbg-rungta/"
  },
  {
    id: 4,
    name: "Netra Khobragade",
    title: "Visual Designer",
    role: "Design & Brand Lead",
    image: "/risu-logo.png",
    linkedin: "https://www.linkedin.com/company/aws-sbg-rungta/"
  },
  {
    id: 5,
    name: "Aryan Vijaykar",
    title: "Cloud Outreach Strategist",
    role: "Community & Outreach Lead",
    image: "/risu-logo.png",
    linkedin: "https://www.linkedin.com/company/aws-sbg-rungta/"
  },
  {
    id: 6,
    name: "Faculty Mentors, Rungta International Skills University",
    title: "Faculty Advisory Board, Rungta International Skills University",
    role: "Academic Patrons",
    image: "/risu-logo.png",
    linkedin: "https://www.linkedin.com/company/aws-sbg-rungta/"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Who can attend AWS Student Community Day 2026 at Rungta International Skills University?",
    answer: "The event is open to all university students, polytechnic diploma candidates, engineering and BCA/MCA/B.Sc students, tech enthusiasts, and early-career developers who are eager to explore cloud computing, AI, and DevOps."
  },
  {
    question: "Do I need prior AWS cloud experience?",
    answer: "Not at all! AWS Student Community Day is designed to be highly accessible and beginner-friendly while delivering advanced architectural sessions for seasoned builders. Everyone learns something new."
  },
  {
    question: "Is there any restriction on college, branch or graduation year?",
    answer: "Zero restrictions. Students from Rungta International Skills University as well as any college across Chhattisgarh and India can participate. All academic branches and batches are warmly welcome."
  },
  {
    question: "What should I bring on the day of the event?",
    answer: "Bring your College Student ID card and a fully charged laptop with charger if you wish to participate in the hands-on architecture clinics and live quizzes."
  },
  {
    question: "Will food, swags, and certificates be provided?",
    answer: "Yes! The summit includes full breakfast, lavish buffet lunch, high tea, an official AWS Student Swag Kit, and a verified Certificate of Participation co-signed by AWS SBG & Rungta International Skills University."
  },
  {
    question: "How do I reach Rungta International Skills University, Bhilai?",
    answer: "Rungta International Skills University is conveniently situated in Bhilai, Chhattisgarh. It is only 8 km from Bhilai Power House Railway Station (BPH) and 12 km from Durg Junction Railway Station (DURG). Autos, cabs, and campus transit are easily accessible."
  },
  {
    question: "How does the live AWS Kahoot Quiz work?",
    answer: "The quiz takes place live on the auditorium main screen. All attendees connect via their smartphones at kahoot.it, answer speed and accuracy questions on AWS, and the top 3 live scorers win exclusive official AWS hoodies, premium builder swag kits, and stage recognition."
  },
  {
    question: "I want to sponsor, partner, or volunteer. Where should I reach out?",
    answer: "We welcome industry and community partners! Please write directly to awssbg.rungta@gmail.com to receive the official sponsorship prospectus and partner deck."
  }
];
