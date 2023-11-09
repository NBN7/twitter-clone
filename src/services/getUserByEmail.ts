import type { TUser } from "@/types/user";

export const getUserByEmail = async (email: string) => {
  const response = await fetch(
    `https://localhost:7285/api/users/email/${email}`,
    {
      cache: "no-cache",
    }
  );
  const data: TUser = await response.json();
  return data;
};
