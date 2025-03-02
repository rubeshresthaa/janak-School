"use client";
import Image from "next/image";
import React, { useState } from "react";

const PrincipalMessage = () => {
  const [show, setShow] = useState(false);
  const message = `At Janak Smriti Secondary School, we take immense pride in shaping
          young minds and nurturing future leaders. Our mission is to provide a
          holistic education that empowers students with knowledge, discipline,
          and values that will guide them throughout their lives. With a
          dedicated team of teachers, a well-structured curriculum, and a strong
          emphasis on both academics and extracurricular activities, we strive
          to create an environment where every student can excel. We believe
          that education goes beyond textbooks—it is about character building,
          critical thinking, and preparing students to contribute meaningfully
          to society. As we continue our journey of excellence, we remain
          committed to fostering an inclusive, innovative, and inspiring
          learning environment. Together, let us work towards a brighter future
          for our students, our school, and our community.`;
  return (
    <div className="flex md:flex-row flex-col gap-8 sm:gap-18 items-center max-w-max mx-auto md:h-screen py-4 px-4 ">
      <div className="w-full h-72 md:w-[450px] md:h-[500px]">
        <Image
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
          alt="Principal's image"
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="space-y-5 max-w-sm sm:max-w-lg lg:max-w-xl">
        <h1 className="text-red-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Message from Principal
        </h1>
        <p className="hidden sm:block text-lg font-medium text-justify">
          {message}
        </p>
        <p className="block sm:hidden text-sm sm:text-lg font-medium text-justify">
          {show ? message : message.slice(0, 250)}{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? "Show less" : "Read More"}
          </span>
        </p>
        <p className="flex flex-col gap-1">
          <span className="font-bold text-base sm:text-xl ">
            Mr. Bir Bikram Shah
          </span>
          <span className="font-medium text-sm sm:text-lg">
            Principal, Janak Smriti Secondary School
          </span>
        </p>
      </div>
    </div>
  );
};

export default PrincipalMessage;
