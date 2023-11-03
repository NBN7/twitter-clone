import type { TUser } from "@/types/user";

export const getOneUser = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      cache: "no-cache",
    }
  );
  const data: TUser = await response.json();
  return data;
};
