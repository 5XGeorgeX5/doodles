import { HomePageCards } from "@/components/homePageCards";
import { Body } from "@/components/body";
import FilterComponent from "@/components/filters";

export default function Home() {
  return (
    <Body showUser={true}>
      <div className="mx-auto flex w-3/4 flex-col space-y-4">
        <div className="flex justify-center">
          <FilterComponent />
        </div>
        <div
          className="relative 
        grid 
        min-h-screen 

        grid-cols-1
        gap-4
        bg-orange-200
        p-4
        md:grid-cols-2
        2xl:grid-cols-3
        "
        >
          <HomePageCards />
          <HomePageCards />
          <HomePageCards />
          <HomePageCards />
        </div>
      </div>
    </Body>
  );
}
