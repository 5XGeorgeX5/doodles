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
  birthDay: z
    .date()
    .max(maxDate, { message: "user can't be younger than 3 years" })
    .min(minDate, { message: "please enter a valid date" })
    .optional(),
});

export const UploadSchema = z.object({
  title: z.string().min(1, { message: "please add a title to your doodle" }),
  description: z.string().optional(),
  image: z
    .string()
    .min(1, { message: "you must upload an image to create the doodle" }),
});

export const EditSchema = z.object({
  name: z.string().optional(),
  birthDay: z
    .date()
    .max(maxDate, { message: "user can't be younger than 3 years" })
    .min(minDate, { message: "please enter a valid date" })
    .optional(),
});
