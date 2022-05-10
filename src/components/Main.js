import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Filter } from "./Filter";

function Main() {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => response)
      .then((res) => {
        const datas = res.data;

        setCountries(datas);
        setLoad(countries && true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className=" w-4/5 xl:w-[1400px] min-h-screen pt-24 mx-auto ">
      <Search />
      <Filter />
      <div className="cards mt-10 grid grid-rows-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,_minmax(264px,_1fr))] gap-5 lg:gap-8 xl:gap-10 items-center ">
        {countries ? (
          countries.map((country, i) => {
            return (
              <Link key={i + 1} to={country.name.common.toLowerCase()}>
                <div className="card bg-white shadow-md rounded-lg ">
                  {/* <div className="flag min-w-[264px] h-[159px]"> */}
                  <div className="image-container overflow-hidden rounded-t-lg  h-[166px] ">
                    <img src={country.flags.png} alt={country.name.common} className=" w-full object-cover lg:min-w-[264px] h-full" />
                  </div>
                  <div className="descirption px-6 py-7">
                    <h2 className="text-xl font-semibold mb-3">{country.name.common}</h2>

                    <p className="mb-1">Population:{country.population} </p>

                    <p className="mb-1">Region: {country.region}</p>

                    <p className="mb-1">Capital: {country.capital}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>error</p>
        )}
      </div>
    </main>
  );
}

export default Main;
