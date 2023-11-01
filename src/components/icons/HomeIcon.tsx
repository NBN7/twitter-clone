"use client";

import { ICONS } from "@/constants/icons";

import { GoHome, GoHomeFill } from "react-icons/go";

interface IHomeIcon {
  activeIcon: string;
  onClick: () => void;
}

export const HomeIcon = ({ activeIcon, onClick }: IHomeIcon) => {
  return (
    <button onClick={onClick}>
      {activeIcon === ICONS.HOME ? (
        <GoHomeFill size="30px" />
      ) : (
        <GoHome size="30px" />
      )}
    </button>
  );
};
