"use client";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
} from "@nextui-org/modal";
import { User } from "@nextui-org/user";

import { Button } from "./buttons/Button";

import { BiDotsHorizontalRounded } from "react-icons/bi";

export const LeftAsideUser = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleClick = () => {
    onClose();
  };

  return (
    <div className="sticky bottom-0 w-[300px] flex flex-col gap-10 p-4">
      <div
        onClick={onOpen}
        className="flex items-center justify-between cursor-pointer"
      >
        <User
          name="User Name"
          description="@username"
          avatarProps={{
            src: "./assets/luffy.png",
            alt: "profile picture",
            size: "lg",
          }}
        />

        <BiDotsHorizontalRounded size="20px" />
      </div>

      <Modal
        placement="center"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader>Account</ModalHeader>

          <ModalBody></ModalBody>

          <ModalFooter>
            <div className="w-[100px]">
              <Button onClick={handleClick} text="Log out" variant="default" />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
