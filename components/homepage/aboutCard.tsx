import { Card } from "@/types/homepage";
import CountUp from "../ui/countUp";

export type AboutCardProps = Pick<
  Card,
  "title" | "description" | "counter" | "symbol"
>;

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  counter,
  symbol,
}) => {
  return (
    <div className="bg-customBlue rounded-lg text-white p-6 flex flex-col items-center justify-center  gap-5 shadow-lg m-10 aspect-square">
      {/* Counter Section */}
      <div className="text-2xl font-bold flex items-center justify-center">
        <CountUp initialValue={0} finalValue={counter || 100} symbol={symbol} />
        <div className="text-3xl font-semibold ">{title}</div>
      </div>

      {/* Title */}

      {/* Description */}
      <div className="text-2xl text-white/80">{description}</div>
    </div>
  );
};

export default AboutCard;
