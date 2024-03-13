import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Body } from "@/components/body";

export default function Home() {
  return (
    <Body showUser={true}>
      <div className="flex flex-col w-3/4 mx-auto space-y-4">
        <div className="flex justify-center">
          <nav className="flex-none">Filters</nav>
        </div>
        <div className="flex 
        justify-between
        space-x-4
        p-4
        bg-orange-200">
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent>
            <img
            src="https://placehold.co/600x400"
            alt="Placeholder image"
            className="rounded-md"
          />
            </CardContent>
            <CardFooter>
              <p>Ratings</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent>
            <img
            src="https://placehold.co/600x400"
            alt="Placeholder image"
            className="rounded-md"
          />
            </CardContent>
            <CardFooter>
              <p>Ratings</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent>
            <img
            src="https://placehold.co/600x400"
            alt="Placeholder image"
            className="rounded-md"
          />
            </CardContent>
            <CardFooter>
              <p>Ratings</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Body>
  );
}
