import { CommentButton } from "../buttons/CommentButton";
import { RetweetButton } from "../buttons/RetweetButton";
import { LikeButton } from "../buttons/LikeButton";
import { ShareButton } from "../buttons/ShareButton";

import { Divider } from "@nextui-org/divider";

import type { TUser } from "@/types/user";
import type { TPost } from "@/types/post";

interface ITweerPost {
  user: TUser;
}

import { User } from "@nextui-org/user";

export const TweetPost = ({ user }: ITweerPost) => {
  return (
    <article className="w-full flex flex-col items-center overflow-hidden">
      <div className="sm:w-[600px] sm:border-[#2F3336] sm:border-l sm:border-r p-4">
        <User
          name={user.name}
          description={`@${user.username}`}
          avatarProps={{
            src: "./assets/luffy.png",
            alt: "Luffy",
            size: "lg",
          }}
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptates repellendus esse quisquam amet voluptate quibusdam mollitia
          at eos nihil laborum ad ducimus, accusantium minus, ullam inventore
          vitae laboriosam quidem. Quas eveniet repellat sed laborum, dolorem
          quia optio fugiat pariatur quidem voluptates assumenda dolores
          cupiditate obcaecati magnam vero eius sunt necessitatibus molestias
          temporibus similique eum delectus laudantium iusto. Quos, nulla!
        </p>

        <span className="text-[#71767B]">2:27 · 25 oct. 2023</span>

        <Divider className="my-4" />

        {/* REPLIES & LIKES HARDCODED */}
        <section className="flex gap-4">
          <h3>
            2 <span className="text-[#71767B]">Replies</span>
          </h3>
          <h3>
            2 <span className="text-[#71767B]">Likes</span>
          </h3>
        </section>

        <Divider className="my-4" />

        <section className="w-full flex items-center justify-evenly text-[#71767B]">
          <CommentButton />
          <RetweetButton />
          <LikeButton />
          <ShareButton />
        </section>

        <Divider className="my-4" />
      </div>
    </article>
  );
};
