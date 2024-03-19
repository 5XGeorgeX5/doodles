"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export const addRating = async (id: string, newRating: number) => {
  const session = await auth();
  try {
    const user = await db.user.findUnique({
      where: {
        id: session?.user?.id,
      },
      include: {
        ratings: true,
      },
    });
    if (!user) return null;
    let add = 1;
    let rating = newRating;
    const ratedDrawing = user.ratings.find((rating) => rating.drawingId === id);
    if (ratedDrawing) {
      add = 0;
      rating = newRating - ratedDrawing.rating;
      await db.rating.update({
        where: {
          id: ratedDrawing.id,
        },
        data: {
          rating: newRating,
        },
      });
    } else {
      await db.rating.create({
        data: {
          userId: user.id,
          drawingId: id,
          rating: newRating,
        },
      });
    }
    await db.drawing.update({
      where: {
        id: id,
      },
      data: {
        numRatings: { increment: add },
        sumRatings: { increment: rating },
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
