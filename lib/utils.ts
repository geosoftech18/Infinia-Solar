import { AboutCardProps } from "@/components/homepage/aboutCard";
import { Card, CardCollection } from "@/types/homepage";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterAboutCardProps = (
  cardCollection: CardCollection
): AboutCardProps[] => {
  return cardCollection.items.map((card: Card) => ({
    title: card.title,
    description: card.description,
    counter: card.counter,
    symbol: card.symbol,
  }));
};
