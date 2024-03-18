import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ProfilePic } from "./profile-pic";
import { LogOutButton } from "./logOutButton";
import Link from "next/link";
import { getUserInfo } from "@/actions/getuserinfo";

export default async function ImgDropDown() {
  const user = await getUserInfo();
  if (!user) return null;
  return (
    <div className="flex items-center justify-between space-x-12 px-8">
      <Link href="/upload">
        <Button
          variant={"outline"}
          className="h-10
         w-10
          rounded-full
          bg-orange-600
          text-yellow-100
          hover:bg-orange-400 focus:bg-orange-800
          sm:min-w-max
          sm:rounded-lg
          "
        >
          <span className="hidden sm:block">New Doodle</span>
          <span className="text-lg sm:hidden">+</span>
        </Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <ProfilePic
              profilePic={user.image || "profilepic"}
              size="48"
              className="
                  h-12
                  w-12
                  cursor-pointer rounded-full
                  sm:h-16 sm:w-16"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href={`/profile/${user.id}`}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <LogOutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
