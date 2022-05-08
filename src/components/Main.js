import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search } from "./Search";

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
        countries.map((item) => {
          console.log(item.name);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className=" w-5/6 min-h-screen mt-16 mx-auto ">
      <Search />
      {/* <Filter /> */}
      <div className="cards grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-10 items-center ">
        {/* <div className="cards flex flex-wrap justify-between gap-8 lg:gap-10 items-center "> */}
        {countries ? (
          countries.map((country, i) => {
            return (
              <Link key={i + 1} to={country.name.common.toLowerCase()}>
                <div className="card bg-white shadow-md rounded-lg">
                  <div className="flag min-w-[264px] h-[159px]">
                    <img src={country.flags.png} alt={country.name.common} className="h-full w-full" />
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
