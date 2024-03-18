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

interface HomePageCardsProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  profilePic: string;
  userName: string;
}

export const HomePageCards = ({
  title,
  description,
  image,
  rating,
  profilePic,
  userName,
}: HomePageCardsProps) => {
  return (
    <Card className="h-fit">
      <CardHeader className="space-y-4">
        <div className="flex space-x-4 items-center">
          <CldImage
            width="50"
            height="50"
            src={profilePic}
            alt="profile picture"
            className="rounded-full"
            />
          <h2 className="font-bold text-md">{userName}</h2>
          </div>
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
