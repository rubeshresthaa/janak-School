"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroData = [
  {
    image:
      "https://9elxk53npy.ufs.sh/f/QhMAqie5IhdLaFAviWDLPL6lSUqd7k0rQDBopitFYeWgcKfZ",
  },
  {
    image:
      "https://9elxk53npy.ufs.sh/f/QhMAqie5IhdL15Vz7A3xziT8X9ouegnNUAp6DL5Y4JwmQqG2",
  },
  {
    image:
      "https://9elxk53npy.ufs.sh/f/QhMAqie5IhdLCfrNqvj2E4z31HhiNcQ0gkUnGCLBylu6aJet",
  },
];
export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative mb-4 sm:mb-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {HeroData.map((item, index) => (
          <CarouselItem
            key={index}
            style={{
              backgroundImage: `url('${item.image}')`,
            }}
            className="relative h-64 sm:h-96 md:h-screen w-full bg-center bg-cover bg-no-repeat"
          >
            <div className="w-full h-full bg-black opacity-40" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-18 sm:top-28 lg:top-48 w-fit left-1/2 -translate-x-1/2 text-white">
        <div className="flex flex-col gap-2 sm:gap-5 w-[300px] sm:w-full max-w-max ">
          <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:leading-14">
            Your Journey to Knowledge Starts Here
          </h1>
          <p className="text-xs sm:text-xl flex flex-col gap-1 text-center font-medium">
            <span>Building Strong Foundation for Tomorrow</span>
            <span>
              Inspiring Curiosity, Building Confidence, and Shaping Futures
            </span>
          </p>
        </div>
      </div>
      <CarouselPrevious className="absolute left-5 sm:left-12 md:left-20 lg:left-28 h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-white bg-transparent hover:bg-white hover:text-black text-white" />
      <CarouselNext className="absolute right-5 sm:right-12 md:right-20 lg:right-28 h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-white bg-transparent hover:bg-white hover:text-black text-white" />
    </Carousel>
  );
}
