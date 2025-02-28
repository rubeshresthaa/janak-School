import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    //   main section
    <section className="flex flex-col text-white ">
      <div className=" bg-[#2C3E50] px-4 sm:px-12 lg:px-24 xl:px-32">
        {/* top section */}
        <div className="flex flex-col gap-5  md:flex-row items-start justify-between py-8">
          {/* Schooll intro */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
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
              <h1 className="font-semibold flex sm:flex-row flex-col">
                <span>Janak Smriti</span> <span>Secondary School</span>
              </h1>
            </div>
            <p className="text-justify max-w-96">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              illo iusto nobis animi sequi ipsum quos velit iure vel iste. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ex
              ullam labore eaque eveniet cupiditate.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Quick Links</h1>
            <div className="flex flex-col gap-1">
              <Link href="#">Contact Us</Link>
              <Link href="#">About U</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Testimonials</Link>
            </div>
          </div>

          {/* Contact section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg">Contact Us</h1>
              <div className="flex flex-col gap-1">
                <p>Janak Tole, Inaruwa-3, Sunsari</p>
                <p>025-565270</p>
                <p>info@school.com.np</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="#"
                className="p-2 border rounded-full bg-white text-black"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="p-2 border rounded-full bg-white text-black"
              >
                <IoIosMail size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 border rounded-full bg-white text-black"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="p-2 border rounded-full bg-white text-black"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* bottom section */}
      </div>
      <p className="flex sm:flex-row flex-col items-center justify-center  sm:gap-2 py-4 bg-[#172736] text-white">
        <span className="flex items-center gap-1">
          <FaRegCopyright />
          <span>2025 Janak Smriti Secondary School.</span>
        </span>
        <span>All rights are reserved.</span>
      </p>
    </section>
  );
};

export default Footer;
