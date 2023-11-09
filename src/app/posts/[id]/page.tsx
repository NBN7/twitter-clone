"use client";

import { useState, useEffect } from "react";

import { getOnePost } from "@/services/getOnePost";
import { TPost } from "@/types/post";

import { TweetPost } from "@/components/posts/TweetPost";

import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface IPostPage {
  params: Params;
}

export default async function PostPage({ params }: IPostPage) {
  const { id } = params;
  const [tweet, setTweet] = useState<TPost>();

  useEffect(() => {
    getOnePost(id).then((post) => setTweet(post));
  }, []);

  return <TweetPost post={tweet as TPost} />;
}
