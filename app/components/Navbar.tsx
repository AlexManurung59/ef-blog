import { title } from "process";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Our Activity", href: "/activity" },
    { title: "Studio", href: "/studio" },
  ];
  return (
    <div className="w-full bg-white/70 h-20 shadow-sm sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Link href="/">
          <Image src="/ef logo.png" alt="photo" width={75} height={50} />
        </Link>
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group hover:bg-green-600 px-3 cursor-pointer p-2 rounded-full"
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
