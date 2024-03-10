import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doodles",
  description: "drawing sharing app",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
  showUser = true,
}: Readonly<{
  children: React.ReactNode;
  showUser?: boolean;
}>) {
  return <html lang="en">{children}</html>;
}
