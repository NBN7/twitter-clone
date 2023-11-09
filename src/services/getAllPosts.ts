import type { TPost } from "@/types/post";

export const getAllPosts = async () => {
  const response = await fetch("https://localhost:7285/api/tweets", {
    cache: "no-cache",
  });

  const data: TPost[] = await response.json();
  return data;
};
