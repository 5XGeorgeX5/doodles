"use client";
import { FilterComponent } from "../filters";
import { HomePageCards } from "../homePageCards";
import { useState } from "react";

interface HomeDoodlesProps {
  drawings: any;
  ratings: any;
}

export function HomeDoodles({ drawings, ratings }: HomeDoodlesProps) {
  const [sortedDrawings, setSortedDrawings] = useState(drawings);
  function sortDrawings(filter: "trending" | "newest") {
    if (!drawings) return null;
    let newDrawings = [...drawings];
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
    <div className="mx-auto flex w-full flex-col space-y-4 sm:w-3/4">
      <div className="flex justify-center">
        <FilterComponent onFilterChange={sortDrawings} />
      </div>
      <div
        className="relative
        flex
        w-full 
        flex-wrap items-start
        justify-between
        bg-orange-200
        p-4
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
            userId={drawing.user.id}
            userName={drawing.user.name || "guest"}
            profilePic={drawing.user.image || "profilepic"}
          />
        ))}
      </div>
    </div>
  );
}
