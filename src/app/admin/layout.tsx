import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AuthStateChangeProvider from "@/context/auth";
import { UserProvider } from "@/context/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
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
        {/* <UserProvider>
          <AuthStateChangeProvider> */}
        {children}
        {/* </AuthStateChangeProvider>
        </UserProvider> */}
      </body>
    </html>
  );
}
