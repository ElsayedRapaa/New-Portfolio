import React from "react";
interface PageTitleProps {
  title: string;
  subTitle?: string;
  center?: boolean;
  textBig?: boolean;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subTitle,
  center,
  textBig,
}) => {
  return (
    <div
      className={`
        w-fit
        ${center ? "mx-auto text-center" : "mr-auto"}
        mb-4
      `}
    >
      <h5
        className="
          text-blue-400
          font-medium
          text-sm
          uppercase
          tracking-wider
          mb-6
          animate-text-to-top
        "
      >
        {title}
      </h5>
      <h1
        className={`
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-blue-400
          via-purple-400
          to-emerald-400
          ${textBig ? "md:text-7xl" : "md:text-5xl"}
          text-5xl
          font-bold
          mb-6
          animate-text-bigger
        `}
        style={{ fontFamily: "sans-serif" }}
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default PageTitle;
