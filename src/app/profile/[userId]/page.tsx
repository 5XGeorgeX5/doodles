import { Body } from "@/components/body";
import { HomePageCards } from "@/components/homePageCards";
import FilterComponent from "@/components/filters";
import { getUserAge, getUserById } from "@/data/user";
import { notFound } from "next/navigation";
import { ProfilePic } from "@/components/profile-pic";
import { getUserInfo, isSameUser } from "@/actions/getuserinfo";
import { UploadProfilePic } from "@/components/upload/upload-profilePic";
import { getUserRatings } from "@/data/rating";

interface Params {
  userId: string;
}

export default async function Profile({ params }: { params: Params }) {
  const user = await getUserById(params.userId);
  if (!user) {
    notFound();
  }
  const sameUser = await isSameUser(user.id);
  const userAge = getUserAge(user.birthDay);
  user.image = user.image || "profilepic";
  const currentUser = await getUserInfo();
  const ratings = await getUserRatings(currentUser?.id);
  console.log({ user });
  return (
    <Body showUser={true}>
      <div className="mx-auto flex space-x-8 sm:w-3/4">
        <div className="mx-auto flex w-full flex-col space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <ProfilePic
              profilePic={user.image}
              size="96"
              className="h-24 w-24 rounded-full sm:h-36 sm:w-36"
            />
            <h2>{user.name}</h2>
            {userAge && <p>{userAge} years old</p>}
            {sameUser && <UploadProfilePic />}
          </div>
          <div className="flex justify-center">
            <FilterComponent />
          </div>
          <div
            className="relative 
            grid 
            min-h-screen 
            grid-cols-1
            gap-4
            p-4
            lg:grid-cols-2
            "
          >
            {user.drawings?.map((drawing) => (
              <HomePageCards
                key={drawing.id}
                id={drawing.id}
                userId={user.id}
                userName={user.name || "guest"}
                userRating={
                  ratings?.find((rating) => rating.drawingId === drawing.id)
                    ?.rating || 0
                }
                profilePic={user.image || "profilepic"}
                title={drawing.title}
                description={drawing.description || ""}
                image={drawing.image}
                numRatings={drawing.numRatings}
                sumRatings={drawing.sumRatings}
              />
            ))}
          </div>
        </div>
      </div>
    </Body>
  );
}
