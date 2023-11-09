"use client";

import { usePathname } from "next/navigation";

import { HiOutlineUser, HiUser } from "react-icons/hi2";

export const ProfileIcon = () => {
  const pathname = usePathname();

  return (
    <button>
      {pathname.includes("/users") ? (
        <HiUser
          className="active:scale-80 transition-all duration-200"
          size="30px"
        />
      ) : (
        <HiOutlineUser
          className="active:scale-80 transition-all duration-200"
          size="30px"
        />
      )}
    </button>
  );
};
