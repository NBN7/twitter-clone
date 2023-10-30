"use client";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
} from "@nextui-org/modal";

import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "./Button";
import { Input } from "@nextui-org/input";

export const AddTweetButton = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleClick = () => {
    onClose();
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="lg:hidden fixed rounded-full bg-sky-500 bottom-0 right-0 p-3 mr-4 mb-20 z-50"
      >
        <AiOutlinePlus size="25px" />
      </button>

      <Modal
        placement="center"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader>Tweet</ModalHeader>

          <ModalBody>
            <Input
              placeholder="What's happening?"
              variant="bordered"
              size="lg"
            />
          </ModalBody>

          <ModalFooter>
            <div className="w-[100px]">
              <Button onClick={handleClick} text="Tweet" variant="primary" />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
