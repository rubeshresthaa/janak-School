import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center sm:tracking-wider py-2 bg-[#1B9751] px-4 sm:px-12 lg:px-24 xl:px-32 text-white">
      <div className="flex space-x-1 sm:space-x-2 font-semibold ">
        <span className="hidden sm:inline-block">Inaruwa-3, Sunsari</span>
        <span className="hidden sm:inline-block">|</span>
        <span className="items-center flex space-x-1">
          <MdCall />
          <span>025-565270</span>
        </span>
      </div>
      <div className="flex space-x-2 items-center font-semibold">
        <p>Follow Us on:</p>
        <div className="space-x-1 flex items-center text-lg">
          <Link href="#">
            <FaInstagramSquare />
          </Link>
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
