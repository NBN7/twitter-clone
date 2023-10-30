import type { TPost } from "@/types/post";

export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });
  const data: TPost[] = await response.json();
  return data;
};
