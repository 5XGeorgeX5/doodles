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
import ReactStars from "react-stars";
import { addRating } from "@/actions/add-rating";
import { useState, useEffect } from "react";

interface HomePageCardsProps {
  userRating: number;
  drawing: any;
  userId: string;
  userName: string;
  profilePic: string;
}

export const HomePageCards = ({
  userRating,
  drawing,
  userId,
  userName,
  profilePic,
}: HomePageCardsProps) => {
  const [rating, setRating] = useState(
    drawing.numRatings !== 0 ? drawing.sumRatings / drawing.numRatings : 0,
  );
  const [currentUserRating, setUserRating] = useState(userRating);
  const updateRating = (newRating: number) => {
    if (userRating === 0) {
      const updatedRating =
        (drawing.sumRatings + newRating) / (drawing.numRatings + 1);
      setRating(updatedRating);
    } else {
      const updatedRating =
        (drawing.sumRatings + newRating - userRating) / drawing.numRatings;
      setRating(updatedRating);
    }
    setUserRating(newRating);
    addRating(drawing.id, newRating);
  };
  useEffect(() => {
    setRating(
      drawing.numRatings !== 0 ? drawing.sumRatings / drawing.numRatings : 0,
    );
    setUserRating(userRating);
  }, [drawing]);
  return (
    <Card className="h-fit">
      <CardHeader className="space-y-4">
        <div className="flex justify-between">
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
          <p>Rating: {Number.isInteger(rating) ? rating : rating.toFixed(1)}</p>
        </div>

        <CardTitle className="text-xl capitalize">{drawing.title}</CardTitle>
        {drawing.description && (
          <CardDescription>{drawing.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <CldImage
          width="600"
          height="400"
          src={drawing.image}
          alt="Doodle"
          className="w-full rounded-md"
        />
      </CardContent>
      <CardFooter>
        <ReactStars
          value={currentUserRating}
          half={false}
          onChange={updateRating}
          size={24}
          color2={"#ffd700"}
        />
      </CardFooter>
    </Card>
  );
};
