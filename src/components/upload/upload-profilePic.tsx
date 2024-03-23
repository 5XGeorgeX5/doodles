"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { uploadProfilePic } from "@/actions/uploadprofilepic";
import { ProfilePic } from "../profile-pic";
import { useState } from "react";

interface UploadProfilePicProps {
  image: string;
}
export const UploadProfilePic = ({ image }: UploadProfilePicProps) => {
  const [userImage, setUserImage] = useState(image);
  return (
    <>
      <ProfilePic
        profilePic={userImage}
        size="96"
        className="h-24 w-24 rounded-full sm:h-36 sm:w-36"
      />
      <div className="flex justify-center">
        <CldUploadWidget
          options={{
            sources: ["local"],
            multiple: false,
            singleUploadAutoClose: false,
            clientAllowedFormats: ["webp", "jpeg", "jpg", "png"],
          }}
          uploadPreset="next_cloudinary_app"
          onSuccess={(results) => {
            if (results.info && typeof results.info !== "string") {
              uploadProfilePic(image, results.info.public_id);
              setUserImage(results.info.public_id);
            }
          }}
        >
          {({ open }) => {
            return (
              <Button
                onClick={() => open()}
                className="bg-orange-600
                  text-yellow-100
                  hover:bg-orange-400
                  focus:bg-orange-800"
              >
                New Profile Pic
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>
    </>
  );
};
