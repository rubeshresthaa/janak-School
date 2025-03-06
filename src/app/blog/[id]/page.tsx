"use client";
import { BlogDataDemo } from "@/app/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const BlogPage = ({ prop }: Blog) => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  if (id) {
    console.log("Blog id is", id);
  }
  //TODO: Api call with current id
  // and getting the same formated data;

  // This is static content for now.
  const { title, description, author, publishedDate, content, mainImage } =
    BlogDataDemo;
  return (
    <section className="flex flex-col gap-10 px-4 sm:px-12 lg:px-24 xl:px-32 pb-10 mt-5">
      <div className="flex flex-col gap-6 relative my-8">
        <Button
          onClick={() => router.back()}
          className="bg-green-700 hover:bg-green-800 p-6 rounded text-white w-42 absolute right-0 -top-12 cursor-pointer font-bold text-xl"
        >
          Back
        </Button>
        {/* main title */}
        <h1 className="text-2xl md:text-4xl text-center font-bold max-w-2xl mx-auto">
          {title}
        </h1>
        {/* title description */}
        <p className="text-justify">{description}</p>
        {/* Main image part */}
        <div className="w-full h-96 relative bg-gray-50 rounded">
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
      <div className="flex flex-col-reverse md:grid grid-cols-5 gap-4 md:gap-14 items-start relative">
        {/* sub contents */}
        <div className="flex flex-col gap-8 col-span-4 sm:col-span-3">
          {/* sub contnet body */}
          {content.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="text-xl font-bold capitalize">
                {item.subContentTitle}
              </h1>
              <p className="text-justify">{item.subContent}</p>
              <div className="w-full h-56 sm:w-96 sm:h-80 bg-gray-50 rounded">
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
        <div className="bg-green-100 px-4 rounded-md w-full py-5 flex flex-col gap-2 text-lg font-semibold col-span-1 sm:col-span-2 items-start sticky top-0">
          {content.map((item, index) => (
            <h1 key={index}>{item.subContentTitle}</h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
