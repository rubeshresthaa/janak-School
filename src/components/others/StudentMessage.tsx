"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { ImQuotesLeft } from "react-icons/im";
type StudentMessageType = {
  name: string;
  grade: string;
  image: string;
  message: string;
}[];
const StudentMessage = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const studentMessage: StudentMessageType = [
    {
      grade: "XI",
      name: "Harry porter",
      message: ` Lorem ipsum, dolor sit amet consectetur adipisicing eli
            t. Inventore laudantium voluptatum magnam consequatur neque alias aut earum
            tenetur quos, vero ipsum accusamus
        totam deleniti veritatis perspiciatis. Aperiam soluta voluptatem voluptatibus.`,
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      grade: "VII",
      name: "Tom Holland",
      message: ` Lorem ipsum, dolor sit amet consectetur adipisicing eli
            t. Inventore laudantium voluptatum magnam consequatur neque alias aut earum
            tenetur quos, vero ipsum accusamus
        totam deleniti veritatis perspiciatis. Aperiam soluta voluptatem voluptatibus.`,
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      grade: "V",
      name: "Jacks Sparrow",
      message: ` Lorem ipsum, dolor sit amet consectetur adipisicing eli
            t. Inventore laudantium voluptatum magnam consequatur neque alias aut earum
            tenetur quos, vero ipsum accusamus
        totam deleniti veritatis perspiciatis. Aperiam soluta voluptatem voluptatibus.`,
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    },
  ];
  return (
    <div className="flex flex-col gap-6  sm:gap-8 justify-center sm:py-8 mt-8 sm:mt-5 px-4 sm:px-12 lg:px-24 xl:px-32">
      <h1 className="text-red-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        What Students Say About Us?
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative mb-4 sm:mb-0"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {studentMessage.map((item, index) => (
            <CarouselItem key={index} className="relative lg:h-screen">
              <div className="absolute right-[56%] sm:right-[40%] top-6 flex flex-col sm:text-lg md:text-xl font-semibold">
                <h1>{item.name}</h1>
                <h1>Grade {item.grade}</h1>
              </div>
              <div className="relative w-full h-96 md:w-[70%] md:h-[70%] lg:w-[75%] lg:h-[75%] bg-green-600 mt-28 rounded-2xl flex items-center justify-center p-4">
                <p className="text-justify px-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl text-white text-sm sm:text-lg">
                  {item.message}
                </p>
                <ImQuotesLeft className="absolute text-red-800 -top-6 sm:-top-8 md:-top-8 lg:-top-10 xl:-top-14 left-10 text-5xl sm:text-6xl md:text-7xl xl:text-8xl" />
              </div>
              <div
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
                className="absolute top-0 right-10 w-36 h-44 sm:w-44 sm:h-56 md:w-64 md:h-[60%] lg:w-72 lg:h-[70%] xl:w-80 xl:h-[80%] bg-yellow-500 rounded-xl bg-center bg-cover bg-no-repeat"
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute  left-1 sm:left-12 md:-left-10 lg:-left-16 h-5 w-5 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border border-black bg-transparent hover:bg-black hover:text-white text-black" />
        <CarouselNext className="absolute right-1 sm:right-12 md:-right-10 lg:-right-14 h-5 w-5 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border border-black bg-transparent hover:bg-black hover:text-white text-black" />
      </Carousel>
    </div>
  );
};

export default StudentMessage;
