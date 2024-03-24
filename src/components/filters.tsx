"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface FilterComponentProps {
  onFilterChange: (filter: "trending" | "newest") => void;
}

export function FilterComponent({ onFilterChange }: FilterComponentProps) {
  return (
    <nav className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Filters: </h2>
      <RadioGroup
        onValueChange={onFilterChange}
        defaultValue="newest"
        className="flex space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="trending" id="trending" />
          <Label htmlFor="trending">Trending</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="newest" id="newest" />
          <Label htmlFor="newest">Newest</Label>
        </div>
      </RadioGroup>
    </nav>
  );
}
