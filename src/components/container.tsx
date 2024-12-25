import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-12
        lg:px-8
        sm:px-4
        px-2
        relative
      "
    >
      {children}
    </div>
  );
};

export default Container;
