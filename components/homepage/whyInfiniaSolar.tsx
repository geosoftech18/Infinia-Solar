"use client";
import BulletPoint from "@/public/assets/bulletPoint";
import { Section } from "@/types/homepage";
import Image from "next/image";
import React, { useRef } from "react";

const WhyInfiniaSolar: React.FC<Section> = ({
  tag,
  title,
  imagesCollection,
  description,
  cardsCollection,
}) => {
  const imageRef = useRef<HTMLImageElement>(null); // Ref for the image
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the debounce timeout

  if (!title || !imagesCollection || !cardsCollection || !description) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-600 text-lg font-bold">
        Error fetching data. Please try again later.
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to the container
    const y = e.clientY - rect.top; // Mouse Y relative to the container

    const offsetX = (x - rect.width / 2) / 20; // Adjust the divisor for sensitivity
    const offsetY = (y - rect.height / 2) / 20;

    // Calculate the maximum allowable offsets
    const maxOffsetX = rect.width / 10; // Adjust the divisor for boundary limits
    const maxOffsetY = rect.height / 10;

    // Clamp the offsets to the boundaries
    const boundedOffsetX = Math.max(
      -maxOffsetX,
      Math.min(maxOffsetX, -offsetX)
    );
    const boundedOffsetY = Math.max(
      -maxOffsetY,
      Math.min(maxOffsetY, -offsetY)
    );

    // Debounce the transform update
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${boundedOffsetX}px, ${boundedOffsetY}px)`;
      }
    }, 100); // Adjust the debounce delay as needed (100ms in this case)
  };

  const handleMouseLeave = () => {
    // Reset the image position to the initial state
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    if (imageRef.current) {
      imageRef.current.style.transform = `translate(0, 0)`;
    }
  };

  return (
    <div
      className="grid grid-cols-12  border-t-8 px-28  pb-20 border-customGreen  gap-x-8 gap-y-10 bg-customMint"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="col-span-7 relative">
        <Image
          ref={imageRef}
          src={imagesCollection?.items[0].url}
          alt="Background 1"
          className="absolute -top-10 aspect-[2.5/1]  transition-transform duration-1000"
          width={1920} 
          height={1080}
        />
      </div>
      <div className="col-span-5 flex items-start justify-end flex-col gap-5 mt-16">
        <div className="flex items-center gap-2">
          <BulletPoint />
          <div className="text-[#4AAB3D] font-semibold text-lg">{tag}</div>
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold">{title}</h2>
        <div className="text-lg text-gray-500 ">{description}</div>
      </div>
      {cardsCollection?.items.map((card, index) => (
        <div
          key={index}
          className="flex col-span-3 flex-col items-start justify-center gap-4 mt-10 group "
        >
          {/* Image with hover effect */}
          <div className="flex flex-col items-center justify-center ">
            <Image
              src={card.image?.url || ""}
              alt=""
              className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 group-hover:translate-y-[-10px] relative bg-transparent"
              width={100}
              height={100}
            />

            {/* Shadow below the image */}
            <div className="w-16 h-8 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-2xl font-semibold text-black">{card.title}</h3>
          <p className="text-md text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyInfiniaSolar;
