import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home / Twitter",
  description: "See what's happening in the world right now",
};

import { AuthProviders } from "../AuthProviders";

import { HomeNavbar } from "@/components/navbars/HomeNavbar";
import { LeftAside } from "@/components/asides/LeftAside";
import { RightAside } from "@/components/asides/RightAside";

import { UserContextProvider } from "@/context/userContext";

interface IHomeLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IHomeLayout) {
  return (
    <AuthProviders>
      <UserContextProvider>
        <div className={`${roboto.className} lg:flex block`}>
          <HomeNavbar />

          <LeftAside />
          {children}
          <RightAside />
        </div>
      </UserContextProvider>
    </AuthProviders>
  );
}
