import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

import SessionProvider from "../SessionProvider";
import NavBar from "../component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign Up | User",
  description: "Welcome to the LansiCare App!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
