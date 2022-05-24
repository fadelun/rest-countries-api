import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconArrow from "../images/chevron-down-outline.svg";

export const Filter = ({ regionName, setRegionName, clickHandler }) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Ocenia"];

  const getRegion = (item) => {
    // melemparkan variable regions ke main.js
    clickHandler(item, regions);
  };

  return (
    <>
      <details id="region-list" className="p-4 mt-2 lg:mt-0 lg:p-5 w-2/5 lg:w-1/6 bg-very-light-gray hover:cursor-pointer shadow rounded  relative">
        <summary className="list-none flex justify-between">
          <span>Filter by Region</span> <img src={IconArrow} alt="go-down-icon" width={18} />
        </summary>

        <ul className="absolute top-full inset-x-0 bg-very-light-gray hover:cursor-pointer py-4 px-6 mt-2  shadow rounded">
          {regions &&
            regions.map((item, key) => {
              return (
                <li key={key + 1} className="mb-4">
                  <button className="w-full text-left" onClick={() => getRegion(`${item}`)}>
                    {item}
                  </button>
                </li>
              );
            })}
        </ul>
      </details>
    </>
  );
};
