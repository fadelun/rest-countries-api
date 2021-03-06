import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconArrow from "../images/chevron-down-outline.svg";

export const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Ocenia"];
  const [continentName, setContinentName] = useState("");

  const getFilter = (item) => {
    console.log(item);
  };

  return (
    <>
      <details id="region-list" className=" mt-2 lg:mt-0  w-2/5 lg:w-1/6 bg-very-light-gray hover:cursor-pointer shadow rounded  relative">
        <summary className="list-none flex justify-between p-4 lg:p-5">
          <span>Filter by Region</span> <img src={IconArrow} alt="go-down-icon" width={18} />
        </summary>

        <ul className="absolute top-full inset-x-0 bg-very-light-gray hover:cursor-pointer py-4 px-6 mt-2  shadow rounded">
          {regions &&
            regions.map((item, key) => {
              return (
                <li key={key + 1} className="mb-4">
                  <Link to={`/regions/${item.toLowerCase()}`} className="block w-full text-left" onClick={() => getFilter(item)}>
                    {item}
                  </Link>
                </li>
              );
            })}
        </ul>
      </details>
    </>
  );
};
