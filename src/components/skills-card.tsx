import React from "react";
import { IconType } from "react-icons";
import { LuZap } from "react-icons/lu";

interface SkillsCardProps {
  mainIcon: IconType;
  title: string;
  color: string;
  skills: string[];
  bgGradient: string;
  animation: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  mainIcon: Icon,
  title,
  color,
  skills,
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
          <div
            className="
              flex
              items-center
              gap-x-4
            "
          >
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
              <Icon size={28} color={color} />
            </div>
            <h3
              className="
                  text-xl
                  font-semibold
                  text-white
                  pb-2
                  mb-2
                "
            >
              {title}
            </h3>
          </div>
          <div className="flex flex-col gap-y-2">
            {skills.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-x-2
                "
              >
                <LuZap size={20} color={color} />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
