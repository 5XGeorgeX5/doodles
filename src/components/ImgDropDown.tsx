"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ImgDropDown() {
  const router = useRouter();

  const handleLogOut = async () => {
    logout();
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleAddPic = () => {
    router.push("/upload");
  };

  return (
    <div className="flex justify-between space-x-6 items-center">
      <Button
        onClick={handleAddPic}
        variant={"outline"}
        className="bg-orange-700
         text-yellow-100
          focus:bg-orange-800
          hover:bg-orange-500
          rounded-full
          w-10 h-10
          sm:rounded-lg
          sm:min-w-max
          "
      >
        <span className="hidden sm:block">New Doodle</span>
        <span className="sm:hidden text-lg">+</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            src="https://placehold.co/400x400"
            alt="Placeholder image"
            className="rounded-full
            cursor-pointer
            w-12 h-12
            sm:w-20 sm:h-20"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogOut}>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
