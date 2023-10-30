import { Avatar } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";

import { Button } from "./buttons/Button";

export const TweetInput = () => {
  return (
    <section className="lg:flex hidden justify-center overflow-hidden">
      <div className="w-[600px] sm:border-[#2F3336] border-b border-b-[#2F3336] flex flex-col gap-6 p-4 cursor-pointer overflow-hidden">
        <div className="flex items-center gap-4">
          <Avatar src="/luffy.png" />
          <Input placeholder="What's happening?" variant="bordered" size="lg" />
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
