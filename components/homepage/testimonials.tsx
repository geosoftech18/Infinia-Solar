"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BulletPoint from "@/public/assets/bulletPoint";
import { Section } from "@/types/homepage";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials: React.FC<Section> = ({ title, cardsCollection, tag }) => {
  if (
    !cardsCollection ||
    cardsCollection.items.length === 0 ||
    !title ||
    !tag
  ) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-600 text-lg font-bold">
        Error fetching data. Please try again later.
      </div>
    );
  }
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full py-16 bg-customBlue">
      {/* Section Header */}
      <h2 className="flex items-center text-customGreen font-bold mb-8">
        <BulletPoint />
        <div className="text-customOrange">{tag}</div>
      </h2>
      <h2 className="text-6xl w-2/4 text-center font-semibold text-white mb-8">
        {title}
      </h2>

      {/* Carousel */}
      <div className="w-full ">
        <Carousel setApi={setApi} orientation="horizontal">
          {/* Navigation Buttons */}
          {/* <div className="absolute -top-10 right-0 flex items-center justify-between gap-4">
            <CarouselPrevious className="p-2 h-10 w-10 bg-gray-200 hover:bg-gray-300 rounded-full" />
            <CarouselNext className="p-2 h-10 w-10 bg-gray-200 hover:bg-gray-300 rounded-full" />
          </div> */}

          {/* Carousel Content */}
          <CarouselContent className="mx-auto px-10">
            {cardsCollection?.items.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Card
                  key={index}
                  className="w-full h-full max-w-4xl mx-auto shadow-lg bg-customBlueLight border-none p-8 rounded-lg"
                >
                  {/* Card Header */}
                  <CardHeader className="flex flex-col items-start gap-4">
                    {/* Video or Image */}
                    <CardTitle className="text-2xl font-semibold flex items-center text-white gap-5">
                      {testimonial.image?.url ? (
                        <video
                          width="320"
                          height="240"
                          controls
                          preload="none"
                          className="rounded-lg"
                        >
                          <source
                            src={testimonial.image?.url || ""}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="relative w-20 h-20 rounded-full border-2 border-customGrey">
                          <Image
                            src={testimonial.image?.url || ""}
                            alt={testimonial.image?.description || ""}
                            width={100}
                            height={100}
                            className="absolute bg-cover rounded-full"
                          />
                          <Quote className="w-6 h-6 absolute -bottom-2 left-1/2 -translate-x-1/2 text-customGreen" />
                        </div>
                      )}
                    </CardTitle>

                    {/* Testimonial Title and Bullet Points */}
                    <CardDescription className="text-lg text-white/70 italic">
                      {/* <div className="relative w-20 h-20 rounded-full border-2 border-customGrey">
                        <Image
                          src={testimonial.image?.url || ""}
                          alt={testimonial.image?.description || ""}
                          width={100}
                          height={100}
                          className="absolute bg-cover rounded-full"
                        />
                        <Quote className="w-6 h-6 absolute -bottom-2 left-1/2 -translate-x-1/2 text-customGreen" />
                      </div> */}
                      <div className="flex flex-col items-start">
                        <div className="font-bold text-xl">
                          {testimonial.title}
                        </div>
                        <div className="text-sm text-white/80 flex">
                          {testimonial.bulletPoints?.join(", ")}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="flex flex-col gap-4">
                    {/* Description */}
                    <div className="text-white/90">
                      {testimonial.description}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="text-white font-semibold text-lg">
                        Rating:
                      </div>
                      <div className="flex gap-1">
                        {Array.from({
                          length: testimonial.counter ? testimonial.counter : 5,
                        }).map((_, index) => (
                          <span key={index} className="text-customGold text-lg">
                            ★
                          </span>
                        ))}
                        {Array.from({
                          length: testimonial.counter
                            ? 5 - testimonial.counter
                            : 0,
                        }).map((_, index) => (
                          <span key={index} className="text-gray-500 text-lg">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({
            length: cardsCollection.items.length - 2,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                api?.scrollTo(index);
              }}
              className={`w-5 h-5  rounded-full ${
                current === index + 1 ? " border     border-customGreen " : ""
              } transition-colors duration-300 flex items-center justify-center`}
            >
              <div
                className={`w-1 h-1  rounded-full ${
                  current === index + 1 ? "bg-customGreen " : "bg-gray-400 "
                } transition-colors duration-300`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
