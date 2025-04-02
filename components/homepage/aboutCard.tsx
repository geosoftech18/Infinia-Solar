import { Card } from "@/types/homepage";
import CountUp from "../ui/countUp";

export type AboutCardProps = Pick<Card, "title" | "description" | "counter" | "symbol">;

const AboutCard:React.FC<AboutCardProps> = ({title,description,counter,symbol}) => {
  return (
    <div className="bg-[#165D8E] rounded-lg text-white p-2">
      <CountUp initialValue={0} finalValue={counter || 100} symbol={symbol}/>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default AboutCard;
