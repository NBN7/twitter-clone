"use client";

import { BUTTON_VARIANTS } from "@/constants/buttonVariants";
import type { TButtonVariant } from "@/types/buttonVariant";

interface IButton {
  text: string;
  variant: TButtonVariant;
  border?: boolean;
  logo?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const Button = ({
  text,
  border,
  variant,
  logo,
  onClick,
  isDisabled = false,
}: IButton) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 font-bold rounded-3xl py-2 
      ${variant === BUTTON_VARIANTS.DEFAULT ? "text-sky-500 bg-inherit" : ""}
      ${variant === BUTTON_VARIANTS.PRIMARY ? "text-white bg-sky-500" : ""}
      ${variant === BUTTON_VARIANTS.SECONDARY ? "text-black bg-white" : ""} 
      ${border ? "border border-[#536471]" : ""}
      hover:opacity-80 transition-all disabled:opacity-40`}
    >
      {logo ? <img src={logo} alt="logo" width="25px"></img> : null}

      {text}
    </button>
  );
};
