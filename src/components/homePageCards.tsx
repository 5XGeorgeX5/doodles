"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface HomePageCardsProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  profilePic: string;
  userName: string;
  userId: string;
}

export const HomePageCards = ({
  title,
  description,
  image,
  rating,
  profilePic,
  userName,
  userId,
}: HomePageCardsProps) => {
  return (
    <Card className="h-fit">
      <CardHeader className="space-y-4">
        <Link href={`/profile/${userId}`}>
          <div className="flex w-fit items-center space-x-4">
            <CldImage
              width="50"
              height="50"
              src={profilePic}
              alt="profile picture"
              className="rounded-full"
            />
            <h2 className="text-md font-bold">{userName}</h2>
          </div>
        </Link>
        <CardTitle className="text-xl capitalize">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <CldImage
          width="600"
          height="400"
          src={image}
          alt="Doodle"
          className="w-full rounded-md"
        />
      </CardContent>
      <CardFooter>
        <p>Rating: {rating}</p>
      </CardFooter>
    </Card>
  );
};
