// "use client"
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Caveat_Brush } from "next/font/google";
import { Inter } from "next/font/google";
import Link from "next/link";
import ImgDropDown from "@/components/ImgDropDown";
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});

const inter = Inter({ subsets: ["latin"] });

interface BodyProps {
  children: React.ReactNode;
  showUser?: boolean;
}

export const Body = ({ children, showUser }: BodyProps) => {
  const handleNewDoodle = () => {
    
  }
  return (
    <body className={`${inter.className} flex flex-col min-h-screen `}>
      <header className="text-3xl
       font-bold
       bg-pink-100
        space-x-4
        flex
        justify-between
        align-baseline
         w-full p-5
         border-b-4
         border-pink-300" >
        <Link href="/">
          <h1
            className={`bg-gradient-to-r
             from-blue-600 via-red-400 to-green-600
             inline-block
             text-transparent
             bg-clip-text
             text-4xl
             sm:text-6xl
             m-3
             ${caveat.className}`}
          >
            Doodles
          </h1>
        </Link>
        {showUser && <ImgDropDown />}
      </header>
      <main className="main-background bg-center bg-cover bg-no-repeat h-full w-full pt-9">{children}</main>
    </body>
  );
};
