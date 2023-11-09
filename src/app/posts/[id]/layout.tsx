import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tweet / Twitter",
  description: "See what's happening in the world right now",
};

import { AuthProviders } from "@/app/AuthProviders";
import { UserContextProvider } from "@/context/userContext";

import { TweetNavbar } from "@/components/navbars/TweetNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={roboto.className}>
      <AuthProviders>
        <UserContextProvider>
          <TweetNavbar />
          {children}
        </UserContextProvider>
      </AuthProviders>
    </div>
  );
}
