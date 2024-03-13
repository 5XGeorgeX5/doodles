"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, name, birthDay } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use!" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      birthDay,
    },
  });
  await signIn("credentials", {
    email,
    password,
    redirectTo: DEFAULT_LOGIN_REDIRECT,
  });
};
