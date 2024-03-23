"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { EditSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { FormError } from "@/components/form-error";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { editUser } from "@/actions/edit-user";
import { useRouter } from "next/navigation";
import { UploadProfilePic } from "./upload/upload-profilePic";

interface EditFromProps {
  user: any;
}

export default function EditFrom({ user }: EditFromProps) {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof EditSchema>>({
    resolver: zodResolver(EditSchema),
    defaultValues: {
      birthDay: user.birthDay ? user.birthDay : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof EditSchema>) {
    setError("");
    startTransition(() => {
      editUser(user, values).then((data) => {
        if (data?.error) {
          setError(data.error);
        } else {
          router.back();
        }
      });
    });
  }
  return (
    <>
      <UploadProfilePic image={user.image || "profilepic"} />
      <Card className="py-4 shadow-md">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-6 pt-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User name</FormLabel>
                      <FormControl className="border-0 border-b-4 text-lg shadow-none">
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder={user.name}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthDay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Birth day</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="birth day"
                          type="date"
                          value={
                            field.value instanceof Date &&
                            !isNaN(field.value.getTime())
                              ? field.value.toISOString().slice(0, 10)
                              : ""
                          }
                          onChange={(event) => {
                            field.onChange(new Date(event.target.value));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <Button
                disabled={isPending}
                type="submit"
                className="
                      w-full
                      bg-orange-700
                      text-yellow-100 hover:bg-orange-400 focus:bg-orange-900"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
