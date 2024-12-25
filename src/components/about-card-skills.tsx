import React from "react";
import { IconType } from "react-icons";

interface AboutCardSkillsProps {
  mainIcon: IconType;
  title: string;
  color: string;
  description: string;
  bgGradient: string;
  animation: string;
}

const AboutCardSkills: React.FC<AboutCardSkillsProps> = ({
  mainIcon: Icon,
  title,
  color,
  description,
  bgGradient,
  animation,
}) => {
  return (
    <div
      className={`
        p-[1px]
        rounded-2xl
        ${bgGradient}
        ${animation}
        shadow-lg
      `}
    >
      <div
        className="
          bg-gray-800/90
          backdrop-blur-sm
          p-6
          rounded-2xl
          h-full
        "
      >
        {/* Card Skills */}
        <div>
          {/* Icon */}
          <div
            className="
              p-4
              rounded-2xl
              w-fit
              h-fit
              flex
              items-center
              justify-center
              mb-4
              bg-gray-700/50
            "
          >
            <Icon size={40} color={color} />
          </div>
          <h3
            className="
              text-xl
              font-semibold
              text-white
              pb-2
            "
          >
            {title}
          </h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCardSkills;
