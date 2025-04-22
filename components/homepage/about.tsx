"use client";
import { filterAboutCardProps } from "@/lib/utils";
import { Image as ImageType, OurNumbers } from "@/types/homepage";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import AboutCard, { AboutCardProps } from "./aboutCard";
import Text from "../ui/text";
import AnimatedButton from "../ui/animatedButton";
import Heading from "../ui/heading";

const About: React.FC<OurNumbers> = ({
  tag,
  title,
  description,
  imagesCollection,
  buttonText,
  cardsCollection,
  ourNumbersTitleList,
}) => {
  if (
    !tag ||
    !title ||
    !description ||
    !imagesCollection ||
    !buttonText ||
    !cardsCollection ||
    !ourNumbersTitleList
  ) {
    return (
      <div className="flex mx-20 items-center justify-center h-screen bg-red-100 text-red-600 text-lg font-bold">
        Error fetching data. Please try again later.
      </div>
    );
  }
  const aboutCardItems: AboutCardProps[] =
    filterAboutCardProps(cardsCollection);
  const images: ImageType[] = imagesCollection.items.map((item) => ({
    url: item.url,
    description: item.description,
  }));
  // console.log(aboutCardItems.length)
  return (
    <div className="grid grid-cols-5 lg:h-screen m-4 mx-20 gap-5">
      {/* left */}
      <div className="relative col-span-2 flex flex-col items-center justify-center gap-20 h-full">
        <Image
          src={images[0].url}
          alt="About Image"
          width={1920}
          height={1080}
          className="absolute inset-0 max-h-full bg-cover -z-10"
        ></Image>
        {/* <div className="text-6xl font-bold min-h-[100px]">
          {tag} <br />
        <Typewriter
            words={ourNumbersTitleList}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          ></Typewriter> 
        </div> */}
        {/* cards */}
        <div className="flex relative flex-col justify-center h-full gap-10 overflow-hidden">
          {/* <Image
            src={images[1].url}
            alt="Amplus Logo"
            width={1920}
            height={1080}
            className="absolute bg-cover left-10 p-20"
          ></Image> */}
          <Heading
            title={tag}
            titleColour="text-customBlue"
            subtitle={title[0]}
            subtitleSize="text-xl md:text-2xl lg:text-4xl"
            subTitleColour={"text-customOrange"}
            subtitle2={description}
            subTitle2Colour={"text-greyText"}
            subtitle2Size="text-sm md:text-md lg:text-lg"
            className=" text-white gap-10"
          />
          <AnimatedButton className="rounded-full">{buttonText}</AnimatedButton>
        </div>
      </div>
      {/* right */}
      <div className="grid col-span-3 grid-cols-3  mt-4 py-40">
        {aboutCardItems.map((item, index) => (
          <AboutCard
            title={item.title}
            description={item.description}
            counter={item.counter}
            symbol={item.symbol}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
