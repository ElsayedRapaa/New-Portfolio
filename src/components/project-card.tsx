import React from "react";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router";

interface ProjectCardProps {
  title: string;
  href: string;
  skills: string[];
  color: string;
  bgGradient: string;
  animation: string;
  img: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  href,
  skills,
  color,
  bgGradient,
  animation,
  img,
}) => {
  return (
    <div
      className={`
        rounded-3xl
        p-[2px]
        ${bgGradient}
        ${animation}
        hover:-translate-y-4
        duration-200
        overflow-hidden
        shadow-lg
      `}
    >
      <div
        className="
          w-full
          h-96
          relative
          group
        "
      >
        <div
          className="
            absolute
            inset-0
            w-full
            h-full
            flex
            items-center
            justify-center
            bg-gradient-to-t
            from-black
            to-transparent
            opacity-0
            group-hover:opacity-100
            duration-300
          "
        >
          <Link
            to={href}
            className="
              bg-transparent
              backdrop-blur-sm
              rounded-lg
              flex
              items-center
              justify-center
              border
              border-white
              p-2
              hover:scale-110
              duration-300
            "
            target="_blank"
          >
            <TbWorld size={24} color="white" className="mr-4" />
            <p className="text-white">View Project</p>
          </Link>
        </div>
        <img
          src={img}
          alt={`Project ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="
          px-8
          py-6
          bg-gray-800
          rounded-b-3xl
        "
      >
        <h2
          className="
            text-white
            text-2xl
            font-semibold
            mb-6
          "
        >
          {title}
        </h2>
        <div
          className="
            flex
            items-center
            flex-wrap
            gap-2
          "
        >
          {skills.map((item, index) => (
            <div
              key={index}
              className={`
                rounded-xl
                p-[2px]
                ${bgGradient}
              `}
            >
              <p
                className="
                  bg-gray-800/90
                  rounded-xl
                  py-1
                  px-2
                  text-xs
                  text-gray-300
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
