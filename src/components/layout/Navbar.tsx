import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuFoldFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-32 py-4">
      {/* Logo & Title */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
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
      </div>

      {/* Large Screen Nav Links */}
      <div className="hidden md:flex  gap-5">
        <Link href="#blog">Blog</Link>
        <Link href="#contact">Contact</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <RiMenuFoldFill size={30} />
          </SheetTrigger>
          <SheetContent side="right" className="w-96 py-8 bg-white">
            <SheetHeader>
              <SheetTitle className="text-lg text-left flex justify-baseline gap-5 border-b-2 border-red-800 pb-2">
                <Image
                  src="/school_logo.png"
                  alt="school logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h1>Janak Smriti Secondary School</h1>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-3 font-medium text-lg">
              <Link href="#home" className="border-b-2 border-black pb-2">
                Home
              </Link>
              <Link href="#blog" className="border-b-2 border-black pb-2">
                Blog
              </Link>
              <Link href="#contact" className="border-b-2 border-black pb-2">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
