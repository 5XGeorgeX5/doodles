"use client";
import { FilterComponent } from "../filters";
import { HomePageCards } from "../homePageCards";
import { useState, useEffect } from "react";

interface HomeDoodlesProps {
  drawings: any;
  ratings: any;
}

export function HomeDoodles({ drawings, ratings }: HomeDoodlesProps) {
  const [sortedDrawings, setSortedDrawings] = useState(drawings);
  const [numDivs, setNumDivs] = useState(1);
  useEffect(() => {
    const updateNumDivs = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setNumDivs(3);
      } else if (width >= 768) {
        setNumDivs(2);
      } else {
        setNumDivs(1);
      }
    };
    updateNumDivs();
    window.addEventListener("resize", updateNumDivs);
    return () => window.removeEventListener("resize", updateNumDivs);
  }, []);
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
        grid
        w-full
        grid-cols-1
        gap-4
        bg-orange-200
        p-4
        md:grid-cols-2
        xl:grid-cols-3
        "
      >
        {[...Array(numDivs)].map((_, index) => (
          <div key={index} className="space-y-4">
            {sortedDrawings.map((drawing: any, i: number) => {
              if (i % numDivs !== index) return null;
              return (
                <HomePageCards
                  key={drawing.id}
                  drawing={drawing}
                  userRating={
                    ratings?.find(
                      (rating: any) => rating.drawingId === drawing.id,
                    )?.rating || 0
                  }
                  userId={drawing.user.id}
                  userName={drawing.user.name || "guest"}
                  profilePic={drawing.user.image || "profilepic"}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
