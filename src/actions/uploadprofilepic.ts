"use server";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export const uploadProfilePic = async (public_id: string) => {
  const session = await auth();
  if (!session?.user?.id) return null;
  await db.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      image: public_id,
    },
  });
};
