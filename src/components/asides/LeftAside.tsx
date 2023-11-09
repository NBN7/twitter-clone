"use client";

import { useId, useState } from "react";
import { useTweetButton } from "@/hooks/useTweetButton";
import { useUserContext } from "@/context/userContext";

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
  const [tweet, setTweet] = useState("");
  const { isDisabled } = useTweetButton(tweet);
  const { username } = useUserContext();

  const id = useId();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTweet(e.target.value);
  };

  const handleTweetClick = () => {
    fetch("https://localhost:7285/api/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        tweetText: tweet,
      }),
      cache: "no-cache",
    });
    onClose();
  };

  return (
    <aside className="lg:flex flex-col hidden w-full min-h-screen items-end justify-between border-r border-r-[#2F3336]">
      <div className="sticky top-0 w-[300px] flex flex-col custom-screen:gap-5 gap-10 p-4">
        <TwitterIcon />
        <LeftAsideItems />

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
                  id={id}
                  placeholder="What's happening?"
                  variant="bordered"
                  size="lg"
                  minRows={1}
                  onChange={handleOnChange}
                />
              </ModalBody>

              <ModalFooter>
                <div className="w-[100px]">
                  <Button
                    isDisabled={isDisabled}
                    onClick={handleTweetClick}
                    text="Tweet"
                    variant="primary"
                  />
                </div>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <LeftAsideUser />
    </aside>
  );
};
