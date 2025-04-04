"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BulletPoint from "@/public/assets/bulletPoint";
import { Card, Section } from "@/types/homepage";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SliderButton from "../ui/sliderButton";

const WhyConsultation: React.FC<Section> = ({
  tag,
  title,
  imagesCollection,
  cardsCollection,
}) => {
  console.log(cardsCollection?.items.length);
  const [scrollPosition, setScrollPosition] = useState(0);

  if (!title || !imagesCollection || !cardsCollection) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-600 text-lg font-bold">
        Error fetching data. Please try again later.
      </div>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // console.log(cardsCollection.items.length)
  return (
    <div className="relative w-full  overflow-hidden bg-[#e7f9ee] ">
      {/* Background Images */}
      <Image
        src={imagesCollection.items[2].url}
        alt="Background 1"
        className="absolute top-0 left-0 w-1/2 h-auto object-contain z-0"
        width={1920}
        height={1080}
      />
      <Image
        src={imagesCollection.items[1].url}
        alt="Background 2"
        className="absolute top-10 -right-56 w-1/3 h-auto object-contain z-0"
        width={960}
        height={1080}
      />
      <Image
        src={imagesCollection.items[1].url}
        alt="Background 3"
        className="absolute top-1/2 -right-16 w-1/4 h-auto object-contain z-0"
        width={640}
        height={540}
      />
      <Image
        src={imagesCollection.items[0].url}
        alt="Background 4"
        className="absolute -bottom-1/12 right-1/4 w-1/3 h-auto object-contain z-0"
        style={{
          transform: `translateX(${scrollPosition * 0.2}px)`, // Parallax effect
        }}
        width={200}
        height={200}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 lg:p-12 w-9/10">
        {/* Tag and Heading */}
        <div className="w-full flex flex-col gap-4 mt-20">
          <div className="flex items-center gap-2 ">
            <BulletPoint />
            <div className="text-[#4AAB3D] font-semibold text-lg">{tag}</div>
          </div>
          <h2 className="text-4xl lg:text-6xl w-1/2 font-bold ">{title}</h2>
        </div>

        {/* Carousel */}
        <div className=" mt-10">
          <Carousel
            orientation="horizontal"
            opts={{
              align: "start",
              loop: true,
            }}
            className=""
          >
            <div className="absolute -top-1/4 right-16 flex items-center justify-between gap-44 w-1/10">
              <CarouselPrevious className=" aspect-square p-2 h-16 w-16 text-black bg-white transition-colors fade-in-40 rounded-md" />
              <CarouselNext className=" aspect-square p-2 h-16 w-16 text-black bg-white transition-colors fade-in-40 rounded-md" />
            </div>
            <CarouselContent className="mx-auto overflow-hidden">
              {cardsCollection.items.map((card, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <CarousalCard key={index} {...card} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const CarousalCard = (card: Card) => {
  return (
    <div className="basis-1/3 flex-shrink-0 relative flex flex-col items-between justify-start p-4 bg-black transition-all duration-500 group rounded-md">
      {/* Background Image */}
      <Image
        src={card.image?.url || "/hero.jpg"}
        alt={card.title || "Card Image"}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"
        width={2000}
        height={2000}
      />
      <div className="absolute inset-0 bg-white rounded-md group-hover:bg-blue-900/70 transition-colors duration-500"></div>

      {/* Content */}
      <div className="relative flex flex-col items-start justify-between w-full h-full p-4 overflow-visible aspect-[3/4] rounded-md">
        <Image
          src={card.image?.url || ""}
          alt={card.title || "Card Icon"}
          className="  top-0 left-0 p-4 bg-[#4AAB3D] text-white rounded-lg"
          width={100}
          height={100}
        />
        <h3 className="text-2xl font-bold group-hover:text-white mb-2">
          {card.title}
        </h3>
        <p className="text-lg text-gray-400">{card.description}</p>
        <div className="mt-4 w-full">
          {card.bulletPoints?.map((item, index) => (
            <div
              className="group-hover:text-white flex items-center justify-start gap-2"
              key={index}
            >
              <ChevronRight className="text-[#4AAB3D]" size={16} />
              {item}
            </div>
          ))}
        </div>
        <SliderButton />
      </div>
    </div>
  );
};

export default WhyConsultation;
