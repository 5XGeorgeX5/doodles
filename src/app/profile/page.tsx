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
      <div className="mx-auto flex space-x-8 sm:w-3/4">
        <div className="mx-auto flex w-full flex-col space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <img
              src="https://placehold.co/400x400"
              alt="Placeholder image"
              className="h-24 w-24 rounded-full sm:h-36 sm:w-36"
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
                  hover:bg-orange-400
                  focus:bg-orange-800"
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
            className="relative 
              grid 
              min-h-screen 
              grid-cols-1
              gap-4
              p-4
              lg:grid-cols-2
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
