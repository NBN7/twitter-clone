"use client";

import Link from "next/link";

import { useUserContext } from "@/context/userContext";

import { HomeIcon } from "../icons/HomeIcon";
import { NotificationsIcon } from "../icons/NotificationsIcon";
import { MessagesIcon } from "../icons/MessagesIcon";
import { ProfileIcon } from "../icons/ProfileIcon";

export const HomeFooter = () => {
  const { username } = useUserContext();

  return (
    <footer className="lg:hidden w-full flex justify-around py-4 px-6 items-center bg-black border-t border-t-[#2F3336] sticky bottom-0 z-50">
      <Link href="/home">
        <HomeIcon />
      </Link>

      <NotificationsIcon />

      <MessagesIcon />

      <Link href={`/users/${username}`}>
        <ProfileIcon />
      </Link>
    </footer>
  );
};
