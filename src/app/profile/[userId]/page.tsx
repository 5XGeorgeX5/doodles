import { Body } from "@/components/body";
import { getUserAge, getUserById } from "@/data/user";
import { notFound } from "next/navigation";
import { ProfilePic } from "@/components/profile-pic";
import { getUserInfo, isSameUser } from "@/actions/getuserinfo";
import { getUserRatings } from "@/data/rating";
import { ProfileDoodles } from "@/components/doodles/profile-doodles";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  return (
    <Body showUser={true}>
      <div className="mx-auto flex space-x-8 sm:w-3/4">
        <div className="mx-auto flex w-full flex-col space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">{ user.name} Profile</h1>
            <ProfilePic
              profilePic={user.image}
              size="96"
              className="h-24 w-24 rounded-full sm:h-36 sm:w-36"
            />
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            {userAge && <p>{userAge} years old</p>}
            {sameUser && (
              <Link href={`./${user.id}/settings`}>
                <Button
                  className="bg-orange-500
            text-yellow-100
            hover:bg-orange-400 
            focus:bg-orange-800"
                >
                  Edit info
                </Button>
              </Link>
            )}
          </div>
          <ProfileDoodles
            user={user}
            ratings={ratings}
            deleteOption={sameUser}
          />
        </div>
      </div>
    </Body>
  );
}
