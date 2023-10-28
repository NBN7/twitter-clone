import { BsTwitter } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { BsHash } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { CiCircleMore } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import Link from "next/link";

import { ListItem } from "../ListItem";
import { Button } from "../buttons/Button";

import { User } from "@nextui-org/user";

export const LeftAside = () => {
  return (
    <aside className="lg:flex flex-col hidden w-full min-h-screen items-end justify-between">
      <div className="sticky top-0 w-[300px] flex flex-col gap-10 p-4">
        <Link href="/home">
          <BsTwitter size="30px" />
        </Link>

        <ul className="flex flex-col gap-6">
          <ListItem>
            <IoHome size="30px" />
            <span>Home</span>
          </ListItem>

          <ListItem isDisabled>
            <BsHash size="30px" />
            <span>Explore</span>
          </ListItem>

          <ListItem isDisabled>
            <IoNotificationsOutline size="30px" />
            <span>Notifications</span>
          </ListItem>

          <ListItem isDisabled>
            <HiOutlineMail size="30px" />
            <span>Messages</span>
          </ListItem>

          <ListItem isDisabled>
            <BiBookmark size="30px" />
            <span>Bookmarks</span>
          </ListItem>

          <ListItem isDisabled>
            <HiOutlineMenuAlt2 size="30px" />
            <span>Lists</span>
          </ListItem>

          <ListItem>
            <HiOutlineUser size="30px" />
            <span>Profile</span>
          </ListItem>

          <ListItem isDisabled>
            <CiCircleMore size="30px" />
            <span>More</span>
          </ListItem>

          <div className="w-3/4">
            <Button text="Tweet" variant="primary" />
          </div>
        </ul>
      </div>

      <div className="sticky bottom-0 w-[300px] flex flex-col gap-10 p-4">
        <div className="flex items-center justify-between cursor-pointer">
          <User
            name="User Name"
            description="@username"
            avatarProps={{
              src: "/luffy.png",
              alt: "profile picture",
              size: "lg",
            }}
          />

          <BiDotsHorizontalRounded size="20px" />
        </div>
      </div>
    </aside>
  );
};
