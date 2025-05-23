import Image from "next/image";
import { Image as ImageType} from "@/types/homepage";
import AnimatedButton from "../ui/animatedButton";
import Heading from "../ui/heading";

interface HeroProps {
  heroTitle: string;
  heroSubtitle: string;
  heroSubtitle2: string;
  heroButtonText: string;
  heroImage: ImageType;
}

const Hero: React.FC<HeroProps> = ({
  heroTitle,
  heroSubtitle,
  heroButtonText,
  heroImage,
}) => {
  return (
    <div className="relative h-screen flex flex-col items-start justify-center  rounded-sm m-4">
      <Image
        src={heroImage.url}
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-full absolute object-cover object-center -z-10 rounded-sm "
      ></Image>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xs -z-10 rounded-sm"></div>
      <div className="pl-10 w-full flex flex-col gap-20">
        <Heading
          title={heroTitle}
          titleColour="text-white"
          subtitle={heroSubtitle}
          // subtitle2={heroSubtitle2}
          className="w-2/3 text-white gap-10"
        />
        <AnimatedButton className="rounded-full w-1/4 h-10">
          {heroButtonText}
        </AnimatedButton>
      </div>
      <div className="absolute bottom-1/4 right-10 text-white text-sm font-semibold">
        {heroImage.description}
      </div>
    </div>
  );
};

export default Hero;
