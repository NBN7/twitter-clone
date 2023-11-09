"use client";

import { useId, useState } from "react";

import { useRouter } from "next/navigation";

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

import { Button } from "./Button";

import { AiOutlinePlus } from "react-icons/ai";

export const AddTweetButton = () => {
  const { username } = useUserContext();
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const id = useId();

  const [tweet, setTweet] = useState("");
  const { isDisabled } = useTweetButton(tweet);

  const handleClick = () => {
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
    router.refresh();
    router.push("/home");
    onClose();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTweet(e.target.value);
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
              onChange={handleOnChange}
            />
          </ModalBody>

          <ModalFooter>
            <div className="w-[100px]">
              <Button
                isDisabled={isDisabled}
                onClick={handleClick}
                text="Tweet"
                variant="primary"
              />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
