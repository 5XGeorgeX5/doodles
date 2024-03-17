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
import { useState, useEffect } from "react";
import { getUserInfo } from "@/actions/getuserinfo";

export default function ImgDropDown() {
  const [profilePic, setProfilePic] = useState("profilepic");
  useEffect(() => {
    const fetchProfilePic = async () => {
      const storedProfilePic = sessionStorage.getItem("image");
      if (storedProfilePic) {
        setProfilePic(storedProfilePic);
      } else {
        const user = await getUserInfo();
        sessionStorage.setItem("image", user.image);
        sessionStorage.setItem("name", user.name);
        sessionStorage.setItem("age", user.age);
        setProfilePic(user.image);
      }
    };

    fetchProfilePic();
  }, []);

  const router = useRouter();

  const handleLogOut = async () => {
    sessionStorage.removeItem("image");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("age");
    logout();
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleAddPic = () => {
    router.push("/upload");
  };

  return (
    <div className="flex items-center justify-between space-x-12 px-8">
      <Button
        onClick={handleAddPic}
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            {profilePic.startsWith("https") ? (
              <img
                src={profilePic}
                alt="Placeholder image"
                className="h-12
                  w-12
                  cursor-pointer rounded-full
                  sm:h-16 sm:w-16"
              />
            ) : (
              <CldImage
                width="48"
                height="48"
                src={profilePic}
                alt="Profile Image"
                className="cursor-pointer
                  rounded-full
                  sm:h-16 sm:w-16"
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
