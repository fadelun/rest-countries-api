import React from "react";
import IconSearch from "../images/search-outline.svg";

export const Search = () => {
  return (
    <div id="search-input">
      <img src={IconSearch} alt="search-icon" width={18} />
      <input className="bg-transparent" type="text" placeholder="Search for a country..."></input>
    </div>
  );
};
