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
  // const [dropDownOpen, setDropDownOpen] = useState(false);
  // const router = useRouter()
  // const toggleDropDown = () => setDropDownOpen(!dropDownOpen);
  // {
  //   const handleLogOut = async () => {
  //     await signOut();
  //     router.push("/auth/login");
  //   };

  return (
    <body className={`${inter.className} flex flex-col min-h-screen`}>
      <header className="text-3xl font-bold bg-pink-50 space-x-4 flex justify-between align-baseline w-full p-5">
        <Link href="/">
          <h1
            className={`bg-gradient-to-r from-blue-600 via-red-400 to-green-600 inline-block text-transparent bg-clip-text text-6xl m-3 ${caveat.className}`}
          >
            Doodles
          </h1>
        </Link>
        {showUser && <ImgDropDown />}
        {/* // <div className="flex items-center gap-x-4">
            //   <img
            //     src="https://placehold.co/400x400"
            //     alt="Placeholder image"
            //     className="rounded-full w-20 h-20 cursor-pointer"
            //     onClick={toggleDropDown}
            //   />
            //   {dropDownOpen && (
            //     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            //       <div className="py-1" role="manu" aria-orientation="vertical" aria-labelledby="options-menu">
            //         <Link href="/profile">
            //           <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem"></a>
            //         </Link>

            //         <form onSubmit={(e) => {
            //           e.preventDefault();
            //           handleLogOut();
            //         }}
            //         >
            //           <Button type="submit" role="menuitem">Sign out</Button>
            //         </form>
            //       </div>
            //     </div>
              )}

            </div>
          )} */}
      </header>
      <main className="main-background flex-grow min-h-screen">{children}</main>
    </body>
  );
};
