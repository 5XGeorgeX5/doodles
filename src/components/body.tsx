// "use client"
import { Caveat_Brush } from "next/font/google";
import { Inter } from "next/font/google";
import Link from "next/link";
import ImgDropDown from "@/components/ImgDropDown";

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
    <body 
      className={`${inter.className} 
      flex
      flex-col
`}>
      <header className="font-bold
       bg-orange-100
        space-x-4
        flex
        justify-between
         w-full
         border-b-4
         fixed top-0 left-0 z-50
         border-orange-300" >
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
      <main style={{ backgroundImage: "url('/BackGround3.png')" }}
        className="overflow-y-auto
        min-h-screen
        bg-center
        bg-cover
        bg-no-repeat
        h-full w-full
        fixed
        z-0
        inset
        pb-5
        pt-24
        sm:pt-28"
      >
        {children}
      </main>
    </body>
  );
};
