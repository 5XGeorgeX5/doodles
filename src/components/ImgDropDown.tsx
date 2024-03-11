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

export default function ImgDropDown() {
  const router = useRouter();

  const handleLogOut = async () => {
    // await signOut({redirect: true, callbackUrl: '/auth/login'});
    // await signOut({ redirect: true, redirectTo: '/auth/login' });
    // await signOut();
    // router.push("/auth/login");
    logout();
  };

  // useEffect (() => {
  //   handleLogOut()
  // }, [])

  const handleProfile = () => {
    router.push("/profile");
  };

  return (
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
  );
}
