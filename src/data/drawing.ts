import { db } from "@/lib/db";

export async function getAllDrawings() {
  try {
    const drawings = await db.drawing.findMany({
      include: {
        user: true,
      },
    });
    return drawings;
  } catch (error) {
    console.log(error);
    return null;
  }
}
