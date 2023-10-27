"use client";

import { Avatar } from "@nextui-org/avatar";
import { BiLogoTwitter } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import Link from "next/link";

export const HomeNavbar = () => {
  const handleAvatarClick = () => {};

  return (
    <nav className="w-full flex justify-between py-4 px-6 items-center backdrop-blur-lg border-b border-b-[#2F3336] sticky top-0 z-50">
      {/* LEFT SIDE OF NAVBAR */}
      <Avatar src="/luffy.png" size="sm" />
      {/* CENTER OF NAVBAR */}

      <Link href="#home">
        <BiLogoTwitter size="30px" className="text-[#1EA0F1]" />
      </Link>

      {/* RIGHT SIDE OF NAVBAR */}
      <button>
        <FiSettings size="20px" />
      </button>
    </nav>
  );
};
