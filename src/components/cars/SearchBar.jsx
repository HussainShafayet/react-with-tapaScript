import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-2">
      <input
        type="text"
        placeholder='Search Car'
        className="flex-1 bg-transparent outline-none px-2 text-gray-700 w-[500px]"
      />
    </div>
  );
};

export default SearchBar;
