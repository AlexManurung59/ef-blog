import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <p className="text-sm text-gray-300">© All rights reserved{""}</p>
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link
          href={
            "https://www.instagram.com/entersea_foundation?igsh=emJyeW96OHR2ZGk2"
          }
          target="blank"
        >
          <BsInstagram className="text-2xl hover:text-green-500" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
