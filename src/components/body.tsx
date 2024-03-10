import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Caveat_Brush } from "next/font/google";
import { Inter } from "next/font/google";

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
    <body className={`${inter.className} flex flex-col min-h-screen`}>
      <header className="text-3xl font-bold bg-lime-50 space-x-4 flex justify-between align-baseline w-full p-5">
        <h1
          className={`bg-gradient-to-r from-blue-600 via-red-400 to-green-600 inline-block text-transparent bg-clip-text text-6xl m-3  ${caveat.className}`}
        >
          Doodles
        </h1>
        {showUser && (
          <div className="flex items-center gap-x-4">
            <form
              action={async () => {
                "use server";

                await signOut();
              }}
            >
              <Button type="submit">Sign out</Button>
            </form>
            <img
              src="https://placehold.co/400x400"
              alt="Placeholder image"
              className="rounded-full w-20 h-20"
            />
          </div>
        )}
      </header>
      <main className="main-background flex-grow min-h-screen">{children}</main>
    </body>
  );
};
