import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doodles",
  description: "drawing sharing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="text-3xl font-bold bg-slate-200 space-x-4">
          <h1 className="bg-gradient-to-r from-blue-600 via-red-400 to-green-600 inline-block text-transparent bg-clip-text {caveat.className}">
            Doodles
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
