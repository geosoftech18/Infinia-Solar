import { Card as CardType, Section } from "@/types/homepage";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import BulletPoint from "@/public/assets/bulletPoint";

export type WhyREProps = Pick<CardType, "title" | "description" | "image">;

const WhyRE: React.FC<Section> = ({
  tag,
  title,
  imagesCollection,
  description,
  cardsCollection,
  buttonText,
}) => {
  if (
    !title ||
    !description ||
    !imagesCollection ||
    !buttonText ||
    !cardsCollection
  ) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-600 text-lg font-bold">
        Error fetching data. Please try again later.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 lg:p-12 ">
      {/* Left Section: Tag, Title, and Image */}
      <div className="flex flex-col items-start ">
        <div className="text-sm font-semibold text-customOrange uppercase flex items-center">
          <BulletPoint />
          {tag}
        </div>
        <div className="text-3xl lg:text-4xl font-semibold text-customBlue h-40">
          <span>{title[0]}</span>
          <span className="text-customOrange whitespace-nowrap">
            {title[1]}
          </span>
          <span className="">{title[2]}</span>
        </div>

        <Image
          src={imagesCollection.items[0].url}
          alt="Renewable Energy"
          width={600}
          height={300}
          className=""
        />
      </div>

      {/* Right Section: Description, Cards, and Button */}
      <div className="flex flex-col gap-6 h-full justify-between pt-16">
        {/* <p className="text-gray-600 text-base lg:text-lg">{description}</p> */}

        {/* Cards */}
        <div className="grid grid-rows-3 gap-10">
          {cardsCollection.items.map((card, index) => (
            <div key={index}>
              <WhyRECard
                title={card.title}
                description={card.description}
                image={card.image}
              />
              {/* Add a divider except after the last card */}
              {index < cardsCollection.items.length - 1 && (
                <div className="my-1 border-t border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        {/* <button className="relative overflow-hidden bg-customOrange text-black px-6 py-3 rounded-full group w-2/5">
          <span className="absolute inset-0 bg-customGreen transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center "></span>
          <span className="relative z-10 text-white">{buttonText}</span>
        </button> */}
      </div>
    </div>
  );
};

const WhyRECard: React.FC<WhyREProps> = ({ title, description, image }) => {
  if (!title || !description || !image) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-600 text-lg font-bold">
        Error fetching data. Please try again later.
      </div>
    );
  }

  return (
    <Card className="flex border-none shadow-none flex-row items-center p-4 bg-white  rounded-lg">
      <CardTitle>
        <Image
          src={image.url}
          alt={title}
          width={100}
          height={100}
          className="hover:animate-rotation"
        />
      </CardTitle>
      <CardContent>
        <div className="font-semibold">{title}</div>
        <div>{description}</div>
      </CardContent>
    </Card>
  );
};

export default WhyRE;
