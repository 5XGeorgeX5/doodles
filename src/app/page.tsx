import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Body } from "@/components/body";
import FilterComponent from "@/components/filters";

export default function Home() {
  return (
    <Body showUser={true}>
      <div className="flex flex-col w-3/4 mx-auto space-y-4">
        <div className="flex justify-center">
          <nav className="flex-none">
            Filters 
            {/* <FilterComponent /> */}
          </nav>
        </div>
        <div className="grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-2
        gap-4
        p-4
        bg-orange-200
        relative
        min-h-screen
        ">
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent>
            <img
            src="https://placehold.co/800x600"
            alt="Placeholder image"
            className="rounded-md w-full h-full"
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
