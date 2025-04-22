import { Section } from "@/types/homepage";
import SimpleMapsComponent from "../ui/map1";
import Markdown from 'markdown-to-jsx';
import React from 'react';

const IndiaMap: React.FC<Section> = ({ title, description }) => {
  return (
    <div className="px-20 grid grid-cols-2 items-center justify-center">
      <div className="col-span-1 flex items-center justify-center gap-20 flex-col h-full">
        <div className="text-3xl lg:text-6xl font-semibold text-customBlue h-40">
          <span>{title[0]}</span>
          <span className="text-customOrange whitespace-nowrap">
            {title[1] + " "}
          </span>
          <span>{title[2]}</span>
        </div>
        <div className="text-customBlue text-lg prose prose-blue max-w-none">
          <Markdown>{description ? description.toString() : ""}</Markdown>
        </div>
      </div>

      {/* Map component on the right */}
      <SimpleMapsComponent />
    </div>
  );
};

export default IndiaMap;
