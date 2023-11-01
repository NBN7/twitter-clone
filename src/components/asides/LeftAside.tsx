"use client";

import Link from "next/link";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
} from "@nextui-org/modal";
import { User } from "@nextui-org/user";
import { Textarea } from "@nextui-org/input";

import { useIcons } from "@/hooks/useIcons";
import { ICONS } from "@/constants/icons";

import { AsideItem } from "../AsideItem";
import { Button } from "../buttons/Button";

import { HomeIcon } from "../icons/HomeIcon";
import { NotificationsIcon } from "../icons/NotificationsIcon";
import { MessagesIcon } from "../icons/MessagesIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { ExploreIcon } from "../icons/ExploreIcon";
import { MoreIcon } from "../icons/MoreIcon";
import { ListsIcon } from "../icons/ListsIcon";
import { BookmarkIcon } from "../icons/BookmarkIcon";

import { BsTwitter } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const LeftAside = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { activeIcon, changeActiveIcon } = useIcons();

  const handleClick = () => {
    onClose();
  };

  const handleHomeClick = () => {
    changeActiveIcon(ICONS.HOME);
  };

  const handleProfileClick = () => {
    changeActiveIcon(ICONS.PROFILE);
  };

  return (
    <aside className="lg:flex flex-col hidden w-full min-h-screen items-end justify-between border-r border-r-[#2F3336]">
      <div className="sticky top-0 w-[300px] flex flex-col gap-10 p-4">
        <Link href="/home">
          <BsTwitter size="30px" />
        </Link>

        <section className="flex flex-col gap-6">
          <AsideItem onClick={handleHomeClick}>
            <HomeIcon activeIcon={activeIcon} />
            <span>Home</span>
          </AsideItem>

          <AsideItem>
            <ExploreIcon />
            <span>Explore</span>
          </AsideItem>

          <AsideItem>
            <NotificationsIcon />
            <span>Notifications</span>
          </AsideItem>

          <AsideItem>
            <MessagesIcon />
            <span>Messages</span>
          </AsideItem>

          <AsideItem>
            <BookmarkIcon />
            <span>Bookmarks</span>
          </AsideItem>

          <AsideItem>
            <ListsIcon />
            <span>Lists</span>
          </AsideItem>

          <AsideItem onClick={handleProfileClick}>
            <ProfileIcon activeIcon={activeIcon} />
            <span>Profile</span>
          </AsideItem>

          <AsideItem>
            <MoreIcon />
            <span>More</span>
          </AsideItem>

          <div className="w-3/4">
            <Button onClick={onOpen} text="Tweet" variant="primary" />

            <Modal
              placement="center"
              scrollBehavior="inside"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                <ModalHeader>Tweet</ModalHeader>

                <ModalBody>
                  <Textarea
                    name="tweet"
                    placeholder="What's happening?"
                    variant="bordered"
                    size="lg"
                    minRows={1}
                  />
                </ModalBody>

                <ModalFooter>
                  <div className="w-[100px]">
                    <Button
                      onClick={handleClick}
                      text="Tweet"
                      variant="primary"
                    />
                  </div>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </section>
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
