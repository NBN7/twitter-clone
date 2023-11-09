"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

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

import { useUserContext } from "@/context/userContext";

import { BiDotsHorizontalRounded } from "react-icons/bi";

export const LeftAsideUser = () => {
  const { data: session } = useSession();

  const { username } = useUserContext();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div className="sticky bottom-0 w-[300px] flex flex-col gap-10 p-4">
      <div
        onClick={onOpen}
        className="flex items-center justify-between cursor-pointer hover:bg-[#181818] px-2 py-1 rounded-full"
      >
        <User
          name={session?.user?.name as string}
          description={username as string}
          avatarProps={{
            src: session?.user?.image as string,
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
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: "http://localhost:3000",
                  })
                }
                text="Log out"
                variant="default"
              />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
