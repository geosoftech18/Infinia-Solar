import React from "react";

interface HeadingProps {
  title: string;
  titleColour?: string;
  titleSize?: string; // Custom size for title
  subtitle?: string;
  subTitleColour?: string;
  subtitleSize?: string; // Custom size for subtitle
  subtitle2?: string;
  subTitle2Colour?: string;
  subtitle2Size?: string; // Custom size for subtitle2
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  titleColour,
  titleSize,
  subtitle,
  subTitleColour,
  subtitleSize,
  subtitle2,
  subTitle2Colour,
  subtitle2Size,
  className,
}) => {
  return (
    <div className={`heading flex flex-col ${className || ""}`}>
      <h1
        className={`font-bold ${titleColour ? titleColour : "text-white"} ${
          titleSize ? titleSize : "text-4xl md:text-5xl lg:text-6xl"
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <div
          className={`font-semibold ${
            subTitleColour ? subTitleColour : "text-white"
          } ${subtitleSize ? subtitleSize : "text-md md:text-lg lg:text-xl"}`}
        >
          {subtitle}
        </div>
      )}
      {subtitle2 && (
        <div
          className={`font-semibold ${
            subTitle2Colour ? subTitle2Colour : "text-white"
          } ${
            subtitle2Size ? subtitle2Size : "text-lg md:text-xl lg:text-2xl"
          }`}
        >
          {subtitle2}
        </div>
      )}
    </div>
  );
};

export default Heading;