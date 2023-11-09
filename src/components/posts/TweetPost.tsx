"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useUserContext } from "@/context/userContext";
import { useSession } from "next-auth/react";

import { CommentButton } from "../buttons/CommentButton";
import { RetweetButton } from "../buttons/RetweetButton";
import { LikeButton } from "../buttons/LikeButton";
import { ShareButton } from "../buttons/ShareButton";
import { useTweetButton } from "@/hooks/useTweetButton";

import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";

import type { TPost } from "@/types/post";

interface ITweetPost {
  post: TPost;
}

import { User } from "@nextui-org/user";
import { Button } from "../buttons/Button";
import { getUserByEmail } from "@/services/getUserByEmail";

export const TweetPost = ({ post }: ITweetPost) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { username, setUsername } = useUserContext();

  const [comment, setComment] = useState("");

  const { isDisabled } = useTweetButton(comment);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    fetch(`https://localhost:7285/api/tweets/comment/${post?.id}`, {
      method: "POST",
      body: JSON.stringify({
        userName: username,
        tweetText: comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    getUserByEmail(session?.user?.email as string).then((data) => {
      setUsername(data?.userName);
    });
  }, [session]);

  return (
    <article className="w-full flex flex-col items-center overflow-hidden">
      <div className="w-full sm:w-[600px] sm:border-[#2F3336] sm:border-l sm:border-r p-4">
        <User
          name={`${post?.firstName} ${post?.lastName}`}
          description={`@${post?.userName}`}
          avatarProps={{
            src: post?.image,
            alt: post?.userName,
            size: "lg",
          }}
        />

        <p>{post?.tweetText}</p>

        <span className="text-[#71767B]">
          {new Date(post?.createdAt).toLocaleDateString()}
        </span>

        <Divider className="my-4" />

        {/* REPLIES & LIKES HARDCODED */}
        <section className="flex gap-4">
          <h3>
            {post?.numComments} <span className="text-[#71767B]">Replies</span>
          </h3>
          <h3>
            {post?.numLikes} <span className="text-[#71767B]">Likes</span>
          </h3>
        </section>

        <Divider className="my-4" />

        <section className="w-full flex items-center justify-evenly text-[#71767B]">
          <div className="flex gap-2 items-center hover:text-sky-600 transition-all duration-300">
            <CommentButton />
            <p>{post?.numComments}</p>
          </div>

          <div className="flex gap-2 items-center hover:text-green-400 transition-all duration-300">
            <RetweetButton userName={post?.userName} tweetId={post?.id} />
            <p>{post?.numReposts}</p>
          </div>

          <div className="flex gap-2 items-center hover:text-pink-600 transition-all duration-300">
            <LikeButton userName={post?.userName} tweetId={post?.id} />
            <p>{post?.numLikes}</p>
          </div>

          <ShareButton />
        </section>

        <Divider className="my-4" />

        <div className="flex flex-col gap-6 mb-4">
          <Input
            onChange={handleOnChange}
            placeholder="Comment something"
            variant="underlined"
          />
          <Button
            isDisabled={isDisabled}
            onClick={handleCommentSubmit}
            text="Comment"
            variant="primary"
          ></Button>
        </div>

        {post?.comments?.map((comment) => (
          <article className="w-full flex flex-col items-center overflow-hidden">
            <div className="w-full sm:w-[600px] sm:border-[#2F3336] sm:border-l sm:border-r p-4">
              <User
                name={`${comment.firstName} ${comment?.lastName}`}
                description={`@${comment?.userName}`}
                avatarProps={{
                  src: comment?.image,
                  alt: comment?.userName,
                  size: "lg",
                }}
              />

              <p>{comment?.tweetText}</p>

              <span className="text-[#71767B]">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>

              <Divider className="my-4" />

              <section className="w-full flex items-center justify-evenly text-[#71767B]">
                <CommentButton
                  onClick={() => router.push(`/posts/${comment?.id}`)}
                />
                <RetweetButton
                  tweetId={comment?.id}
                  userName={comment?.userName}
                />
                <LikeButton
                  tweetId={comment?.id}
                  userName={comment?.userName}
                />
                <ShareButton />
              </section>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
};
