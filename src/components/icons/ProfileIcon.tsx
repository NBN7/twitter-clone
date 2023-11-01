"use client";

import { FOOTER_ICONS } from "@/constants/icons";

import { HiOutlineUser, HiUser } from "react-icons/hi2";

export const ProfileIcon = ({ activeIcon, onClick }: any) => {
  return (
    <button onClick={onClick}>
      {activeIcon === FOOTER_ICONS.PROFILE ? (
        <HiUser size="30px" />
      ) : (
        <HiOutlineUser size="30px" />
      )}
    </button>
  );
};
