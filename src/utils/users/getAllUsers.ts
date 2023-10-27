import type { TUser } from "@/types/User";

export const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const data: TUser[] = await response.json();
  return data;
};
