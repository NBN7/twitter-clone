import { HomePost } from "@/components/posts/HomePost";
import type { TPost } from "@/types/post";

import { getAllPosts } from "@/services/getAllPosts";

import { AddTweetButton } from "@/components/buttons/AddTweetButton";
import { HomeFooter } from "@/components/footers/HomeFooter";
import { TweetInput } from "@/components/TweetInput";

export default async function HomePage() {
  const posts = await getAllPosts();

  console.log(posts);

  return (
    <main>
      <TweetInput />

      {posts.map((post: TPost) => (
        <HomePost key={post.id} post={post} />
      ))}
      <AddTweetButton />

      <HomeFooter />
    </main>
  );
}
