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
    <div className="flex gap-2 justify-center space-x-6 items-center">
      <Button onClick={handleAddPic} className="bg-pink-700 text-yellow-100">New Doodle</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            src="https://placehold.co/400x400"
            alt="Placeholder image"
            className="rounded-full w-20 h-20 cursor-pointer"
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
