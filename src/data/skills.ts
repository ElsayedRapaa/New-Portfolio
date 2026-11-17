import { FaCode, FaRegFileLines, FaVial } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { LuGitBranch, LuMonitorSmartphone, LuPanelsTopLeft, LuWorkflow } from "react-icons/lu";

export const skills = [
  {
    id: 1,
    mainIcon: FaCode,
    title: "Frontend Core",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js"
    ],
    color: "#387BE8",
    bgGradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    animation: "animate-card-one"
  },
  {
    id: 2,
    mainIcon: LuPanelsTopLeft,
    title: "React & Next.js",
    skills: [
      "React Hooks",
      "React Router",
      "Next.js App Router & Pages Router",
      "Server and Client Components",
      "SSR, SSG & ISR",
      "Dynamic Routing, Metadata & SEO",
      "Server Actions and Route Handlers"
    ],
    color: "#A855F7",
    bgGradient: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
    animation: "animate-card-two"
  },
  {
    id: 3,
    mainIcon: LuWorkflow,
    title: "State Management & Data Fetching",
    skills: [
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "TanStack Query",
      "Axios",
      "Fetch API",
      "REST API Integration"
    ],
    color: "#FB923C",
    bgGradient: "bg-gradient-to-br from-orange-500/10 to-orange-600/10",
    animation: "animate-card-three"
  },
  {
    id: 4,
    mainIcon: LuMonitorSmartphone,
    title: "UI, Styling & Forms",
    skills: [
      "Responsive Web Design",
      "Flexbox & CSS Grid",
      "Tailwind CSS",
      "Sass / SCSS",
      "Material UI",
      "shadcn/ui",
      "React Hook Form",
      "Formik & Zod",
      "File and Image Upload Interfaces"
    ],
    color: "#F87171",
    bgGradient: "bg-gradient-to-br from-red-500/20 to-red-600/20",
    animation: "animate-card-four"
  },
  {
    id: 5,
    mainIcon: GoDatabase,
    title: "API & Database Integration",
    skills: [
      "CRUD Operations",
      "API Requests & Error Handling",
      "Authentication & Authorization Integration",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Firebase",
      "Appwrite",
      "Neon"
    ],
    color: "#818CF8",
    bgGradient: "bg-gradient-to-br from-indigo-500/10 to-indigo-600/10",
    animation: "animate-card-five"
  },
  {
    id: 6,
    mainIcon: FaVial,
    title: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "Unit Testing"
    ],
    color: "#9CA3AF",
    bgGradient: "bg-gradient-to-br from-gray-500/10 to-gray-600/10",
    animation: "animate-card-six"
  },
  {
    id: 7,
    mainIcon: LuGitBranch,
    title: "Tools & Workflow",
    skills: [
      "Git & GitHub",
      "Git Branching, Merging & Conflict Resolution",
      "Vercel",
      "Netlify",
      "Figma-to-Code Implementation",
      "ChatGPT, GitHub Copilot & Google Gemini"
    ],
    color: "#34D399",
    bgGradient: "bg-gradient-to-br from-emerald-500/10 to-emerald-600/10",
    animation: "animate-card-six"
  }
];
