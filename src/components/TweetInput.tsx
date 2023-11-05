"use client";

import { useSession } from "next-auth/react";

import { useId } from "react";

import { Avatar } from "@nextui-org/avatar";
import { Textarea } from "@nextui-org/input";

import { Button } from "./buttons/Button";

export const TweetInput = () => {
  const { data: session } = useSession();

  const id = useId();

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
          />
        </div>

        <div className="w-full flex items-end justify-end">
          <div className="w-[100px]">
            <Button text="Tweet" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
