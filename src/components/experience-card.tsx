import React from "react";
import {
  MdWorkOutline,
  MdOutlineDateRange,
  MdArrowForwardIos,
} from "react-icons/md";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  date: string;
  desccription: string[];
  color: string;
  bgGradient: string;
  animation: string;
  flex?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  date,
  desccription,
  color,
  bgGradient,
  animation,
  flex,
}) => {
  return (
    <div
      className={`
        p-8
        rounded-2xl
        ${bgGradient}
        ${animation}
        shadow-lg
      `}
    >
      <div
        className="
          flex
          items-center
          gap-x-4
        "
      >
        <MdWorkOutline size={24} color={color} />
        <h2
          className="
            text-xl
            font-semibold
            text-white
          "
        >
          {title}
        </h2>
      </div>
      <div
        className={`
          my-6
          ${flex && "flex items-center justify-between"}
        `}
      >
        <p
          className="
            text-lg
            text-gray-300
          "
        >
          {subtitle}
        </p>
        <div
          className="
            text-sm
            text-gray-400
            flex
            items-center
          "
        >
          <MdOutlineDateRange size={20} className="mr-2" />
          <p>{date}</p>
        </div>
      </div>
      <div
        className="
          mt-4
        "
      >
        {desccription.map((desc, index) => (
          <div
            key={index}
            className="
              text-gray-300
              flex
              items-center
              mb-4
            "
          >
            <MdArrowForwardIos
              size={20}
              color={color}
              className="mr-4 flex-shrink-0"
            />
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
