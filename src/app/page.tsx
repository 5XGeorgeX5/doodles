import { HomePageCards } from "@/components/homePageCards";
import { Body } from "@/components/body";
import FilterComponent from "@/components/filters";
import { getAllDrawings } from "@/data/drawing";
import { getUserInfo } from "@/actions/getuserinfo";
import { getUserRatings } from "@/data/rating";

export default async function Home() {
  const drawings = await getAllDrawings();
  const user = await getUserInfo();
  const ratings = await getUserRatings(user?.id);
  console.log(drawings);
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
          {drawings?.map((drawing) => (
            <HomePageCards
              key={drawing.id}
              id={drawing.id}
              userRating={
                ratings?.find((rating) => rating.drawingId === drawing.id)
                  ?.rating || 0
              }
              userName={drawing.user.name || "guest"}
              userId={drawing.user.id}
              profilePic={drawing.user.image || "profilepic"}
              title={drawing.title}
              description={drawing.description || ""}
              image={drawing.image}
              rating={
                drawing.numRatings > 0
                  ? drawing.sumRatings / drawing.numRatings
                  : 0
              }
            />
          ))}
        </div>
      </div>
    </Body>
  );
}
