import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormatNumber from "../utils/FormatNumber";
import SortHandler from "../utils/SortHandler";
import { Features } from "./Features";

// import { AllCountries } from "./AllCountries";

function Main() {
  
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCountry, setSearchCountry] = useState("");
  const [result, setResult] = useState([]);
  const [regionName, setRegionName] = useState("");

  
  
  

  // function untuk search
  const searchHandler = (searchCountry) => {
    setSearchCountry(searchCountry);

    if (searchCountry !== "") {
      const filteredCountries = countries.filter((item) => {
        return item.name.common.toLowerCase().includes(searchCountry.toLowerCase());
      });
      setResult(filteredCountries);
      console.log("result ", result);
    } else {
      setResult(countries);
      console.log("Countries ", countries);
    }
  };

  // function untuk filter
  const regionHandler = (item, regions) => {

    setRegionName(item);
    const findedRegions = regions.find((item) => {
      return item === regionName;
    });

    const filteredRegions = countries.filter((item) => {
      return item.region === findedRegions;
    });
    setResult(filteredRegions);

    
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => response)
      .then((res) => {
        const datas = res.data;
        SortHandler(datas);

        setCountries(datas);
        setResult(datas);

        
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <main className=" w-4/5 xl:w-[1400px] min-h-screen pt-24 mx-auto relative  ">
      {/* <h1 id="message" className="text-6xl font-bold fixed shadow-md">
        Feature Dark Mode !!
      </h1> */}
      <Features searchCountry={searchCountry} searchHandler={searchHandler} clickHandler={regionHandler} />
      
      <div className="cards mt-10 grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,_minmax(264px,_1fr))] gap-5 lg:gap-8 xl:gap-10 items-center ">
        {loading ? (
          <div classsName="bg-slate-300 absolute inset-0">
            <h1 className="text-3xl font-bold">Loading...</h1>
          </div>
        ) : (
          result &&
          result.map((country, i) => {
            return (
              <Link key={i + 1} to={`/country/${country.name.common.toLowerCase()}`}>
                <div className="card bg-white dark:bg-dark-blue stext-white shadow-md rounded-lg ">
                  <div className="image-container overflow-hidden rounded-t-lg  h-[166px] ">
                    <img src={country.flags.png} alt={country.name.common} className=" w-full object-cover lg:min-w-[264px] h-full" />
                  </div>
                  <div className="descirption px-6 py-7 font-semibold">
                    <h2 className="text-xl  mb-3">{country.name.common}</h2>

                    <p className="mb-1">
                      Population: <span className="font-normal">{FormatNumber(country.population)}</span>{" "}
                    </p>

                    <p className="mb-1">
                      Region:<span className="font-normal">{country.region}</span>{" "}
                    </p>

                    <p className="mb-1">
                      Capital: <span className="font-normal">{country.capital}</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </main>
  );
}

export default Main;
