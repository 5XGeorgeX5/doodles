"use client";
import { Body } from "@/components/body";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { uploadProfilePic } from "@/actions/uploadprofilepic";

export default function Profile() {
  return (
    <Body showUser={true}>
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
            return <Button onClick={() => open()}>Upload an Image</Button>;
          }}
        </CldUploadWidget>
      </div>
    </Body>
  );
}
