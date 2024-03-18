"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserInfo = async () => {
  const session = await auth();
  try {
    const user = await db.user.findUnique({
      where: {
        id: session?.user?.id,
      },
      select: {
        id: true,
        image: true,
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const isSameUser = async (userId: string) => {
  const session = await auth();
  return userId === session?.user?.id;
};
