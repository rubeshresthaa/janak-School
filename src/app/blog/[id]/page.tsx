import Image from "next/image";
import React from "react";

const BlogPage = ({ prop }: Blog) => {
  const { title, description, author, publishedDate, content, mainImage } =
    prop;
  return (
    <section className="flex flex-col gap-10 px-4 sm:px-12 lg:px-24 xl:px-32 pb-10">
      <div className="flex flex-col gap-6">
        {/* main title */}
        <h1 className="text-4xl text-center font-bold max-w-2xl mx-auto">
          {title}
        </h1>
        {/* title description */}
        <p className="text-justify">{description}</p>
        {/* Main image part */}
        <div className="w-full h-screen relative bg-red-500 rounded">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            src={mainImage}
            alt="main image"
            className="w-full h-full object-contain"
          />
          {/* inside image content */}
          <div className="absolute bottom-5 left-10 flex gap-4 text-white">
            <p className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Written By</span>
              <span>{author}</span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Published On</span>
              <span>{publishedDate}</span>
            </p>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="grid grid-cols-5 gap-14 items-start relative">
        {/* sub contents */}
        <div className="flex flex-col gap-8 col-span-3">
          {/* sub contnet body */}
          {content.map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h1 className="text-xl font-bold capitalize">
                {item.subContentTitle}
              </h1>
              <p className="text-justify">{item.subContent}</p>
              <div className="w-96 h-80 bg-yellow-500 rounded">
                <Image
                  src={item.image}
                  alt="sub conent's image"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        {/* side navigation */}
        <div className="flex flex-col gap-2 text-lg font-semibold col-span-2 items-start sticky top-5">
          {content.map((item, index) => (
            <h1 key={index}>{item.subContentTitle}</h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;