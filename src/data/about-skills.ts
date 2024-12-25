import { MdCode } from "react-icons/md";
import { LuRocket } from "react-icons/lu";
import { FaConnectdevelop } from "react-icons/fa6";

export const aboutSkills = [
  {
    id: 1,
    mainIcon: MdCode,
    title: "Frontend",
    description: "Expert in modern frontend frameworks and responsive design",
    color: "#387BE8",
    bgGradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    animation: "animate-card-one",
  },
  {
    id: 2,
    mainIcon: FaConnectdevelop,
    title: "DevOps",
    description: "Implementing efficient CI/CD pipelines and cloud solutions",
    color: "#A855F7",
    bgGradient: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
    animation: "animate-card-two",
  },
  {
    id: 3,
    mainIcon: LuRocket,
    title: "Perfoemance",
    description: "Optimizing applications for maximum speed and efficiency",
    color: "#EF4444",
    bgGradient: "bg-gradient-to-br from-red-500/20 to-red-600/20",
    animation: "animate-card-three",
  },
];
