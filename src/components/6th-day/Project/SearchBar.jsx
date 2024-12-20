import React from 'react';

export const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      className="border p-2 mb-4 w-full"
    />
  );
};
