"use server";
import { db } from "@/lib/db";
const cloudinary = require("cloudinary");

export const deleteDoodle = async (image: string, drawingId: string) => {
  try {
    await db.drawing.delete({
      where: {
        id: drawingId,
      },
    });
    cloudinary.v2.api
      .delete_resources([image], {
        type: "upload",
        resource_type: "image",
      })
      .then(console.log);
  } catch (error) {
    console.log(error);
  }
};
