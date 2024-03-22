"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { uploadProfilePic } from "@/actions/uploadprofilepic";

export const UploadProfilePic = () => {
  return (
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
                  hover:bg-orange-400
                  focus:bg-orange-800"
            >
              New Profile Pic
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
