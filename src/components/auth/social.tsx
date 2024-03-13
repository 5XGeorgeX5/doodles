"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export const Social = () => {
  return (
    <div className="flex items-center gap-x-2 w-full">
      <Button
        size="lg"
        variant="outline"
        className="w-full"
        onClick={() =>
          signIn("google", {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
          })
        }
      >
        <FcGoogle className="h-5 w-5"></FcGoogle>
      </Button>
    </div>
  );
};
