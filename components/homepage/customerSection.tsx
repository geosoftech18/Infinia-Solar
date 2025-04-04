"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Section } from "@/types/homepage";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const CustomerSection: React.FC<Section> = ({
  title,
  imagesCollection,
  tag,
  description,
}) => {
  if (
    !imagesCollection ||
    imagesCollection.items.length === 0 ||
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
  const [, setCurrent] = React.useState(0);

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
    <div className="flex flex-col items-center justify-center w-full py-16 ">
      <div className="max-w-6xl flex flex-col items-center text-center justify-center">
        {/* Section Header */}
        <h2 className="flex text-xl items-center  mb-8">
          <div>{tag}</div>
        </h2>
        <h2 className=" w-2/4 text-3xl text-indigo-800 text-center font-semibold  mb-8">
          {title}
        </h2>
        <div className="text-xl">{description}</div>

        {/* Carousel */}
        <div className="w-full mt-10">
          <Carousel
            setApi={setApi}
            orientation="horizontal"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            {/* Carousel Content */}
            <CarouselContent className="mx-auto h-[50vh]">
              {imagesCollection?.items.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <Card
                    key={index}
                    className="w-full max-h-fit  max-w-4xl mx-auto shadow-lg  border-none p-8"
                  >
                    <CardHeader className="flex flex-col items-center gap-4">
                      <CardTitle className="text-2xl font-semibold flex items-center  gap-5">
                        <Image
                          src={testimonial.url || ""}
                          alt={testimonial.title || ""}
                          width={100}
                          height={100}
                          className="bg-cover rounded-full"
                        />
                      </CardTitle>
                      <CardDescription className="text-lg  italic">
                        {testimonial.title}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
