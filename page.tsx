import { HomePageCards } from "@/components/homePageCards";
import { Body } from "@/components/body";
import FilterComponent from "@/components/filters";

export default function Profile() {
  return (
    <Body showUser={true}>
      <div className="flex w-3/4 mx-auto space-x-4">
      <div className="flex flex-col w-3/4 mx-auto space-x-4 space-y-4">
        <div className="flex justify-center">
          <FilterComponent />
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
          <HomePageCards />
          <HomePageCards />
          <HomePageCards />
          <HomePageCards />
        </div>
        </div>
      <div>Profile</div>

      </div>
    </Body>
  );
}
