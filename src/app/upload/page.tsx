"use client"
import { Body } from "@/components/body";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { uploadProfilePic } from "@/actions/uploadprofilepic";

export default function Profile() {
	return (
    <Body showUser={true}>
      <div className="w-3/4 mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Title</CardTitle>
					<CardDescription>Description</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex justify-center">
						<CldUploadWidget
							uploadPreset="next_cloudinary_app"
							onSuccess={(results) => {
								if (results.info && typeof results.info !== "string") {
									sessionStorage.removeItem("image");
									uploadProfilePic(results.info.public_id);
								}
							}}
							onClose={() => {
								window.location.reload();
							}}
						>
							{({ open }) => {
								return (
									<Button
										onClick={() => open()}
										className="bg-orange-600
                  text-yellow-100
                  focus:bg-orange-800
                  hover:bg-orange-400"
									>
										New Profile Pic
									</Button>
								);
							}}
						</CldUploadWidget>
					</div>
				</CardContent>
				<CardFooter>
					<p>Ratings</p>
				</CardFooter>
        </Card>
      </div>
        
		</Body>
	);
}
