import { auth } from "@/auth";

export const getUserInfo = async () => {
  const session = await auth();
  if (!session?.user) return null;
  return session.user;
};

export const isSameUser = async (userId: string) => {
  const session = await auth();
  return userId === session?.user?.id;
};
