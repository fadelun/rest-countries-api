import React, {  useRef } from "react";
import IconSearch from "../images/search-outline.svg";
import { Link } from "react-router-dom";


export const Features = ({ searchCountry, searchHandler, clickHandler, paramsRegions }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const refInput = useRef("");

  const getSearch = () => {
    searchHandler(refInput.current.value);
  };

  const getFilter = (item) => {
    clickHandler(item, regions);
  };
  

  return (
    <div id="features " className="flex  lg:justify-between flex-wrap lg:flex-nowrap dark:text-white">
      <div id="search-input" className="bg-slate-50 dark:bg-dark-blue shadow rounded  p-4 lg:py-2 lg:px-4  w-full lg:w-2/5 flex py-3 px-5">
        <img src={IconSearch} alt="search-icon" width={18} />
        <input onChange={getSearch} ref={refInput} value={searchCountry} className="bg-transparent w-11/12 ml-4 lg:pt-2  focus-visible:outline-none" type="text" placeholder="Search for a country..."></input>
      </div>

      <details id="region-list" className=" mt-14 lg:mt-0  w-3/6 lg:w-1/6 bg-very-light-gray dark:bg-dark-blue hover:cursor-pointer shadow rounded  relative">
        <summary className="list-none flex justify-between p-4 lg:p-5">
          <span>Filter by Region</span> 
          
          <svg xmlns="http://www.w3.org/2000/svg" width={18} viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/>
          </svg>
        </summary>

        <ul className="absolute top-full inset-x-0 bg-very-light-gray dark:bg-dark-blue hover:cursor-pointer py-4 px-6 mt-2  shadow rounded">
          {regions &&
            regions.map((item, key) => {
              return (
                <li key={key + 1} className={`mb-4 ${paramsRegions === item.toLowerCase() ? "font-bold" : ""}`}>
                  {/* ketika sudah memasuki "filter yang dituju" dan "filter region" tersebut diklik lagi maka akan kembali ke menu utama*/}
                  <Link to={`/regions/${item.toLowerCase()}` === `/regions/${paramsRegions}` ? "/" : `/regions/${item.toLowerCase()}`} className="block w-full text-left" onClick={() => getFilter(item)}>
                    {item}
                  </Link>
                </li>
              );
            })}
        </ul>
      </details>
    </div>
  );
};
