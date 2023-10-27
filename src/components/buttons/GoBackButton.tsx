"use client";

import { useRouter } from "next/navigation";

import { HiOutlineArrowLeft } from "react-icons/hi";

export const GoBackButton = () => {
  const router = useRouter();

  const handleGoBackClick = () => {
    router.refresh();
    router.push("/home");
  };

  return (
    <button onClick={handleGoBackClick}>
      <HiOutlineArrowLeft size="20px" />
    </button>
  );
};
