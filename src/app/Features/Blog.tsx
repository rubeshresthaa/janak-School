import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const Blogs = () => {
  const blogCollection = [
    {
      id:1,
      title: "Turning Challenges into Opportunities A Student's Journey",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Every journey, no matter how challenging, holds the promise of growth and transformation. As students, we are not just learning from textbooks, but also from the ups and downs that shape us into stronger, wiser individuals. This is the power of challenges—they push us to become the best version of ourselves.",
      author: "Rama Limbu",
      publishedDate: "28th of February",
    },
    {
      id:2,
      title: "Stay Positive, Stay Strong The Power of Positive Thinking in Student Life",
      image:
        "https://plus.unsplash.com/premium_photo-1661544204747-272071b388b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Student life is filled with highs and lows—exams, assignments, deadlines, and expectations. At times, it can feel overwhelming, but the way you think plays a crucial role in shaping your experiences. Positive thinking is not just about ignoring problems; it’s about facing them with confidence and a solution-oriented mindset. In this article, we’ll explore how a positive attitude can transform student life and lead to success.",
      author: "Rama Limbu",
      publishedDate: "28th of February",
    },
  ];

  return (
    <div className="my-3 w-full bg-white py-4" id="blog">
      <h1 className="text-center font-bold text-red-700 text-4xl">Blogs</h1>
      <Carousel>
        <CarouselContent>
          {blogCollection.map((blog,index) => {
            return (
              <CarouselItem key={index}>
                
                <div className="relative space-y-2 my-3 lg:px-20">
                  <h1 className="text-center text-2xl lg:text-3xl font-bold">
                    {blog.title}
                  </h1>
                  <p className="lg:text-justify px-2 py-2 lg:px-4 lg:py-4">
                    {blog.description}
                  </p>
                  <div className="relative">
                  <div className="absolute inset-0 bg-black/50 mx-4"></div>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[300px] lg:h-[500px] object-cover bg-blend-overlay px-4"
                    />
                    {/* Author and Published Info*/}
                    <div className="absolute bottom-5 left-5 flex gap-4 px-4 py-2  text-white text-md lg:text-lg rounded-md">
                      <p>
                        Written By:
                        <br /> {blog.author}
                      </p>
                      <p>
                        Published On:
                        <br /> {blog.publishedDate}
                      </p>
                    </div>
                  </div>
                </div>
              <div className="flex items-center justify-center">
              <Link href={`/blog/${blog.id}`} className="p-4 md:w-54 bg-green-500 text-lg text-white hover:bg-green-700 cursor-pointer rounded-md text-center">
            Read More
          </Link>
              </div>
         
        
              </CarouselItem>
              
            );
          })}
        </CarouselContent>
        {/* Carousel Buttons */}
        <CarouselPrevious className="absolute bottom-10 left-5 transform -translate-y-1/2 z-10 text-black p-4 rounded-full">
          {/* Previous Button */}
        </CarouselPrevious>
        <CarouselNext className="absolute  right-5 transform -translate-y-1/2 z-10 text-black p-4 rounded-full">
          {/* Next Button */}
        </CarouselNext>
       
      </Carousel>
    </div>
  );
};

export default Blogs;
