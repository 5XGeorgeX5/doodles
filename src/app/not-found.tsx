import { HomePageCards } from "@/components/homePageCards";
import { Body } from "@/components/body";
import FilterComponent from "@/components/filters";
import { getAllDrawings } from "@/data/drawing";

export default async function Home() {
  const drawings = await getAllDrawings();
  console.log(drawings);
  return (
    <Body showUser={true}>
      <div className="flex justify-center">
        <div className="flex h-24 w-fit items-center rounded-full bg-red-400 px-5">
          <h2 className="text-3xl">Error, This page doesn't exist</h2>
        </div>
      </div>
    </Body>
  );
}
