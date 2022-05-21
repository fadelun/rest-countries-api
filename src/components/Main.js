import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Filter } from "./Filter";
import FormatNumber from "../utils/FormatNumber";

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
    console.log(regions);

    if (regionName !== "") {
      const findedRegions = regions.find((item) => {
        return item === regionName;
      });

      const filteredRegions = countries.filter((item) => {
        return item.region === findedRegions;
      });

      console.log(filteredRegions);

      console.log("you choiese " + findedRegions);

      setResult(filteredRegions);
    }
  };

  const sortHandler = (items) => {
    items.sort(function (a, b) {
      const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => response)
      .then((res) => {
        const datas = res.data;
        sortHandler(datas);

        console.log(datas);
        // console.log(sortByName);

        setCountries(datas);
        setResult(datas);

        console.log("useEFfect ", result);
        console.log("useEFfect ", countries);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.com/v3.1/all")
  //     .then((response) => response)
  //     .then((res) => {
  //       const datas = res.data;
  //       setCountries(datas);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("useEffect-2 ", result);
  // }, [regionName, result]);

  return (
    <main className=" w-4/5 xl:w-[1400px] min-h-screen pt-24 mx-auto relative ">
      <div className="features  flex  lg:justify-between flex-wrap lg:flex-nowrap">
        <Search searchCountry={searchCountry} searchHandler={searchHandler} />
        <Filter regionName={regionName} setRegionName={setRegionName} clickHandler={regionHandler} />
        {/* <Filter clickHandler={regionHandler} /> */}
      </div>
      <div className="cards mt-10 grid grid-rows-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,_minmax(264px,_1fr))] gap-5 lg:gap-8 xl:gap-10 items-center ">
        {loading ? (
          <div classsName="bg-slate-300 absolute inset-0">
            <h1 className="text-3xl font-bold">Loading...</h1>
          </div>
        ) : (
          result &&
          result.map((country, i) => {
            return (
              <Link key={i + 1} to={country.name.common.toLowerCase()}>
                <div className="card bg-white shadow-md rounded-lg ">
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
          // countries &&
          // countries.map((country, i) => {
          //   return (
          //     <Link key={i + 1} to={country.name.common.toLowerCase()}>
          //       <div className="card bg-white shadow-md rounded-lg ">
          //         <div className="image-container overflow-hidden rounded-t-lg  h-[166px] ">
          //           <img src={country.flags.png} alt={country.name.common} className=" w-full object-cover lg:min-w-[264px] h-full" />
          //         </div>
          //         <div className="descirption px-6 py-7 font-semibold">
          //           <h2 className="text-xl  mb-3">{country.name.common}</h2>

          //           <p className="mb-1">
          //             Population: <span className="font-normal">{FormatNumber(country.population)}</span>{" "}
          //           </p>

          //           <p className="mb-1">
          //             Region:<span className="font-normal">{country.region}</span>{" "}
          //           </p>

          //           <p className="mb-1">
          //             Capital: <span className="font-normal">{country.capital}</span>
          //           </p>
          //         </div>
          //       </div>
          //     </Link>
          //   );
          // })
        )}
      </div>
    </main>
  );
}

export default Main;
