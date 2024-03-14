import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Body } from "@/components/body";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Home() {
  return (
    <Body showUser={true}>
      <div className="flex flex-col w-3/4 mx-auto space-y-4">
        <div className="flex justify-center">
          <nav className="flex space-x-8">
            <h2 className="text-xl font-bold">Filters: </h2>
            <RadioGroup defaultValue="option-one" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one"
                  id="option-one"
                  className="checked:bg-orange-500 default:bg-orange-500" />
                <Label htmlFor="option-one">Trending</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two"
                  id="option-two"
                className="checked:bg-orange-500"/>
                <Label htmlFor="option-two">Newest</Label>
              </div>
            </RadioGroup>
          </nav>
        </div>
        <div className="grid 
        grid-cols-1 
        md:grid-cols-2 

        2xl:grid-cols-3
        gap-4
        p-4
        bg-orange-200
        relative
        min-h-screen
        "
        >
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
