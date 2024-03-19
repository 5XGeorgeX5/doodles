import { HomePageCards } from "@/components/homePageCards";
import { Body } from "@/components/body";
import { FilterComponent } from "@/components/filters";
import { getAllDrawings } from "@/data/drawing";
import { getUserInfo } from "@/actions/getuserinfo";
import { getUserRatings } from "@/data/rating";
import { HomeDoodles } from "@/components/doodles/home-doodles";

export default async function Home() {
  const drawings = await getAllDrawings();
  const user = await getUserInfo();
  const ratings = await getUserRatings(user?.id);
  console.log(drawings);
  return (
    <Body showUser={true}>
      <HomeDoodles drawings={drawings} ratings={ratings} />
    </Body>
  );
}
