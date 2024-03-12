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
      <div className="flex min-w-full justify-around">
        <div className="flex flex-col justify-center">
          <nav className="flex-none">Filters</nav>
        </div>
        <Card className="flex-grow card-size">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        {/* <div>
          <Button variant="outline" className="flex-none">
            Button
          </Button>
        </div> */}
      </div>
    </Body>
  );
}
