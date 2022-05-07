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
    <main className="bg-light-mode-text w-5/6 min-h-screen mt-16 mx-auto ">
      <Search />
      {/* <Filter /> */}
      <div className="cards flex flex-wrap gap-4 md:gap-10 bg-red-400 justify-center md:justify-between items-center ">
        {countries ? (
          countries.map((country, i) => {
            return (
              <Link key={i + 1} to={country.name.common.toLowerCase()}>
                <div className="card bg-red-800">
                  <div className="flag w-[264px] min-h-[159px]">
                    <img src={country.flags.png} alt={country.name.common} style={{ width: "auto", height: "120%" }} />
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
