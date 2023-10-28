"use client";

import { useRouter } from "next/navigation";

import { BUTTON_VARIANTS } from "@/constants/buttonVariants";
import type { TButtonVariant } from "@/types/ButtonVariant";

interface IButton {
  text: string;
  variant: TButtonVariant;
  border?: boolean;
}

export const Button = ({ text, border, variant }: IButton) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };
  return (
    <button
      onClick={handleClick}
      className={`w-full font-bold rounded-3xl py-2 
      ${variant === BUTTON_VARIANTS.DEFAULT ? "text-black bg-white" : ""}
      ${variant === BUTTON_VARIANTS.PRIMARY ? "text-white bg-sky-500" : ""}
      ${variant === BUTTON_VARIANTS.SECONDARY ? "text-black bg-white" : ""} 
      ${border ? "border border-[#536471]" : ""}`}
    >
      {text}
    </button>
  );
};
