import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IconArrow from "../images/chevron-down-outline.svg";

export const Filter = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Ocenia"];

  const detailsFunc = (e) => {
    console.log(e.target);
  };

  // useEffect(() => {
  //   detailsFunc();
  // }, []);
  return (
    <>
      <details onClick={(e) => detailsFunc(e)} id="region-list" className="p-4 mt-2 lg:mt-0 lg:p-5 w-2/5 lg:w-1/6 bg-slate-50 shadow rounded  relative">
        <summary className="list-none flex justify-between">
          <span>Filter by Region</span> <img src={IconArrow} alt="go-down-icon" width={18} />
        </summary>

        <ul className="absolute top-full inset-x-0 bg-slate-50 py-4 px-6 mt-2  shadow rounded">
          {regions &&
            regions.map((item, key) => {
              return (
                <li key={key + 1} className="mb-4">
                  <Link to=":continent">{item}</Link>
                </li>
              );
            })}
        </ul>
      </details>
    </>
  );
};
