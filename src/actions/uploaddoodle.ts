"use server";
import * as z from "zod";
import { UploadSchema } from "@/schemas";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { error } from "console";

export const uploadDoodle = async (values: z.infer<typeof UploadSchema>) => {
  const validatedFields = UploadSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "No user id!" };
  }
  const userId = session.user.id;
  const { title, description, image } = validatedFields.data;
  try {
    await db.drawing.create({
      data: {
        userId,
        title,
        description,
        image,
      },
    });
    return {success: "Doodle was uploaded successfully!"}
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
