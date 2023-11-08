import type { TPost } from "@/types/post";

export const getAllPosts = async () => {
  const response = await fetch("https://localhost:7285/api/tweets", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: TPost[] = await response.json();
  return data;
};
