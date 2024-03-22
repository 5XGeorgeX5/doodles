"use client";
import { FilterComponent } from "../filters";
import { HomePageCards } from "../homePageCards";
import { useState } from "react";

interface ProfileDoodlesProps {
  user: any;
  ratings: any;
}

export function ProfileDoodles({ user, ratings }: ProfileDoodlesProps) {
  const [sortedDrawings, setSortedDrawings] = useState(user.drawings || null);
  function sortDrawings(filter: "trending" | "newest") {
    if (!user.drawings) return null;
    let newDrawings = [...user.drawings];
    if (filter === "trending") {
      newDrawings.sort((a, b) => {
        if (b.numRatings === 0) return -1;
        if (a.numRatings === 0) return 1;
        const aRating = a.sumRatings / a.numRatings;
        const bRating = b.sumRatings / b.numRatings;
        return (
          (bRating - 3) ** 3 * b.numRatings - (aRating - 3) ** 3 * a.numRatings
        );
      });
    } else {
      newDrawings.sort(
        (a, b) => b.created_at.getTime() - a.created_at.getTime(),
      );
    }
    setSortedDrawings(newDrawings);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <FilterComponent onFilterChange={sortDrawings} />
      </div>
      <div
        className="relative 
        grid 
        min-h-screen 
        grid-cols-1
        gap-4
        bg-orange-200
        p-4
        md:grid-cols-2
        2xl:grid-cols-3
        "
      >
        {sortedDrawings?.map((drawing: any) => (
          <HomePageCards
            key={drawing.id}
            drawing={drawing}
            userRating={
              ratings?.find((rating: any) => rating.drawingId === drawing.id)
                ?.rating || 0
            }
            userId={user.id}
            userName={user.name || "guest"}
            profilePic={user.image || "profilepic"}
          />
        ))}
      </div>
    </div>
  );
}
