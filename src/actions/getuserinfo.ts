"use server";
import { auth } from "@/auth";

export const getUserImage = async () => {
  const session = await auth();
  if (!session?.user?.image) {
    return "profilepic";
  }
  return session.user.image;
};
