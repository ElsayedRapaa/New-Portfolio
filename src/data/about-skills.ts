import { MdCode } from "react-icons/md";
import { LuDatabase, LuGauge } from "react-icons/lu";

export const aboutSkills = [
  {
    id: 1,
    mainIcon: MdCode,
    title: "Frontend Development",
    description: "Building responsive, accessible, and maintainable web interfaces with React.js, Next.js, JavaScript, and TypeScript.",
    color: "#387BE8",
    bgGradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    animation: "animate-card-one"
  },
  {
    id: 2,
    mainIcon: LuDatabase,
    title: "API & Data Integration",
    description: "Connecting frontend applications to REST APIs and database services through React.js, Next.js, and supported SDKs.",
    color: "#A855F7",
    bgGradient: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
    animation: "animate-card-two"
  },
  {
    id: 3,
    mainIcon: LuGauge,
    title: "User Experience & Performance",
    description: "Creating reusable interfaces, responsive layouts, and smooth experiences with attention to usability and frontend performance.",
    color: "#EF4444",
    bgGradient: "bg-gradient-to-br from-red-500/20 to-red-600/20",
    animation: "animate-card-three"
  }
];
