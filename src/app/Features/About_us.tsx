// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { RxCrossCircled } from "react-icons/rx";

// const AboutPage = () => {
//   const [selectImage, setSelectImage] = useState<string | null>(null);
//   const [show, setShow] = useState<boolean | undefined>(false);
//   const [visibleImage, setVisibleImage] = useState<number>(4);
//   const [isMobile, setIsMobile] = useState(false);
//   const imageItems = [
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1677218309572-090d68648258?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1617056239820-8ce90ba48193?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1611662781749-2d208fec7e44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1684173662116-0e66b542774b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWxkcmVuJTIwc2Nob29sfGVufDB8fDB8fHww",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   //For Image Handling in Mobile Screen And Desktop Screen
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setVisibleImage(window.innerWidth < 768 ? 4 : imageItems.length);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleButton = () => {
//     setVisibleImage(show ? 4 : imageItems.length);
//     setShow(!show);
//   };

//   return (
//     <div className="my-4 lg:my-10 mx-8 lg:mx-20 px-2 md:px-5">
//       <h1 className="text-center text-2xl text-black font-bold font-poppins">
//         About Us
//       </h1>
//       <FaChevronDown
//         size={20}
//         className="text-black m-auto hover:scale-125 cursor-pointer"
//       />
//       <div>
//         <h1 className="text-center font-bold text-red-800 text-md lg:text-3xl font-poppins">
//           Welcome to Janak Smriti Secondary School
//         </h1>
//         <div className="my-5 lg:mx-8">
//           <p className="text-justify lg:text-center text-md my-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui
//             distinctio consequatur, porro dolores, earum assumenda nihil error
//             voluptatibus vitae voluptatum? Nihil dolor voluptates fuga eaque
//             nemo, veritatis exercitationem vel. Dolore, sapiente maiores magni
//             quidem architecto atque. Quia porro blanditiis nostrum sequi labore
//             iure architecto? Consectetur quae a accusantium iure.
//           </p>
//           <div>
//             <Carousel className="md:px-20">
//               <CarouselContent>
//                 <CarouselItem>
//                   <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
//                     {imageItems.slice(0, visibleImage).map((item, index) => (
//                       <div
//                         key={index}
//                         className="mb-4 break-inside-avoid overflow-hidden"
//                         onClick={() => setSelectImage(item.image)}
//                       >
//                         <Image
//                           src={item.image}
//                           alt={item.image}
//                           width={0}
//                           height={0}
//                           sizes="100vw"
//                           className="w-full object-cover rounded-2xl hover:scale-110 duration-500"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </CarouselItem>
//                 <CarouselItem>
//                   <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
//                     {imageItems.slice(0, visibleImage).map((item, index) => (
//                       <div key={index} className="mb-4 break-inside-avoid">
//                         <Image
//                           src={item.image}
//                           alt={item.image}
//                           width={0}
//                           height={0}
//                           sizes="100vw"
//                           className="w-full object-cover rounded-2xl hover:scale-110 duration-500"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </CarouselItem>
//                 <CarouselItem>
//                   <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
//                     {imageItems.slice(0, visibleImage).map((item, index) => (
//                       <div key={index} className="mb-4 break-inside-avoid">
//                         <Image
//                           src={item.image}
//                           alt={item.image}
//                           width={0}
//                           height={0}
//                           sizes="100vw"
//                           className="w-full object-cover rounded-2xl hover:scale-110 duration-500"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </CarouselItem>
//               </CarouselContent>
//               <CarouselPrevious className="absolute -left-7 sm:-left-5 md:-left-10 lg:-left-16 h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border border-black bg-transparent hover:bg-black hover:text-white text-black" />
//               <CarouselNext className="absolute -right-7 sm:-right-5 md:-right-10 lg:-right-14 h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border border-black bg-transparent hover:bg-black hover:text-white text-black" />
//             </Carousel>
//           </div>
//         </div>
//       </div>
//       {selectImage && (
//         <div
//           className="fixed inset-0 bg-blend-saturation bg-opacity-20 flex items-center justify-center z-50"
//           onClick={() => setSelectImage(null)}
//         >
//           <div className="relative p-4">
//             <button
//               className="absolute top-4 right-2  text-black px-3 py-1 rounded-md text-lg"
//               onClick={() => setSelectImage(null)}
//               aria-label="Close Image"
//               title="Close"
//             >
//               <RxCrossCircled
//                 size={30}
//                 className="text-red-500 cursor-pointer"
//               />
//             </button>
//             <Image
//               src={selectImage}
//               alt="Full View"
//               width={800}
//               height={600}
//               className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//       {isMobile && (
//         <Button className="block md:hidden mt-4 mx-auto bg-green-600 text-white" onClick={handleButton}>
//           {show ? "Show Less" : "Show More"}
//         </Button>
//       )}
//     </div>
//   );
// };

// export default AboutPage;

"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { imageItems } from "@/app/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

const AboutPage = () => {
  const [selectImage, setSelectImage] = useState<string | null>(null);
  const [show, setShow] = useState<boolean | undefined>(false);
  const [visibleImage, setVisibleImage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState(false);

  //For Image Handling in Mobile Screen And Desktop Screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleImage(window.innerWidth < 768 ? 1 : imageItems.length);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButton = () => {
    if (show) {
      window.scrollTo(0, 0);
    }

    setVisibleImage(show ? 1 : imageItems.length);
    setShow(!show);
  };

  return (
    <div className="my-4 lg:my-10 mx-8 lg:mx-20 px-2 md:px-5">
      <h1 className="text-center text-2xl  sm:text-4xl font-bold font-poppins mb-3">
        About Us
      </h1>
      <FaChevronDown
        size={30}
        className="m-auto hover:scale-125 cursor-pointer "
      />

      <div>
        <h1 className="text-center font-bold text-red-800 text-md lg:text-3xl font-poppins">
          Welcome to Janak Smriti Secondary School
        </h1>
        <div className="my-5 lg:mx-8">
          <p className="text-justify lg:text-center text-md my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui
            distinctio consequatur, porro dolores, earum assumenda nihil error
            voluptatibus vitae voluptatum? Nihil dolor voluptates fuga eaque
            nemo, veritatis exercitationem vel. Dolore, sapiente maiores magni
            quidem architecto atque. Quia porro blanditiis nostrum sequi labore
            iure architecto? Consectetur quae a accusantium iure.
          </p>
          <div>
            <Carousel className="md:px-20">
              <CarouselContent>
                <CarouselItem>
                  <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
                    {imageItems.slice(0, visibleImage).map((item, index) => (
                      <div
                        key={index}
                        className="mb-4 break-inside-avoid overflow-hidden"
                        onClick={() => setSelectImage(item.image)}
                      >
                        <Image
                          src={item.image}
                          alt={item.image}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full object-cover  rounded-2xl hover:scale-110 duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
                    {imageItems.slice(0, visibleImage).map((item, index) => (
                      <div
                        key={index}
                        className="mb-4 break-inside-avoid overflow-hidden"
                      >
                        <Image
                          src={item.image}
                          alt={item.image}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full object-cover rounded-2xl hover:scale-110 duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
                    {imageItems.slice(0, visibleImage).map((item, index) => (
                      <div
                        key={index}
                        className="mb-4 break-inside-avoid overflow-hidden"
                      >
                        <Image
                          src={item.image}
                          alt={item.image}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full object-cover rounded-2xl hover:scale-110 duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
                    {imageItems.slice(0, visibleImage).map((item, index) => (
                      <div
                        key={index}
                        className="mb-4 break-inside-avoid overflow-hidden"
                      >
                        <Image
                          src={item.image}
                          alt={item.image}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full object-cover rounded-2xl hover:scale-110 duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute -left-7 sm:-left-5 md:-left-10 lg:-left-16 h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border border-black bg-transparent hover:bg-black hover:text-white text-black" />
              <CarouselNext className="absolute -right-7 sm:-right-5 md:-right-10 lg:-right-14 h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border border-black bg-transparent hover:bg-black hover:text-white text-black" />
            </Carousel>
          </div>
        </div>
      </div>
      {selectImage && (
        <div
          className="fixed inset-0 bg-blend-saturation bg-opacity-20 flex items-center justify-center z-50"
          onClick={() => setSelectImage(null)}
        >
          <div className="relative p-4">
            <button
              className="absolute top-4 right-2  text-black px-3 py-1 rounded-md text-lg"
              onClick={() => setSelectImage(null)}
              aria-label="Close Image"
              title="Close"
            >
              <RxCrossCircled
                size={30}
                className="text-red-500 cursor-pointer"
              />
            </button>
            <Image
              src={selectImage}
              alt="Full View"
              width={800}
              height={600}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      {isMobile && (
        <Button
          className="block md:hidden mt-4 mx-auto bg-green-600 text-white"
          onClick={handleButton}
        >
          {show ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};

export default AboutPage;
