"use server";
import { db } from "@/lib/db";

export const deleteDoodle = async (drawingId: string) => {
  try {
    await db.drawing.delete({
      where: {
        id: drawingId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
