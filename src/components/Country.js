import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IconArrowBack from "../images/arrow-back-outline.svg";
import FormatNumber from "../utils/FormatNumber";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCES":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "ERROR":
      return {
        error: "something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

function Country() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const { paramsName } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${paramsName}`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "SUCCES",
          payload: response.data,
        });
      })

      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  }, []);
  return (
    <div className=" bg-white">
      <main className=" w-4/5 mx-auto pt-24 text-base relative min-h-screen">
        <button id="btn-to-back" onClick={() => navigate(-1)}>
          <img src={IconArrowBack} alt="go-back-icon" width={18} />
          <span>back</span>
        </button>
        {/* {state.loading
        ? console.log("waiting")
        : state.post.map(({ name, region }) => {
            console.log(name);
            console.log(region);
          })} */}
        <div className="container mt-14 mx-auto ">
          {state.loading ? (
            <div classsName="bg-slate-300 absolute inset-0">
              <h1 className="text-3xl font-bold">Loading...</h1>
            </div>
          ) : (
            state.post.map(({ name, flags, population, region, subregion, capital, tld, currencies, borders, languages }) => (
              <div id="country" className="flex justify-between flex-wrap lg:flex-nowrap h-1/4 mb-52">
                <div className="image-container w-full lg:w-2/5">
                  <img src={flags.png} alt={name.common} className="w-full object-cover h-full" />
                </div>
                <div className="description w-full lg:w-1/2  lg:pl-16 py-10 flex  flex-col">
                  <h1 className="text-3xl text-bold  capitalize font-extrabold ">{paramsName}</h1>

                  <article className="list-info mt-6 mb-16 lg:h-44 capitalize flex flex-col lg:flex-wrap">
                    <p className="mb-2 font-semibold">
                      {/* // mengambil nativeName didalam properti name */}
                      native Name : <span className="font-normal">{Object.values(name.nativeName)[Object.values(name.nativeName).length - 1].common}</span>
                    </p>
                    <p className="mb-2 font-semibold">
                      {/* population: <span className="font-normal">{population}</span>  */}
                      population: <span className="font-normal">{FormatNumber(population)}</span>{" "}
                    </p>
                    <p className="mb-2 font-semibold">
                      region: <span className="font-normal">{region}</span>
                    </p>
                    <p className="mb-2 font-semibold">
                      subregion: <span className="font-normal">{subregion}</span>{" "}
                    </p>
                    <p className="mb-2 font-semibold">
                      capital: <span className="font-normal">{capital}</span>{" "}
                    </p>
                    <p className="mb-2 font-semibold">
                      top level domain: <span className="font-normal">{tld.map((e) => e)}</span>{" "}
                    </p>
                    <p className="mb-2 font-semibold">
                      currencies: <span className="font-normal">{Object.values(currencies)[0].name}</span>{" "}
                    </p>
                    <p className="font-semibold">
                      Languages :<span className="font-normal ">{Object.values(languages).reverse().join(", ")}</span>
                    </p>
                  </article>
                  <article className="border-countries capitalize  ">
                    <ul className="flex flex-wrap w-full">
                      <p className="font-semibold w-full lg:w-auto mb-4 lg:mb-0">border countries:</p>
                      {borders ? borders.map((e) => <li className="border-countries-list mr-2 font-normal">{e}</li>) : <li className="font-normal text-xl ">Nothing</li>}
                    </ul>
                  </article>
                </div>
              </div>
            ))
          )}
          {state.error ? state.error : null}
        </div>
      </main>
    </div>
  );
}

export default Country;
