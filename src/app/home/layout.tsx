import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home / Twitter",
  description: "See what’s happening in the world right now",
};

import { HomeNavbar } from "@/components/navbars/HomeNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={roboto.className}>
      <HomeNavbar />
      {children}
    </div>
  );
}
