"use client";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
} from "@nextui-org/modal";
import { Textarea } from "@nextui-org/input";

import { Button } from "../buttons/Button";
import { LeftAsideItems } from "../LeftAsideItems";
import { LeftAsideUser } from "../LeftAsideUser";

import { TwitterIcon } from "../icons/TwitterIcon";

export const LeftAside = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleTweetClick = () => {
    onClose();
  };

  return (
    <aside className="lg:flex flex-col hidden w-full min-h-screen items-end justify-between border-r border-r-[#2F3336]">
      <div className="sticky top-0 w-[300px] flex flex-col gap-10 p-4">
        <TwitterIcon />
        <LeftAsideItems />

        <div className="w-3/4">
          <Button onClick={onOpen} text="Tweet" variant="primary" />

          {/* MODAL */}
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
                    onClick={handleTweetClick}
                    text="Tweet"
                    variant="primary"
                  />
                </div>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* MODAL END */}
        </div>
      </div>

      <LeftAsideUser />
    </aside>
  );
};
