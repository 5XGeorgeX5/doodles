import { db } from "@/lib/db";

export async function getAllDrawings() {
  try {
    const drawings = await db.drawing.findMany({
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return drawings;
  } catch (error) {
    console.log(error);
    return null;
  }
}
