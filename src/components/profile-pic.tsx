"use client";
import { CldImage } from "next-cloudinary";

interface ProfilePicProps {
  className?: string;
  profilePic?: string;
  size?: `${number}`;
}

export const ProfilePic = ({
  className,
  profilePic = "profilepic",
  size = "100",
}: ProfilePicProps) => {
  if (profilePic.startsWith("https")) {
    return <img src={profilePic} alt="Profile Picture" className={className} />;
  }
  return (
    <CldImage
      width={size}
      height={size}
      src={profilePic}
      alt="Profile Picture"
      className={className}
    />
  );
};
