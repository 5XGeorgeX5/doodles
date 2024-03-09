"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center gap-x-2 w-full">
      <Button size="lg" variant="outline" className="w-full" onClick={() => {}}>
        <FcGoogle className="h-5 w-5"></FcGoogle>
      </Button>
      <Button size="lg" variant="outline" className="w-full" onClick={() => {}}>
        <FaFacebook className="h-5 w-5 text-[#1877F2]"></FaFacebook>
      </Button>
    </div>
  );
};
