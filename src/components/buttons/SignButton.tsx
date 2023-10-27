"use client";

import { useRouter } from "next/navigation";

import { SIGN_METHODS } from "@/constants/signMethods";

interface ISignButton {
  text: string;
  signMethod: string;
  border?: boolean;
}

export const SignButton = ({ text, border, signMethod }: ISignButton) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };
  return (
    <button
      onClick={handleClick}
      className={`w-full font-bold rounded-3xl py-2 
      ${signMethod === SIGN_METHODS.GOOGLE ? "text-black bg-white" : ""} 
      ${signMethod === SIGN_METHODS.APPLE ? "text-black bg-white" : ""}
      ${signMethod === SIGN_METHODS.EMAILNUMBER ? "text-white bg-sky-500" : ""}
      ${border ? "border border-[#536471]" : ""}`}
    >
      {text}
    </button>
  );
};
