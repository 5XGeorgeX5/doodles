"use client";
import { Body } from "@/components/body";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { uploadProfilePic } from "@/actions/uploadprofilepic";
import { HomePageCards } from "@/components/homePageCards";
import FilterComponent from "@/components/filters";
import { useState, useEffect } from "react";

export default function Profile() {
  const [userName, setUserName] = useState("user name");
  const [userAge, setUserAge] = useState("");

  useEffect(() => {
    const storedName = sessionStorage.getItem("name");
    if (storedName) {
      setUserName(storedName);
    }
    const storedAge = sessionStorage.getItem("age");
    if (storedAge) {
      setUserAge(storedAge);
    }
  }, []);
  return (
    <Body showUser={true}>
      <div className="flex mx-auto space-x-8 sm:w-3/4">
        <div className="flex flex-col w-full mx-auto space-y-4">
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <img
              src="https://placehold.co/400x400"
              alt="Placeholder image"
              className="rounded-full w-24 h-24 sm:w-36 sm:h-36"
            />
            <h2>{userName}</h2>
            {userAge && <p>{userAge} years old</p>}
            <div className="flex justify-center">
              <CldUploadWidget
                options={{
                  sources: ["local", "camera"],
                  multiple: false,
                  singleUploadAutoClose: false,
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
                  focus:bg-orange-800
                  hover:bg-orange-400"
                    >
                      New Profile Pic
                    </Button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
          <div className="flex justify-center">
            <FilterComponent />
          </div>
          <div
            className="grid 
              grid-cols-1 
              lg:grid-cols-2 
              gap-4
              p-4
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
      </div>
    </Body>
  );
}
