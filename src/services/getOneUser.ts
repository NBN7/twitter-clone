import type { TUser } from "@/types/user";

export const getOneUser = async (username: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${username}`,
    {
      cache: "no-cache",
    }
  );
  const data: TUser = await response.json();
  return data;
};
