"use client";

import { SessionProvider } from "next-auth/react";

interface IAuthProviders {
  children: React.ReactNode;
}

export const AuthProviders = ({ children }: IAuthProviders) => {
  return <SessionProvider>{children}</SessionProvider>;
};
