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
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { getUserImage } from "@/actions/getuserinfo";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";
import { useEffect } from "react";

export default function ImgDropDown() {
  const [profilePic, setProfilePic] = useState("profilepic");
  useEffect(() => {
    const fetchProfilePic = async () => {
      const storedProfilePic = sessionStorage.getItem("image");
      if (storedProfilePic) {
        setProfilePic(storedProfilePic);
      } else {
        const image = await getUserImage();
        sessionStorage.setItem("image", image);
        setProfilePic(image);
      }
    };

    fetchProfilePic();
  }, []);

  const router = useRouter();

  const handleLogOut = async () => {
    sessionStorage.removeItem("image");
    logout();
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleAddPic = () => {
    router.push("/upload");
  };

  return (
    <div className="flex justify-between space-x-12 items-center px-8">
      <Button
        onClick={handleAddPic}
        variant={"outline"}
        className="bg-orange-600
         text-yellow-100
          focus:bg-orange-800
          hover:bg-orange-400
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
          <div>
            {profilePic.startsWith("https") ? (
              <img
                src={profilePic}
                alt="Placeholder image"
                className="rounded-full
                  cursor-pointer
                  w-12 h-12
                  sm:w-16 sm:h-16"
              />
            ) : (
              <CldImage
                width="48"
                height="48"
                src={profilePic}
                alt="Profile Image"
                className="rounded-full
                  cursor-pointer
                  sm:w-16 sm:h-16"
              />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogOut}>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
