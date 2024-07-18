import React from 'react';

const SearchBar = ({ searchedValue, handleChange }) => {
  return (
    <div className="searchBar flex justify-center items-center ">
      <input
        className="text-black w-96 p-2 rounded border-gray-200 border-2 my-8"
        type="text"
        value={searchedValue}
        onChange={handleChange}
        placeholder="Search Anything"
      />
    </div>
  );
};

export default SearchBar;
