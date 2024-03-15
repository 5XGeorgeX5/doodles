import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "password is required" }),
});

const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 3);
const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 100);

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "the password must be at least 6 characters" }),
  name: z.string().min(1, { message: "name is required" }),
  birthDay : z
    .date()
    .max(maxDate, { message: "user can't be younger than 3 years" })
    .min(minDate, { message: "please enter a valid date" }).optional(),
});
