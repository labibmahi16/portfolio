// ============================================================
//  ALL YOUR CONTENT LIVES HERE — edit this file to update the site
// ============================================================

export const profile = {
  name: "K.M Mahir Labib",
  handle: "mahir",
  title: "CSE Undergraduate",
  roles: [
    "CSE undergrad @ BRAC University",
    "web & map-based app builder",
    "researcher at the law × tech boundary",
    "photographer & founder",
  ],
  location: "Dhaka, Bangladesh",
  summary:
    "Computer Science and Engineering undergraduate at BRAC University who builds and deploys web applications using AI-assisted development workflows. I make map-based discovery apps for Dhaka, run a used-camera resale business, and research where technology can strengthen law.",
  photo: "/images/profile.jpg", // put your photo at public/images/profile.jpg
  resume: "/KMML_CV.pdf", // put your CV at public/KMML_CV.pdf
};

export const links = {
  email: "labibmahi7@gmail.com",
  github: "https://github.com/labibmahi16",
  linkedin: "https://www.linkedin.com/in/k-m-mahir-labib-1b37b0277",
  instagram: "https://www.instagram.com/digitalcamsbd", // Digital Cams BD business page
  facebook: "https://www.facebook.com/7labibmahi",
};

// Your photography Instagram — shown at the top of the Gallery section.
// Leave url empty ("") to hide it.
export const photography = {
  handle: "@labib.zip",
  url: "https://www.instagram.com/labib.zip/",
};

export const stats = [
  { value: 3, suffix: "", label: "live web apps deployed" },
  { value: 3, suffix: "", label: "research papers co-authored" },
  { value: 2, suffix: "", label: "club roles (BUCC, NASC)" },
  { value: 2029, suffix: "", label: "expected graduation", noCount: true },
];

export const education = {
  school: "BRAC University",
  degree: "B.Sc. in Computer Science and Engineering",
  place: "Dhaka, Bangladesh",
  expected: "Expected graduation: 2029",
};

export const skills = {
  languages: ["Java", "JavaScript", "TypeScript"],
  frontend: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  maps_data: ["Leaflet", "OpenStreetMap", "Geolocation", "Node.js scrapers"],
  backend: ["Supabase", "SQL", "Authentication"],
  tools: ["Git", "GitHub", "VS Code", "Vercel", "Mathematica"],
  other: ["AI-assisted development", "Debugging", "Deployment"],
};

export const projects = [
  {
    title: "Digital Cams BD",
    tag: "Catalog + Admin Panel",
    description:
      "A database-driven catalog website for a used camera resale business, built to cut down repetitive customer messages on Instagram. Includes a private, authenticated admin panel for managing listings.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    live: "https://digital-cams-bd.vercel.app/",
    repo: "",
    image: "/images/projects/digital-cams.jpg",
  },
  {
    title: "Dhaka Hangout Finder",
    tag: "Map-based Discovery",
    description:
      "A location-based platform for restaurants, parks, malls and hangout spots in Dhaka. Geolocation, radius filtering, an interactive Leaflet map with routing and live place data — fed by a custom Node.js scraper that cleans OpenStreetMap data.",
    stack: ["React", "Leaflet", "OpenStreetMap", "Node.js", "Vercel"],
    live: "https://dhaka-hangout-finder.vercel.app/",
    repo: "",
    image: "/images/projects/hangout-finder.jpg",
  },
  {
    title: "Dhaka Poshur Hat Finder",
    tag: "Seasonal Utility App",
    description:
      "A web app that helps people discover nearby Qurbani livestock markets, with interactive maps, location-based search and distance filtering.",
    stack: ["React", "Leaflet", "Geolocation", "Vercel"],
    live: "https://dhaka-poshur-hat.vercel.app/",
    repo: "",
    image: "/images/projects/poshur-hat.jpg",
  },
];

export const research = [
  {
    title: "How Attachment Style Shapes Fear of Rejection and Friendship Formation Among BRAC University Undergraduates",
    status: "published on Zenodo",
    role: "Co-author (one of six) · mixed-methods study",
    authors:
      "Md. Monjurul Hasan Bhuiyan, Khan Abdullah, Azmyeen Nahian, KM Mahir Labib, Tasfia Hasan, Maysha Mahjabin",
    venue: "Open-access archive: report, de-identified data, codebook and reproducible Python analysis scripts",
    summary:
      "A convergent mixed-methods study of 103 BRAC University undergraduates plus a nine-student focus group. It compares a prototype-based measure of attachment style with dimensional anxiety and avoidance scales, and finds that the prototype predicts behaviour the scales miss. It also shows that which friendship situations students avoid depends more on the situation than on the person.",
    keywords: ["Attachment style", "Mixed methods", "Social psychology", "Open data", "Python"],
    link: "https://zenodo.org/records/22118327",
    linkLabel: "Read on Zenodo ↗",
  },
  {
    title: "Burning Through the Gaps: The Lack of Legality and Technology in Fire Disaster Management",
    status: "presented",
    role: "Co-author (CSE), with School of Law lead author Tasfia Bari Prionty",
    venue: "NSU Law Fest Season III (2026) — hosted by the North South University Law and Mooting Society",
    summary:
      "Argues that Bangladesh needs stronger enforcement of existing fire-safety law through technology, and proposes a national compliance registry, IoT sensors, and GIS and drone surveys of high-risk buildings.",
    keywords: ["Legal-tech", "IoT", "GIS", "Drone surveys", "Compliance registry"],
  },
  {
    title: "When Seeing Is No Longer Believing: The Legal and Technical Challenges of AI-Generated Deepfakes in Bangladesh",
    status: "co-authored",
    role: "Co-author — technical (CSE) perspective, alongside a law co-author",
    venue: "", // <-- add the fest / conference name here if you like
    summary:
      "A doctrinal and comparative study of how Bangladesh's law handles AI-generated deepfakes, focusing on detection gaps and evidentiary standards. It draws on the Cyber Security Ordinance 2025 and the Cyber Security Amendment Act 2026, with EU AI Act Article 50 as a comparative anchor.",
    keywords: ["Deepfakes", "AI law", "Evidence", "Detection", "Comparative law"],
  },
];

// Shown like a `git log` — newest first
export const timeline = [
  {
    hash: "a7f3c21",
    date: "ongoing",
    title: "Founder, Digital Cams BD",
    body:
      "Run a used digital camera resale business: sourcing, listings, pricing, order fulfilment, customer service and all social-media marketing — solo.",
  },
  {
    hash: "5b9e0d4",
    date: "2026 — now",
    title: "Research & Development, General Member — BUCC",
    body:
      "BRAC University Computer Club. Active in every duty, contributing creative ideas and helping implement them.",
  },
  {
    hash: "09e4b62",
    date: "2026",
    title: "Presented at NSU Law Fest Season III",
    body: "Co-authored and presented a law × technology paper on fire disaster management.",
  },
  {
    hash: "c18d7aa",
    date: "2023 — 24",
    title: "Photography Secretary — NASC",
    body:
      "Neutrino ACC Science Club panel member. Fulfilled the duties of the role and earned the Award of Excellence.",
  },
];

export const achievements = [
  "Award of Excellence — NASC",
  "Certificate of Completion — Digital Dojo (BUCC)",
  "Certificate of Participation — NSU Law Fest Season III",
];

export const interests = [
  "Software engineering",
  "Entrepreneurship",
  "Teaching",
  "Photography",
  "Research",
];

export const languages = [
  { name: "Bangla", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

// Drop photos in public/images/gallery/ and list them here
export const gallery = [
  { src: "/images/gallery/1.jpg", caption: "Frame 01" },
  { src: "/images/gallery/2.jpg", caption: "Frame 02" },
  { src: "/images/gallery/3.jpg", caption: "Frame 03" },
  { src: "/images/gallery/4.jpg", caption: "Frame 04" },
  { src: "/images/gallery/5.jpg", caption: "Frame 05" },
  { src: "/images/gallery/6.jpg", caption: "Frame 06" },
];
