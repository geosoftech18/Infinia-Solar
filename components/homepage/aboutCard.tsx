import { Card } from "@/types/homepage";
import CountUp from "../ui/countUp";

export type AboutCardProps = Pick<Card, "title" | "description" | "counter" | "symbol">;

const AboutCard: React.FC<AboutCardProps> = ({ title, description, counter, symbol }) => {
  return (
    <div className="bg-[#165D8E] rounded-lg text-white p-6 flex flex-col items-start justify-between shadow-lg aspect-square">
      {/* Counter Section */}
      <div className="text-4xl font-bold mb-4">
        <CountUp initialValue={0} finalValue={counter || 100} symbol={symbol} />
      </div>

      {/* Title */}
      <div className="text-5xl font-semibold mb-2">{title}</div>

      {/* Description */}
      <div className="text-3xl text-white/80">{description}</div>
    </div>
  );
};

export default AboutCard;