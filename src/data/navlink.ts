import { MdHomeFilled, MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { FaDiagramProject } from "react-icons/fa6";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsAwardFill } from "react-icons/bs";

export const navLink = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: MdHomeFilled,
  },
  {
    id: 2,
    title: "About",
    href: "/about",
    icon: FaUserAlt,
  },
  {
    id: 3,
    title: "Skills",
    href: "/skills",
    icon: TbTools,
  },
  {
    id: 4,
    title: "Projects",
    href: "/projects",
    icon: FaDiagramProject,
  },
  {
    id: 5,
    title: "Experience",
    href: "/experience",
    icon: BsFillBookmarkHeartFill,
  },
  {
    id: 6,
    title: "Resume",
    href: "/resume",
    icon: BsAwardFill,
  },
  {
    id: 7,
    title: "Contact",
    href: "/contact",
    icon: MdEmail,
  },
];
