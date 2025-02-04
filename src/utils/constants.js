import AttendEase from "../assets/AttendEase.png";
import Blogify from "../assets/Blogify.png";
import Kayanou from "../assets/Kayanou.png";

const experienceData = [
  {
    role: "Data Analyst Intern",
    company: "Cavendish Maxwell",
    period: "May 2024 - Aug 2024",
    details: [
      "Deployed a web scraper to AWS Cloud Server built using Python and containerized in Docker to automate the extraction of geographical coordinates for 100,000+ properties from Makani.ae.",
      "Designed interactive PowerBI dashboards to visualize property price models, delivering actionable insights for comparative analysis across different models.",
      "Documented property management workflows, streamlining team onboarding and reducing training time by 30%."
    ]
  },
  {
    role: "Business Analyst Intern",
    company: "Interact Health PRO",
    period: "Oct 2023 - Feb 2024",
    details: [
      "Consolidated and integrated data from Keap and Squarespace into the Groove platform, leading to a significant 10% reduction in operational costs and streamlining data management processes.",
      "Increased user sign-ups by 25% by designing optimized landing pages for rehabilitation programs"
    ]
  },
  {
    role: "Sales and Marketing Intern",
    company: "Al Ghurair Investment",
    period: "May 2023 - Aug 2023",
    details: [
      "Led the Recycling initiative with a budget allocation of AED50K, focusing on the responsible disposal and repurposing of Glitch Balls for stationery manufacturing.",
      "Created content for social media platforms, including Facebook and Instagram, increasing page traffic by 10%.",
      "Developed and strengthened relationships with media, bloggers, and influencers to boost brand coverage."
    ]
  },
  {
    role: "Risk Analyst Intern",
    company: "Al Ghurair Energy",
    period: "May 2022 - Aug 2022",
    details: [
      "Collaborated with senior analysts to implement a Value at Risk (VAR) system, enhancing risk assessment accuracy and informing decisions for $4M in trade books.",
      "Increased P&L reporting efficiency by 20% through streamlined processes and automation.",
      "Optimized data migration from Aspect to Dynamics 365, improving data transfer accuracy and consistency.",
      "Oversaw trade operations for Petrochemicals, Gasoil, and Dry Commodities, ensuring compliance."
    ]
  }
];

const projects = [
  {
    title: "AttendEase",
    image: AttendEase,
    demoLink: "https://github.com/CMPUT301-W24-T54/AttendEase.git",
    codeLink: "https://github.com/CMPUT301-W24-T54/AttendEase.git",
    techStack: ["Java", "Android", "Firebase"]
  },
  {
    title: "Blogify",
    image: Blogify,
    demoLink: "https://hamzas-blog.onrender.com/",
    codeLink: "https://github.com/muhammadhamza14210/Blog.git",
    techStack: ["NodeJS", "MongoDB", "Express", "React"]
  },
  {
    title: "Kayanou",
    image: Kayanou,
    demoLink: "https://kayanou.onrender.com/",
    codeLink: "https://github.com/UAlberta-CMPUT401/f24project-Kayanou",
    techStack: ["NodeJS", "MongoDB", "Express", "React"]
  },
];

const techColors = {
  React: "bg-blue-500 text-white",
  "Next.js": "bg-black text-white",
  JavaScript: "bg-yellow-500 text-black",
  Tailwind: "bg-teal-400 text-white",
  Firebase: "bg-orange-500 text-white",
  MongoDB: "bg-green-500 text-white",
  Express: "bg-gray-700 text-white",
  TypeScript: "bg-blue-700 text-white",
  NodeJS: "bg-green-700 text-white",
  Java: "bg-red-500 text-white",
  Android: "bg-green-600 text-white"
};

export { experienceData, projects, techColors };
