import { FaCode, FaRegFileLines } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { LuGitBranch } from "react-icons/lu";
import { FaShieldAlt } from "react-icons/fa";
import { FaTv } from "react-icons/fa";

export const skills = [
  {
    id: 1,
    mainIcon: FaCode,
    title: "Frontend",
    skills: [
      "HTML/HTML5",
      "CSS/CSS3",
      "React.js",
      "Next.js",
      "JavaScript ES6+",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Sass & Less",
    ],
    color: "#387BE8",
    bgGradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    animation: "animate-card-one",
  },
  {
    id: 2,
    mainIcon: GoDatabase,
    title: "Database & DevOps",
    skills: [
      "MongoDB",
      "PostgresSQL",
      "Docker",
      "Google Firebase",
      "AppWrite",
      "Neon-Tech",
      "CI/CD Pipelines",
    ],
    color: "#A855F7",
    bgGradient: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
    animation: "animate-card-two",
  },
  {
    id: 3,
    mainIcon: LuGitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Version Control Best Practices"],
    color: "#FB923C",
    bgGradient: "bg-gradient-to-br from-orange-500/10 to-orange-600/10",
    animation: "animate-card-three",
  },
  {
    id: 4,
    mainIcon: FaShieldAlt,
    title: "Security",
    skills: [
      "OAuth 2.0",
      "JWT Implementation",
      "Data Encryption",
      "Security Auditing",
    ],
    color: "#F87171",
    bgGradient: "bg-gradient-to-br from-red-500/20 to-red-600/20",
    animation: "animate-card-four",
  },
  {
    id: 5,
    mainIcon: FaTv,
    title: "Testing",
    skills: [
      "React Tisting Library",
      "Jest",
      "Unit Test",
      "Performance Testing",
      "API Testing (Postman)",
      "Automated Testing CI/CD",
    ],
    color: "#818CF8",
    bgGradient: "bg-gradient-to-br from-indigo-500/10 to-indigo-600/10",
    animation: "animate-card-five",
  },
  {
    id: 6,
    mainIcon: FaRegFileLines,
    title: "Documentation",
    skills: [
      "API Documentation (OpenAPI)",
      "Tecnical Documentation",
      "Code Documentation",
      "Architecture Diagrams",
      "User Guides & Manuals",
      "Project Documentation",
      "Knowledge Base Management",
    ],
    color: "#9CA3AF",
    bgGradient: "bg-gradient-to-br from-gray-500/10 to-gray-600/10",
    animation: "animate-card-six",
  },
];