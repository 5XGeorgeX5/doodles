"use server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
const cloudinary = require("cloudinary");

export const uploadProfilePic = async (image: string, public_id: string) => {
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
  if (image !== "profilepic" && !image.startsWith("https")) {
    cloudinary.v2.api
      .delete_resources([image], {
        type: "upload",
        resource_type: "image",
      })
      .then(console.log);
  }
};
