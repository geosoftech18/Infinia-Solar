import React from "react";

interface HeadingProps {
  title: string;
  titleColour?:string;
  subtitle?: string;
  subtitle2?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, titleColour, subtitle, subtitle2, className }) => {
  return (
    <div className={`heading flex flex-col ${className || ""}`}>
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${titleColour? `${titleColour}`:'text-white'}`}>{title}</h1>
      {subtitle && (
        <div className="text-2xl font-semibold md:text-3xl lg:text-4xl ">
          {subtitle}
        </div>
      )}
      {subtitle2 && (
        <div className="text-lg font-semibold md:text-xl lg:text-2xl ">
          {subtitle2}
        </div>
      )}
    </div>
  );
};

export default Heading;