import React, { useRef } from "react";
import IconSearch from "../images/search-outline.svg";

export const Search = ({ searchCountry, searchHandler }) => {
  const refInput = useRef("");

  const getSearch = () => {
    searchHandler(refInput.current.value);
  };

  return (
    <div id="search-input" className="bg-slate-50 shadow rounded  p-4 lg:p-5 w-full lg:w-2/5 flex py-3 px-5">
      <img src={IconSearch} alt="search-icon" width={18} />
      <input onChange={getSearch} ref={refInput} value={searchCountry} className="bg-transparent ml-4 focus-visible:outline-none" type="text" placeholder="Search for a country..."></input>
    </div>
  );
};
