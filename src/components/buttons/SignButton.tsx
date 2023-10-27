"use client";

import { useRouter } from "next/navigation";

interface ISignButton {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  border?: boolean;
}

export const SignButton = ({
  text,
  textColor = "black",
  backgroundColor = "white",
  border,
}: ISignButton) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };
  return (
    <button
      onClick={handleClick}
      className={`w-full text-[${textColor}] bg-[${backgroundColor}] font-bold rounded-3xl py-2 ${
        border ? "border border-[#536471]" : ""
      }`}
    >
      {text}
    </button>
  );
};
