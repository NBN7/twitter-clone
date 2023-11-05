"use client";

import { useId } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
} from "@nextui-org/modal";
import { Textarea } from "@nextui-org/input";

import { Button } from "./Button";

import { AiOutlinePlus } from "react-icons/ai";

export const AddTweetButton = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const id = useId();

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
            <Textarea
              id={id}
              placeholder="What's happening?"
              variant="bordered"
              size="lg"
              minRows={1}
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
