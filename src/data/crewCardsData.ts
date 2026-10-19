export interface SubCrewCard {
  id: number;
  name: string;
  handle: string;
  cardImage: string;
  role: string;
  code: string;
}

export interface CoreCrewLeader {
  id: number;
  name: string;
  role: string;
  title: string;
  badge: string;
  code: string;
  handle: string;
  cardImage: string;
  accentColor: string;
  tagline: string;
  linkedin: string;
  scope: string[];
}

// Exactly 4 Core Crew Members as requested:
// 1. Abhishek Kumar Yadav (Lead)
// 2. Harsh Kumar Shandilya (Co-Lead)
// 3. Aditya Mohan (Organiser)
// 4. Yash Raj Singh (Organiser)
export const CORE_CREW_LEADERSHIP: CoreCrewLeader[] = [
  {
    id: 36,
    name: "Abhishek Kumar Yadav",
    role: "Lead",
    title: "Lead",
    badge: "Lead",
    code: "LEAD-01",
    handle: "@abhishekk007",
    cardImage: "/cards/card-36.png",
    accentColor: "#AD5CFF",
    tagline: "",
    linkedin: "https://www.linkedin.com/in/abhishek-yadav-064616328?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    scope: [],
  },
  {
    id: 34,
    name: "Harsh Kumar Shandilya",
    role: "Co-Lead",
    title: "Co-Lead",
    badge: "Co-Lead",
    code: "LEAD-02",
    handle: "@harsh2008",
    cardImage: "/cards/card-34.png",
    accentColor: "#AD5CFF",
    tagline: "",
    linkedin: "https://www.linkedin.com/in/harsh-kumar-shandilya-78b223372?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    scope: [],
  },
  {
    id: 33,
    name: "Aditya Mohan",
    role: "Organiser",
    title: "Organiser",
    badge: "Organiser",
    code: "ORG-01",
    handle: "@adityamohancse01",
    cardImage: "/cards/card-33.png",
    accentColor: "#42B4FF",
    tagline: "",
    linkedin: "https://www.linkedin.com/in/aditya-mohan-cse?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    scope: [],
  },
  {
    id: 35,
    name: "Yash Raj Singh",
    role: "Organiser",
    title: "Organiser",
    badge: "Organiser",
    code: "ORG-02",
    handle: "@yashrajsingh15",
    cardImage: "/cards/card-35.png",
    accentColor: "#00E582",
    tagline: "",
    linkedin: "https://www.linkedin.com/in/yash-raj-singh-harsh?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    scope: [],
  },
];

// Remaining 32 Sub-Crew Members (Cards 1 to 32)
// Abhishek, Harsh, Aditya Mohan, and Yash Raj moved to Core Crew and removed from Sub-Crew
export const SUB_CREW_CARDS: SubCrewCard[] = [
  {
    id: 1,
    name: "Ankit Modi",
    handle: "@ankitmodi",
    cardImage: "/cards/card-1.png",
    role: "Core Operations & Stage Coordination",
    code: "CREW-01",
  },
  {
    id: 2,
    name: "Sneha Sinha",
    handle: "@snehasinha12",
    cardImage: "/cards/card-2.png",
    role: "Community Experience & Hospitality",
    code: "CREW-02",
  },
  {
    id: 3,
    name: "Aditya Soni",
    handle: "@aditya909090",
    cardImage: "/cards/card-3.png",
    role: "Cloud Systems & Architecture",
    code: "CREW-03",
  },
  {
    id: 4,
    name: "Dharm Raj",
    handle: "@dharmraj",
    cardImage: "/cards/card-4.png",
    role: "Technical Support & Lab Operations",
    code: "CREW-04",
  },
  {
    id: 5,
    name: "Parmanand",
    handle: "@parmanand01",
    cardImage: "/cards/card-5.png",
    role: "Event Logistics & Attendee Flow",
    code: "CREW-05",
  },
  {
    id: 6,
    name: "Anushka Keshri",
    handle: "@anushkaws02",
    cardImage: "/cards/card-6.png",
    role: "Registration Desk & Accreditation",
    code: "CREW-06",
  },
  {
    id: 7,
    name: "Himanshi Sahu",
    handle: "@sahuhimanshi0507",
    cardImage: "/cards/card-7.png",
    role: "Hospitality & Delegate Care",
    code: "CREW-07",
  },
  {
    id: 8,
    name: "Nandani Jha",
    handle: "@alias0555",
    cardImage: "/cards/card-8.png",
    role: "Student Delegations & Relations",
    code: "CREW-08",
  },
  {
    id: 9,
    name: "Aditya Sao",
    handle: "@aditya64566",
    cardImage: "/cards/card-9.png",
    role: "Arena Infrastructure & Support",
    code: "CREW-09",
  },
  {
    id: 10,
    name: "Dharna Sahu",
    handle: "@dharna14",
    cardImage: "/cards/card-10.png",
    role: "Campus Coordination & Hospitality",
    code: "CREW-10",
  },
  {
    id: 11,
    name: "M Vedant Naidu",
    handle: "@vedant17",
    cardImage: "/cards/card-11.png",
    role: "AV Sync & Stage Transitions",
    code: "CREW-11",
  },
  {
    id: 12,
    name: "Rupali Dewangan",
    handle: "@rupalidewangan",
    cardImage: "/cards/card-12.png",
    role: "Guest Reception & Protocol",
    code: "CREW-12",
  },
  {
    id: 13,
    name: "Ankit Kumar",
    handle: "@Ankit01say",
    cardImage: "/cards/card-13.png",
    role: "Venue Operations & Crowd Management",
    code: "CREW-13",
  },
  {
    id: 14,
    name: "Suhail Akhtar",
    handle: "@suhail77",
    cardImage: "/cards/card-14.png",
    role: "Technical Logistics & Network Operations",
    code: "CREW-14",
  },
  {
    id: 15,
    name: "Geet Vegad",
    handle: "@vegadgeett16",
    cardImage: "/cards/card-15.png",
    role: "Summit Brand & Visual Collateral",
    code: "CREW-15",
  },
  {
    id: 16,
    name: "Mukesh Sahu",
    handle: "@mukesh28",
    cardImage: "/cards/card-16.png",
    role: "Auditorium Ops & Stage Runner",
    code: "CREW-16",
  },
  {
    id: 17,
    name: "Prashant Sharma",
    handle: "@prashantsharma",
    cardImage: "/cards/card-17.png",
    role: "Cloud Lab Assisting & Hardware Setup",
    code: "CREW-17",
  },
  {
    id: 18,
    name: "Sachin Kumar Gupta",
    handle: "@sachinaws610",
    cardImage: "/cards/card-18.png",
    role: "Arena Tech & Dev Arena Desk",
    code: "CREW-18",
  },
  {
    id: 19,
    name: "Prashant Singh",
    handle: "@prashaanttt",
    cardImage: "/cards/card-19.png",
    role: "Campus Liaison & Fast-Track Flow",
    code: "CREW-19",
  },
  {
    id: 20,
    name: "Priyanshu Shrivas",
    handle: "@priyanshu0709",
    cardImage: "/cards/card-20.png",
    role: "Social Media Live Streaming & Media",
    code: "CREW-20",
  },
  {
    id: 21,
    name: "Priyanshu Netam",
    handle: "@prince294",
    cardImage: "/cards/card-21.png",
    role: "Delegate Kit Management & Logistics",
    code: "CREW-21",
  },
  {
    id: 22,
    name: "Anish Kant",
    handle: "@anishkant",
    cardImage: "/cards/card-22.png",
    role: "Technical Workshop Coordination",
    code: "CREW-22",
  },
  {
    id: 23,
    name: "Kashifa Qureshi",
    handle: "@Kashifa23",
    cardImage: "/cards/card-23.png",
    role: "Community Engagement & Information Desk",
    code: "CREW-23",
  },
  {
    id: 24,
    name: "Prity Kumari",
    handle: "@prity2008",
    cardImage: "/cards/card-24.png",
    role: "Hospitality & Speaker Stage Care",
    code: "CREW-24",
  },
  {
    id: 25,
    name: "Gopal Kumar",
    handle: "@gopalkumar",
    cardImage: "/cards/card-25.png",
    role: "Arena Floor Operations",
    code: "CREW-25",
  },
  {
    id: 26,
    name: "Ayra Ahmed",
    handle: "@ayraahmed1717v",
    cardImage: "/cards/card-26.png",
    role: "Media Coordination & Photo Ops",
    code: "CREW-26",
  },
  {
    id: 27,
    name: "Jahanvi Sharma",
    handle: "@jass28",
    cardImage: "/cards/card-27.png",
    role: "Student Registration & Fast Track",
    code: "CREW-27",
  },
  {
    id: 28,
    name: "Sonam Yadav",
    handle: "@sonam1",
    cardImage: "/cards/card-28.png",
    role: "Summit Operations & Information Pod",
    code: "CREW-28",
  },
  {
    id: 29,
    name: "Somya Kapoor",
    handle: "@somya09kapoor",
    cardImage: "/cards/card-29.png",
    role: "Attendee Experience & Coordination",
    code: "CREW-29",
  },
  {
    id: 30,
    name: "Gaurav Gokhe",
    handle: "@gaurav24",
    cardImage: "/cards/card-30.png",
    role: "Technical Support & Arena Audio",
    code: "CREW-30",
  },
  {
    id: 31,
    name: "Kanchan Sahu",
    handle: "@kanchansahu04",
    cardImage: "/cards/card-31.png",
    role: "Registration Logistics & Desk Lead",
    code: "CREW-31",
  },
  {
    id: 32,
    name: "Mahesh Kumar",
    handle: "@mahesh090",
    cardImage: "/cards/card-32.png",
    role: "Campus Ops & Movement Flow",
    code: "CREW-32",
  },
];
