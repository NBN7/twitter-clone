"use client";

import { usePathname } from "next/navigation";

import { GoHome, GoHomeFill } from "react-icons/go";

export const HomeIcon = () => {
  const pathname = usePathname();

  return (
    <button>
      {pathname.includes("/home") ? (
        <GoHomeFill
          className="active:scale-80 transition-all duration-200"
          size="30px"
        />
      ) : (
        <GoHome
          className="active:scale-80 transition-all duration-200"
          size="30px"
        />
      )}
    </button>
  );
};
