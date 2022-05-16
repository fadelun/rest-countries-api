import React from "react";
import IconSearch from "../images/search-outline.svg";

export const Search = () => {
  return (
    <div id="search-input" className="bg-slate-50 shadow rounded  p-4 lg:p-5 w-full lg:w-2/5 flex py-3 px-5">
      <img src={IconSearch} alt="search-icon" width={18} />
      <input className="bg-transparent ml-4 focus-visible:outline-none" type="text" placeholder="Search for a country..."></input>
    </div>
  );
};
