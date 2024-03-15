"use client";
import React, { useState } from 'react';
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
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	return (
		<Body showUser={true}>
			<div className="w-1/4 mx-auto mt-8">
				<Card className='space-y-4 py-4'>
					<CardHeader className='flex flex-col mx-auto justify-center items-center space-y-4 min-w-full'>
						<CardTitle >
							<input
            					type="text"
            					value={title}
            					onChange={(e) => setTitle(e.target.value)}
            					placeholder="Title"
								className="border-b-4 w-64"
            				/>
						</CardTitle>
						<CardDescription>
							<textarea
            					value={description}
            					onChange={(e) => setDescription(e.target.value)}
            					placeholder="Description"
								className="border-b-4 w-64"
								cols={40}
								rows={10}
            				/>
						</CardDescription>
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
														Upload New Doodle
										</Button>
									);
								}}
							</CldUploadWidget>
						</div>
					</CardContent>
					{/* <CardFooter>
						<p>Ratings</p>
					</CardFooter> */}
				</Card>
			</div>
		</Body>
	);
}
