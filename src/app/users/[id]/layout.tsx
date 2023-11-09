import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User / Twitter",
  description: "See what's happening in the world right now",
};

import { AuthProviders } from "@/app/AuthProviders";
import { UserContextProvider } from "@/context/userContext";

import { LeftAside } from "@/components/asides/LeftAside";
import { RightAside } from "@/components/asides/RightAside";

interface IHomeLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IHomeLayout) {
  return (
    <AuthProviders>
      <UserContextProvider>
        <div className={`${roboto.className} lg:flex block`}>
          <LeftAside />
          {children}
          <RightAside />
        </div>
      </UserContextProvider>
    </AuthProviders>
  );
}
