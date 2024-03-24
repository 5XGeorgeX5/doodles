import { Caveat_Brush } from "next/font/google";
import { Inter } from "next/font/google";
import Link from "next/link";
import ImgDropDown from "@/components/ImgDropDown";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  return (
    <body
      className={`${inter.className} 
      flex
      flex-col
`}
    >
      <header
        className="fixed
       left-0
        top-0
        z-50
        flex
        w-full
        justify-between
        space-x-4 border-b-4 border-orange-300 bg-orange-100
      font-bold"
      >
        <Link href="/">
          <h1
            className={`m-3
             inline-block bg-gradient-to-r from-blue-600
             via-red-400
             to-green-600
             bg-clip-text
             text-4xl
             text-transparent
             sm:text-6xl
             ${caveat.className}`}
          >
            Doodles
          </h1>
        </Link>

        {showUser && <ImgDropDown />}
      </header>
      <main
        style={{ backgroundImage: "url('/BackGround3.png')" }}
        className="inset
        fixed
        z-0
        h-full
        min-h-screen
        w-full overflow-y-auto
        bg-cover
        bg-center
        bg-no-repeat
        pb-5
        pt-24
        sm:pt-28"
      >
        {children}
      </main>
      <SpeedInsights />
    </body>
  );
};
