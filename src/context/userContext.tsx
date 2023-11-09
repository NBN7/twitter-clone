"use client";

import { TUser } from "@/types/user";
import { createContext, useContext, useState } from "react";

type TUserContext = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<TUserContext | null>(null);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }

  return context;
};
