"use client";

import { FOOTER_ICONS } from "@/constants/icons";

import { GoHome, GoHomeFill } from "react-icons/go";

export const HomeIcon = ({ activeIcon, onClick }: any) => {
  return (
    <button onClick={onClick}>
      {activeIcon === FOOTER_ICONS.HOME ? (
        <GoHomeFill size="30px" />
      ) : (
        <GoHome size="30px" />
      )}
    </button>
  );
};
