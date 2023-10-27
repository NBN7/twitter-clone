"use client";

import Link from "next/link";

import { HiOutlineArrowLeft } from "react-icons/hi";

export const GoBackButton = () => {
  return (
    <Link href="/home">
      <HiOutlineArrowLeft size="20px" />
    </Link>
  );
};
