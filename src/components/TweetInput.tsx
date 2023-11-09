"use client";

import { useUserContext } from "@/context/userContext";
import { useSession } from "next-auth/react";

import { useId, useState } from "react";
import { useTweetButton } from "@/hooks/useTweetButton";

import { Avatar } from "@nextui-org/avatar";
import { Textarea } from "@nextui-org/input";

import { Button } from "./buttons/Button";

export const TweetInput = () => {
  const { data: session } = useSession();

  const { username } = useUserContext();

  const id = useId();

  const [tweet, setTweet] = useState("");
  const { isDisabled } = useTweetButton(tweet);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTweet(e.target.value);
  };

  const handleOnClick = () => {
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
    setTweet("");
  };

  return (
    <section className="lg:flex hidden justify-center overflow-hidden">
      <div className="w-[600px] sm:border-[#2F3336] border-b border-b-[#2F3336] flex flex-col gap-6 p-4 overflow-hidden">
        <div className="flex items-center gap-4">
          <div>
            <Avatar src={session?.user?.image as string} />
          </div>

          <Textarea
            id={id}
            placeholder="What's happening?"
            variant="bordered"
            size="lg"
            minRows={1}
            onChange={handleOnChange}
            value={tweet}
          />
        </div>

        <div className="w-full flex items-end justify-end">
          <div className="w-[100px]">
            <Button
              onClick={handleOnClick}
              isDisabled={isDisabled}
              text="Tweet"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
