import React from "react";
import { IconType } from "react-icons";

interface ContactItemProps {
  icon: IconType;
  title: string;
  value: string;
  border: string;
  bg: string;
  bg2: string;
  color: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  title,
  value,
  border,
  bg,
  bg2,
  color,
}) => {
  return (
    <div
      className={`
        border
        ${border}
        ${bg}
        rounded-lg
        p-4
        shadow-lg
        mb-6
        hover:translate-x-4
        duration-200
      `}
    >
      <div
        className="
          flex
          items-center
          space-x-4
        "
      >
        <div
          className={`
            flex
            items-center
            justify-center
            rounded-xl
            ${bg2}
            ${color}
            h-12
            w-12
          `}
        >
          <Icon size={26} />
        </div>
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-white">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
