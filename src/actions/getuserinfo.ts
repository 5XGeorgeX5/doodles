"use server";
import { auth } from "@/auth";
import { getUserAge } from "@/data/user";
import { db } from "@/lib/db";

export const getUserInfo = async () => {
  const session = await auth();
  const user = await db.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    select: {
      name: true,
      image: true,
      birthDay: true,
    },
  });
  const age = getUserAge(user?.birthDay);
  const userInfo = {
    name: user?.name || "user name",
    image: user?.image || "profilepic",
    age,
  };
  return userInfo;
};
