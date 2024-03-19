import { Body } from "@/components/body";
import { auth } from "@/auth";

export default async function ErrorPage() {
  const session = await auth();
  const userName = session?.user?.name || "buddy";
  return (
    <Body showUser={true}>
      <div className="flex justify-center">
        <div className="flex h-24 w-fit items-center rounded-full bg-orange-400 px-5">
          <h2 className="text-3xl">Sorry {userName}, Wrong Page</h2>
        </div>
      </div>
    </Body>
  );
}
