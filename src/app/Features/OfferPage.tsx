"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Offer {
  name: string;
  image: string;
  list: string[];
}

const OfferPage = () => {
  const offerImageCollection: Offer[] = [
    {
      name: "OfferImage",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      list: ["Montessori", "Early Morning", "Standard Curriculam"],
    },
    {
      name: "OfferImage",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      list: ["Montessori", "Early Morning", "Standard Curriculam"],
    },
    {
      name: "OfferImage",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      list: ["Montessori", "Early Morning", "Standard Curriculam"],
    },
    {
      name: "OfferImage",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      list: ["Montessori", "Early Morning", "Standard Curriculam"],
    },
    {
      name: "OfferImage",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      list: ["Montessori", "Early Morning", "Standard Curriculam"],
    },
    {
      name: "OfferImage",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      list: ["Montessori", "Early Morning", "Standard Curriculam"],
    },
    {
      name: "OfferImage",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      list: ["Montessori", "Early Morning", "Standard Curriculam"],
    },
  ];
  return (
    <div className="my-3 space-y-4 bg-[#EAF4FF]">
      <h1 className="text-center text-3xl text-red-700 font-bold">
        What We Offer?
      </h1>
      <h1 className="text-center text-xl font-medium">
        Our School Offers a dynamic learning experience with:
      </h1>
      <Carousel className="mx-14 md:mx-18">
        <CarouselContent className="flex gap-5 -ml-2 md:-ml-4">
          {offerImageCollection.map((offer, index) => {
            return (
              <CarouselItem
                key={index}
                className="relative w-full h-80 md:h-96  bg-cover bg-center bg-no-repeat flex items-center rounded-3xl pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                style={{
                  backgroundImage: `url('${offer.image}')
          `,
                }}
              >
                {/* background overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
                {/* Text in Image */}
                <div className="text-white absolute left-6 bottom-5 space-y-1">
                  <h1 className="text-lg">{offer.name}</h1>
                  <ul className="list-disc px-3 space-y-1">
                    {offer.list.map((li, index) => {
                      return <li key={index}>{li}</li>;
                    })}
                  </ul>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default OfferPage;
