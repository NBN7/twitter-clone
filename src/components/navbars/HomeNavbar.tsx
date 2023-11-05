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
import { Avatar } from "@nextui-org/avatar";

import { Button } from "../buttons/Button";

import { BiLogoTwitter } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export const HomeNavbar = () => {
  const { data: session } = useSession();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <nav className="lg:hidden w-full flex justify-between py-4 px-6 items-center backdrop-blur-lg border-b border-b-[#2F3336] sticky top-0 z-50">
      <Avatar
        onClick={onOpen}
        className="cursor-pointer"
        src={session?.user?.image as string}
        size="sm"
      />

      <button onClick={() => scroll(0, 0)}>
        <BiLogoTwitter size="30px" className="text-[#1EA0F1]" />
      </button>

      <button>
        <FiSettings size="20px" />
      </button>

      <Modal
        placement="bottom"
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
                    callbackUrl: "/",
                  })
                }
                text="Log out"
                variant="default"
              />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </nav>
  );
};
