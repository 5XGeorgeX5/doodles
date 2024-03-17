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
}

export const HomePageCards = ({
  title,
  description,
  image,
  rating,
}: HomePageCardsProps) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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
