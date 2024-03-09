import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="text-3xl font-bold bg-lime-50 space-x-4 flex justify-between align-baseline w-full p-5">
          <h1
            className={`bg-gradient-to-r from-blue-600 via-red-400 to-green-600 inline-block text-transparent bg-clip-text text-6xl m-3  ${caveat.className}`}
          >
            Doodles
          </h1>
          <img
            src="https://placehold.co/400x400"
            alt="Placeholder image"
            className="rounded-full w-20 h-20"
          />
        </header>
        <main className="main-background flex-grow min-h-screen">{children}</main>
      </body>
    </html>
  );
}
