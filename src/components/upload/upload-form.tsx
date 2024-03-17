"use client";

import { Card, CardContent } from "../ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UploadSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { FormError } from "../form-error";
import { useState, useTransition, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { uploadDoodle } from "@/actions/uploaddoodle";
import { FormSuccess } from "../form-success";

export const UploadForm = () => {
  const [image, setImage] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setsuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof UploadSchema>>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  });

  function onSubmit(values: z.infer<typeof UploadSchema>) {
    setError("");
    startTransition(() => {
      uploadDoodle(values).then((data) => {
        if (data.error !== undefined) {
          setError(data.error);
        } else {
          setsuccess(data.success);
        }
      });
    });
  }
  return (
    <div className="mx-auto mt-8 w-1/4">
      <Card className="py-4 shadow-md">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-6 pt-5">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="border-0 border-b-4 text-lg shadow-none">
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Title"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="border-0 border-b-4 text-lg shadow-none">
                        <Textarea
                          placeholder="Description"
                          className="h-36 resize-none border-b-4"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {image && (
                  <div className="flex justify-center">
                    <CldImage
                      width="400"
                      height="200"
                      src={image}
                      alt="doodle"
                      className="h-[200px] w-[400px]"
                    />
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-center">
                          <CldUploadWidget
                            {...field}
                            options={{
                              sources: ["local", "camera"],
                              multiple: false,
                              singleUploadAutoClose: false,
                            }}
                            uploadPreset="doodles"
                            onSuccess={(results) => {
                              if (
                                results.info &&
                                typeof results.info !== "string"
                              ) {
                                setImage(results.info.public_id);
                                field.onChange(results.info.public_id);
                              }
                            }}
                          >
                            {({ open }) => {
                              return (
                                <Button
                                  type="button"
                                  onClick={() => open()}
                                  className="
                              bg-orange-600
                              text-yellow-100
                              hover:bg-orange-400 focus:bg-orange-800"
                                >
                                  Uplaod new doodle
                                </Button>
                              );
                            }}
                          </CldUploadWidget>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
