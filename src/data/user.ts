import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        drawings: {
          orderBy: {
            created_at: "desc",
          },
        },
      },
    });
    return user;
  } catch {
    return null;
  }
}

export function getUserAge(birthDay: Date | null | undefined) {
  if (!birthDay) {
    return "";
  }
  const now = new Date();
  let yearDiff = now.getFullYear() - birthDay.getFullYear();
  var monthDiff = now.getMonth() - birthDay.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && birthDay.getDate() > now.getDate())
  ) {
    yearDiff--;
  }
  return yearDiff.toString();
}
