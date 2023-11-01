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

import { ListItem } from "../ListItem";
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

        <ul className="flex flex-col gap-6">
          <ListItem>
            <HomeIcon activeIcon={activeIcon} onClick={handleHomeClick} />
            <span>Home</span>
          </ListItem>

          <ListItem isDisabled>
            <ExploreIcon />
            <span>Explore</span>
          </ListItem>

          <ListItem isDisabled>
            <NotificationsIcon />
            <span>Notifications</span>
          </ListItem>

          <ListItem isDisabled>
            <MessagesIcon />
            <span>Messages</span>
          </ListItem>

          <ListItem isDisabled>
            <BookmarkIcon />
            <span>Bookmarks</span>
          </ListItem>

          <ListItem isDisabled>
            <ListsIcon />
            <span>Lists</span>
          </ListItem>

          <ListItem>
            <ProfileIcon activeIcon={activeIcon} onClick={handleProfileClick} />
            <span>Profile</span>
          </ListItem>

          <ListItem isDisabled>
            <MoreIcon />
            <span>More</span>
          </ListItem>

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
