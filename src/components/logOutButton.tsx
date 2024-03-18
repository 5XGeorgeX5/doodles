"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/logout";

export const LogOutButton = () => {
  const handleLogOut = async () => {
    logout();
  };
  return <DropdownMenuItem onClick={handleLogOut}>Log Out</DropdownMenuItem>;
};
