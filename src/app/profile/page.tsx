"use client";
import { Body } from "@/components/body";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { uploadProfilePic } from "@/actions/uploadprofilepic";
import { HomePageCards } from "@/components/homePageCards";
import FilterComponent from "@/components/filters";

export default function Profile() {
	return (
		<Body showUser={true}>
			<div className="flex w-3/4 mx-auto space-x-8">
				<div className="flex flex-col w-3/4 mx-auto space-x-4 space-y-4">
					<div className="flex justify-center">
						<FilterComponent />
					</div>
					<div
					  className="grid 
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
				<div className="flex flex-col space-y-4 items-center">
					<h1 className="text-2xl font-semibold">
            Profile
          </h1>
          <img
        src="https://placehold.co/400x400"
        alt="Placeholder image"
        className="rounded-full w-24 h-24"
      />
					<div className="flex justify-center">
						<CldUploadWidget
							uploadPreset="next_cloudinary_app"
							onSuccess={(results) => {
								if (results.info && typeof results.info !== "string") {
									sessionStorage.removeItem("image");
									console.log(results.info.public_id);
									uploadProfilePic(results.info.public_id);
								}
							}}
						>
							{({ open }) => {
                return <Button onClick={() => open()}
                  className="bg-orange-600
                  text-yellow-100
                  focus:bg-orange-800
                  hover:bg-orange-400"
                >
                  New Profile Pic
                </Button>;
							}}
						</CldUploadWidget>
					</div>
				</div>
			</div>
		</Body>
	);
}
