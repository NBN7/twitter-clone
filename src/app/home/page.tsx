"use client";

import { useSession } from "next-auth/react";

import { HomePost } from "@/components/posts/HomePost";
import type { TPost } from "@/types/post";

import { getAllPosts } from "@/services/getAllPosts";
import { getUserByEmail } from "@/services/getUserByEmail";
import { getRandom } from "@/utils/getRandom";
import { useUserContext } from "@/context/userContext";

import { AddTweetButton } from "@/components/buttons/AddTweetButton";
import { HomeFooter } from "@/components/footers/HomeFooter";
import { TweetInput } from "@/components/TweetInput";

import { useState, useEffect } from "react";

export default function HomePage() {
  const { data: session } = useSession();
  const { setUsername } = useUserContext();

  const [userExists, setUserExists] = useState(false);

  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const email = session?.user?.email as string;

    getAllPosts().then((data) => setPosts(data.reverse()));

    if (email) {
      getUserByEmail(email).then((data) => {
        !data.userName ? setUserExists(false) : setUsername(data.userName);
      });
    }

    if (!userExists) {
      const fullName = session?.user?.name?.split(" ");
      const username =
        (((fullName?.[0].toLowerCase() as string) +
          fullName?.[1].toLocaleLowerCase()) as string) + getRandom(9);
      setUsername(username);

      if (session?.user?.email && session.user.image && session.user.name) {
        fetch("https://localhost:7285/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: username,
            firstName: fullName?.[0],
            lastName: fullName?.[1],
            email: session.user.email,
            image: session.user.image,
          }),
          cache: "no-cache",
        });
      }
    }
  }, [session]);

  return (
    <main className="min-h-screen">
      <TweetInput />

      {posts?.map((post: TPost) => (
        <HomePost key={post.id} post={post} />
      ))}
      <AddTweetButton />

      <HomeFooter />
    </main>
  );
}
