"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-32 py-4 bg-[#EAF4FF]">
      {/* Logo & Title */}
      <Link
        href="#home"
        onClick={() => router.push("/")}
        className="flex items-center gap-2 sm:gap-3 lg:gap-4 cursor-pointer"
      >
        <div className="w-10 h-10 sm:w-14 sm:h-14">
          <Image
            src="/school_logo.png"
            alt="school logo"
            width={40}
            height={40}
            className="object-contain w-full h-full"
          />
        </div>
        <h1 className="text-sm sm:text-lg font-semibold flex sm:flex-row flex-col">
          <span>Janak Smriti</span> <span>Secondary School</span>
        </h1>
      </Link>

      {/* Large Screen Nav Links */}
      <div className="hidden md:flex  gap-5">
        <Link href="#blog">Blog</Link>
        <Link href="#contact">Contact</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Button onClick={() => setOpenMenu((prev) => !prev)}>
          <RiMenuFoldFill size={30} />
        </Button>
        <div
          className={`absolute top-0 right-0 z-50 min-w-40 ${
            openMenu ? "flex" : "hidden"
          } flex-col items-end min-h-56 p-4 bg-green-100 gap-4`}
        >
          <Button
            className="text-xl"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <IoClose size={30} />
          </Button>
          <div className="flex flex-col gap-2 text-base items-center">
            <Link href="#home" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
            <Link href="#blog" onClick={() => setOpenMenu(false)}>
              Blog
            </Link>
            <Link href="#contact" onClick={() => setOpenMenu(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
