"use client";

import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface ILikeButton {
  userName: string;
  tweetId: number;
}

export const LikeButton = ({ userName, tweetId }: ILikeButton) => {
  const router = useRouter();

  const handleClick = async () => {
    fetch("https://localhost:7285/api/tweets/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        tweetId,
      }),
    });

    router.push(`/posts/${tweetId}`);
  };

  return (
    <button onClick={handleClick}>
      <AiOutlineHeart size="20px" />
    </button>
  );
};
