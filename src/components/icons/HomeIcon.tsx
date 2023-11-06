"use client";

import { ICONS } from "@/constants/icons";
import { iconsStyle } from "@/style/iconsStyle";

import { GoHome, GoHomeFill } from "react-icons/go";

interface IHomeIcon {
  activeIcon: string;
  onClick?: () => void;
}

export const HomeIcon = ({ activeIcon, onClick }: IHomeIcon) => {
  return (
    <button onClick={onClick}>
      {activeIcon === ICONS.HOME ? (
        <GoHomeFill className={iconsStyle} size="30px" />
      ) : (
        <GoHome className={iconsStyle} size="30px" />
      )}
    </button>
  );
};
