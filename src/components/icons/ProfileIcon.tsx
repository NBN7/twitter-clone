"use client";

import { ICONS } from "@/constants/icons";
import { iconsStyle } from "@/style/iconsStyle";

import { HiOutlineUser, HiUser } from "react-icons/hi2";

interface IProfileIcon {
  activeIcon: string;
  onClick?: () => void;
}

export const ProfileIcon = ({ activeIcon, onClick }: IProfileIcon) => {
  return (
    <button onClick={onClick}>
      {activeIcon === ICONS.PROFILE ? (
        <HiUser className={iconsStyle} size="30px" />
      ) : (
        <HiOutlineUser className={iconsStyle} size="30px" />
      )}
    </button>
  );
};
