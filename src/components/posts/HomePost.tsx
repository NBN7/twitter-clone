"use client";

import { useRouter } from "next/navigation";

import { CommentButton } from "../buttons/CommentButton";
import { RetweetButton } from "../buttons/RetweetButton";
import { LikeButton } from "../buttons/LikeButton";
import { ShareButton } from "../buttons/ShareButton";

import { Avatar } from "@nextui-org/avatar";

import type { TPost } from "@/types/post";

interface IPost {
  post: TPost;
}

export const HomePost = ({ post }: IPost) => {
  const router = useRouter();

  const handleArticleClick = () => {
    router.push(`/posts/${post.id}`);
  };

  const handleCommentClick = () => {
    router.push(`/posts/${post.id}`);
  };

  const handleOnImageClick = () => {
    router.push(`/users/${post.userName}`);
  };

  return (
    <article className="flex justify-center overflow-hidden">
      <div className="sm:w-[600px] sm:border-[#2F3336] border-b border-b-[#2F3336] w-full flex gap-4 p-4 cursor-pointer overflow-hidden">
        {/* PROFILE PICTURE CONTAINER */}
        <div onClick={handleOnImageClick}>
          <Avatar src={post.image} />
        </div>

        {/* POST CONTENT CONTAINER */}
        <div className="w-full overflow-hidden">
          {/* POST HEADER */}
          <div className="w-full flex gap-2 overflow-hidden">
            <h2 className="font-bold truncate">
              {post.firstName} {post.lastName}
            </h2>
            <h3 className="text-[#71767B] truncate">@{post.userName}</h3>
          </div>

          {/* POST BODY */}
          <p onClick={handleArticleClick}>{post.tweetText}</p>

          {/* POST FOOTER */}
          <div className="w-full flex justify-between items-center mt-2 text-[#71767B]">
            <div className="flex gap-2 items-center hover:text-sky-600 transition-all duration-300">
              <CommentButton onClick={handleCommentClick} />
              <p>{post.numComments}</p>
            </div>

            <div className="flex gap-2 items-center hover:text-green-400 transition-all duration-300">
              <RetweetButton userName={post.userName} tweetId={post.id} />
              <p>{post.numReposts}</p>
            </div>

            <div className="flex gap-2 items-center hover:text-pink-600 transition-all duration-300">
              <LikeButton userName={post.userName} tweetId={post.id} />
              <p>{post.numLikes}</p>
            </div>

            <ShareButton />
          </div>
        </div>
      </div>
    </article>
  );
};
