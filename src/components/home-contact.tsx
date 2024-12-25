import React, { useState } from "react";
import { GoCopy } from "react-icons/go";

interface HomeContactProps {
  title: string;
  contactID: string;
}

const HomeContact: React.FC<HomeContactProps> = ({ title, contactID }) => {
  const [copy, setCopy] = useState("");
  const [activeCopy, setActiveCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contactID).then(() => {
      setCopy("Copied!");
      setActiveCopy(true);
      setTimeout(() => {
        setActiveCopy(false);
      }, 1500);
    });
  };

  return (
    <div
      className="
        flex
        items-center
        justify-between
        px-4
        py-2
        rounded-lg
        bg-gray-700/30
        hover:bg-gray-700/50
        duration-200
        shadow-md
        group
        cursor-pointer
        relative
        animate-text-bigger
      "
      onClick={handleCopy}
    >
      <div>
        <p
          className="
            text-gray-300/70
            text-sm
            uppercase
          "
        >
          {title}
        </p>
        <p
          className="
            text-gray-200
            font-medium
          "
        >
          {contactID}
        </p>
      </div>
      <div
        className="
          text-gray-400
          group-hover:text-blue-400
          duration-200
        "
      >
        <GoCopy size={24} />
      </div>
      {activeCopy && copy && (
        <div
          className="
            absolute
            w-fit
            h-fit
            -top-7
            right-0
            bg-green-500
            text-white
            rounded-lg
            px-1
          "
        >
          {copy}
        </div>
      )}
    </div>
  );
};

export default HomeContact;
