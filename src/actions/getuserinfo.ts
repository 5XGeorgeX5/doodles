import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserInfo = async () => {
  const session = await auth();
  if (!session?.user) return null;
  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      id: true,
      name: true,
      image: true,
    },
  });
  return user;
};

export const isSameUser = async (userId: string) => {
  const session = await auth();
  return userId === session?.user?.id;
};
