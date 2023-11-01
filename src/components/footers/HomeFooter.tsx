"use client";

import { useIcons } from "@/hooks/useIcons";

import { FOOTER_ICONS } from "@/constants/icons";

import { HomeIcon } from "../icons/HomeIcon";
import { NotificationsIcon } from "../icons/NotificationsIcon";
import { MessagesIcon } from "../MessagesIcon";
import { ProfileIcon } from "../icons/ProfileIcon";

export const HomeFooter = () => {
  const { activeIcon, changeActiveIcon } = useIcons();

  const handleHomeClick = () => {
    changeActiveIcon(FOOTER_ICONS.HOME);
  };

  const handleProfileClick = () => {
    changeActiveIcon(FOOTER_ICONS.PROFILE);
  };

  return (
    <footer className="lg:hidden w-full flex justify-around py-4 px-6 items-center bg-black border-t border-t-[#2F3336] sticky bottom-0 z-50">
      <HomeIcon activeIcon={activeIcon} onClick={handleHomeClick} />
      <NotificationsIcon />
      <MessagesIcon />
      <ProfileIcon activeIcon={activeIcon} onClick={handleProfileClick} />
    </footer>
  );
};
