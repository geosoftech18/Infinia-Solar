import { Card as CardType, Section } from "@/types/homepage";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 lg:p-12">
      {/* Left Section: Tag, Title, and Image */}
      <div className="flex flex-col items-start gap-6">
        <div className="text-sm font-bold text-blue-500 uppercase">{tag}</div>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
          {title}
        </h2>
        <img
          src={imagesCollection.items[0].url}
          alt="Renewable Energy"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Right Section: Description, Cards, and Button */}
      <div className="flex flex-col gap-6">
        <p className="text-gray-600 text-base lg:text-lg">{description}</p>

        {/* Cards */}
        <div className="grid grid-rows-3 gap-4">
          {cardsCollection.items.map((card, index) => (
            <WhyRECard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>

        {/* Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            {buttonText}
        </button>
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
    <Card className="flex flex-row items-center p-4 bg-white shadow-md rounded-lg">
      <CardTitle >
        <Image src={image.url} alt={title} width={100} height={100} />
      </CardTitle>
      <CardContent  >
        <div>{title}</div>
        <div>{description}</div>
      </CardContent>
    </Card>
  );
};

export default WhyRE;
