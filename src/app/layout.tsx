import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Doodles",
  description: "Drawing sharing app",
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
