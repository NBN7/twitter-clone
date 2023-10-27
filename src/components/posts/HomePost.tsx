"use client";

import { useRouter } from "next/navigation";

import { CommentButton } from "../buttons/CommentButton";
import { RetweetButton } from "../buttons/RetweetButton";
import { LikeButton } from "../buttons/LikeButton";
import { ShareButton } from "../buttons/ShareButton";

import { Avatar } from "@nextui-org/avatar";

import type { TUser } from "@/types/User";
import type { TPost } from "@/types/Post";

interface IPost {
  user: TUser;
}

export const HomePost = ({ user }: IPost) => {
  const router = useRouter();

  const handleArticleClick = () => {
    router.push(`/posts/${user.id}`);
  };

  return (
    <article
      onClick={handleArticleClick}
      className="w-full flex justify-center overflow-hidden"
    >
      <div className="sm:w-[600px] sm:border-[#2F3336] sm:border-l sm:border-r w-full flex gap-2 p-4 border-b border-b-[#2F3336] cursor-pointer overflow-hidden">
        {/* PROFILE PICTURE CONTAINER */}
        <div>
          <Avatar src="/luffy.png" />
        </div>

        {/* POST CONTENT CONTAINER */}
        <div className="w-full overflow-hidden">
          {/* POST HEADER */}
          <div className="w-full flex gap-2 overflow-hidden">
            <h2 className="font-bold truncate">{user.name}</h2>
            <h3 className="text-[#71767B] truncate">@{user.username}</h3>
          </div>

          {/* POST BODY */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptates repellendus esse quisquam amet voluptate quibusdam
            mollitia at eos nihil laborum ad ducimus, accusantium minus, ullam
            inventore vitae laboriosam quidem. Quas eveniet repellat sed
            laborum, dolorem quia optio fugiat pariatur quidem voluptates
            assumenda dolores cupiditate obcaecati magnam vero eius sunt
            necessitatibus molestias temporibus similique eum delectus
            laudantium iusto. Quos, nulla!
          </p>

          {/* POST FOOTER */}
          <div className="w-full flex justify-between items-center mt-2 text-[#71767B]">
            <CommentButton />
            <RetweetButton />
            <LikeButton />
            <ShareButton />
          </div>
        </div>
      </div>
    </article>
  );
};
