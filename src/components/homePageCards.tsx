import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export const HomePageCards = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Title</CardTitle>
      <CardDescription>Description</CardDescription>
    </CardHeader>
    <CardContent>
      <img
        src="https://placehold.co/600x400"
        alt="Placeholder image"
        className="rounded-md w-full h-full"
      />
    </CardContent>
    <CardFooter>
      <p>Ratings</p>
    </CardFooter>
  </Card>
  )
}
