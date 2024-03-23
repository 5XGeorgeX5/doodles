import { Body } from "@/components/body";
import { getUserById } from "@/data/user";
import { notFound } from "next/navigation";
import { ProfilePic } from "@/components/profile-pic";
import { isSameUser } from "@/actions/getuserinfo";
import { UploadProfilePic } from "@/components/upload/upload-profilePic";
import EditFrom from "@/components/edit-form";

interface Params {
  userId: string;
}

export default async function Profile({ params }: { params: Params }) {
  const user = await getUserById(params.userId);
  if (!user) {
    notFound();
  }
  const sameUser = await isSameUser(user.id);
  if (!sameUser) {
    notFound();
  }
  return (
    <Body showUser={true}>
      <div className="mx-auto flex space-x-8 sm:w-3/4">
        <div className="mx-auto flex w-full flex-col space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <EditFrom user={user} />
          </div>
        </div>
      </div>
    </Body>
  );
}
