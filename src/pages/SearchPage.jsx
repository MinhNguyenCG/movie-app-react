import React from "react";
import SearchForm from "@components/SearchForm";

const SearchPage = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-[3.5vw] p-6 py-10">
      <p className="text-[2vw] font-bold">Search</p>
      <div className="flex flex-1">
        <div className="flex-1">
          <SearchForm />
        </div>

        <div className="flex-3">
          <p>Search Result</p>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
