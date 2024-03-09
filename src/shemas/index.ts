import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "the password must be at least 6 characters" }),
  name: z.string().min(1, { message: "name is required" }),
});
