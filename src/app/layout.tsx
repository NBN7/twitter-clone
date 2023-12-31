import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Providers } from "./Providers";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter / It's what's happening",
  description: "See what's happening in the world right now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
