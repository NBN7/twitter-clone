import type { TUser } from "@/types/user";

export const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const data: TUser[] = await response.json();
  return data;
};
