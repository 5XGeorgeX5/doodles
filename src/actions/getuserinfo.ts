"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserImage = async () => {
  const session = await auth();
  const user = await db.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    select: {
      image: true,
    },
  });
  if (!user?.image) {
    return "profilepic";
  }
  return user.image;
};
