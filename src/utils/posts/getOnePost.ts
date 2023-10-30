import type { TPost } from "@/types/post";

export const getOnePost = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-cache",
    }
  );
  const data: TPost = await response.json();
  return data;
};
