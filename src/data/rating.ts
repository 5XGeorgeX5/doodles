import { db } from "@/lib/db";

export async function getUserRatings(userId: string | undefined) {
  if (!userId) return null;
  try {
    const ratings = await db.rating.findMany({
      where: {
        userId: userId,
      },
    });
    return ratings;
  } catch (error) {
    console.log(error);
    return null;
  }
}
