"use client";

import { Avatar } from "@nextui-org/avatar";
import { BiLogoTwitter } from "react-icons/bi";

import { FiSettings } from "react-icons/fi";

export const HomeNavbar = () => {
  return (
    <nav className="lg:hidden w-full flex justify-between py-4 px-6 items-center backdrop-blur-lg border-b border-b-[#2F3336] sticky top-0 z-50">
      {/* LEFT SIDE OF NAVBAR */}
      <Avatar className="cursor-pointer" src="/assets/luffy.png" size="sm" />
      {/* CENTER OF NAVBAR */}

      <button onClick={() => scroll(0, 0)}>
        <BiLogoTwitter size="30px" className="text-[#1EA0F1]" />
      </button>

      {/* RIGHT SIDE OF NAVBAR */}
      <button>
        <FiSettings size="20px" />
      </button>
    </nav>
  );
};
