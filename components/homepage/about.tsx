"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import AboutCard, { AboutCardProps } from "./aboutCard";
import AnimatedButton from "../ui/animatedButton";
import Text from "../ui/text";
import { Card, CardCollection, Image as ImageType, OurNumbers } from "@/types/homepage";
import { filterAboutCardProps } from "@/lib/utils";

const About: React.FC<OurNumbers> = ({
  title,
  description,
  imagesCollection,
  buttonText,
  cardsCollection,
  ourNumbersTitleList
}) => {
  if (
    !title ||
    !description ||
    !imagesCollection ||
    !buttonText ||
    !cardsCollection ||
    !ourNumbersTitleList
  ) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-600 text-lg font-bold">
        Error fetching data. Please try again later.
      </div>
    );
  }
  const aboutCardItems: AboutCardProps[] = filterAboutCardProps(cardsCollection);
  const images:ImageType[] = imagesCollection.items.map((item) => ({
    url: item.url,
    description: item.description,
  }));
  return (
    <div className="grid grid-cols-2 gap-20 lg:h-screen m-4">
      {/* left */}
      <div className="relative flex flex-col items-start justify-center gap-20 h-full">
        <Image
          src={images[0].url}
          alt="About Image"
          width={1920}
          height={1080}
          className="absolute max-h-full -left-10 bg-cover -z-10"
        ></Image>
        <div className="text-5xl font-bold min-h-[100px]">
          We are <br />
          <Typewriter
            words={ourNumbersTitleList}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          ></Typewriter>
        </div>
        {/* cards */}
        <div className="grid grid-cols-4 gap-4 mt-4 w-full ">
          {aboutCardItems.map((item,index) => (
            <AboutCard
              title={item.title}  
              description={item.description}
              counter={item.counter}
              symbol={item.symbol}
              key={index} />
          ))}
        </div>
      </div>
      {/* right */}
      <div className="flex relative flex-col justify-center h-full gap-10 overflow-hidden">
        <Image
          src={images[1].url}
          alt="Amplus Logo"
          width={1920}
          height={1080}
          className="absolute bg-cover left-10 p-20"
        ></Image>
        <Text
          content={description}
        />
        <AnimatedButton className="rounded-full">
          {buttonText}
        </AnimatedButton>
      </div>
    </div>
  );
};

export default About;
