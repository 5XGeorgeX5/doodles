"use client"
import React, { ChangeEvent, useState } from 'react';

interface FilterComponentProps {
 onFilterChange: (filter: 'trending' | 'newest') => void;
}

// export default function FilterComponent({ onFilterChange }: FilterComponentProps) {
export default function FilterComponent() {
 const [filter, setFilter] = useState<'trending' | 'newest'>('trending');

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
     const newFilter = e.target.value as 'trending' | 'newest';
    setFilter(newFilter);
    // onFilterChange(newFilter);
 };

 return (
    <div className="flex justify-center space-x-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className={`form-radio ${filter === 'trending' ? 'text-orange-600' : 'text-blue-600'}`}
          name="filter"
          value="trending"
          checked={filter === 'trending'}
          onChange={handleFilterChange}
        />
        <span className="ml-2 text-gray-700">Trending</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className={`form-radio ${filter === 'newest' ? 'text-orange-600' : 'text-blue-600'}`}
          name="filter"
          value="newest"
          checked={filter === 'newest'}
          onChange={handleFilterChange}
        />
        <span className="ml-2 text-gray-700">Newest</span>
      </label>
    </div>
 );
};
