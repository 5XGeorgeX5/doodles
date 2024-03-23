"use server";
import * as z from "zod";
import { EditSchema } from "@/schemas";
import { db } from "@/lib/db";

export const editUser = async (
  user: any,
  values: z.infer<typeof EditSchema>,
) => {
  const validatedFields = EditSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { name, birthDay } = validatedFields.data;

  try {
    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: name || user.name,
        birthDay: birthDay || user.birthDay,
      },
    });
  } catch (error) {
    console.log({ error });
    return { error: "something went wrong" };
  }
};
