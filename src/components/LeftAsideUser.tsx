import { User } from "@nextui-org/user";

import { BiDotsHorizontalRounded } from "react-icons/bi";

export const LeftAsideUser = () => {
  return (
    <div className="sticky bottom-0 w-[300px] flex flex-col gap-10 p-4">
      <div className="flex items-center justify-between cursor-pointer">
        <User
          name="User Name"
          description="@username"
          avatarProps={{
            src: "/luffy.png",
            alt: "profile picture",
            size: "lg",
          }}
        />

        <BiDotsHorizontalRounded size="20px" />
      </div>
    </div>
  );
};
