import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-32 py-4">
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
        <div className="w-10 h-10 sm:w-14 sm:h-14">
          <Image
            objectFit="contain"
            src="/school_logo.png"
            alt="school logo"
            width="0"
            height="0"
            sizes="100vw"
            className="object-contain w-full h-full"
          />
        </div>
        <h1 className="text-sm sm:text-lg font-semibold flex sm:flex-row flex-col">
          <span>Janak Smriti</span> <span>Secondary School</span>
        </h1>
      </div>
      <div className="flex gap-5">
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
