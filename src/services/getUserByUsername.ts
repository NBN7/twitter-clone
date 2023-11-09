import type { TUser } from "@/types/user";

export const getUserByUsername = async (username: string) => {
  const response = await fetch(`https://localhost:7285/api/users/username/${username}`);

  const data: TUser = await response.json();
  return data;
};
