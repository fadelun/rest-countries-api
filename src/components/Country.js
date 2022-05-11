import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import IconArrowBack from "../images/arrow-back-outline.svg";

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

  const { name } = useParams();

  const getDataAPI = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        dispatch({ type: "SUCCES", payload: response.data });
      })

      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  };

  const getNativeName = () => {
    if (state.post) {
      state.post.map((item) => {
        const allNativeNames = Object.values(item.name.nativeName);
        const getNative = Object.values(allNativeNames[allNativeNames.length - 1]);

        console.log(allNativeNames);
        console.log(getNative[getNative.length - 1]);

        return `${getNative[getNative.length - 1]}`;

        // console.log(item);
      });
    } else {
      console.log("LOL");
    }
  };

  useEffect(() => {
    getDataAPI();
    // getNativeName();

    // console.log(state.post);?
  }, []);

  return (
    <main className=" w-4/5 mx-auto pt-24 text-base">
      <button className="flex justify-between px-10 py-2 rounded-md shadow-xl bg-slate-50">
        <img src={IconArrowBack} alt="go-back-icon" width={18} />
        <span>back</span>
      </button>
      <div className="container mt-4 bg-slate-600 min-h-full">
        {state.loading
          ? "loading"
          : state.post.map((item) => (
              <div id="country" className="flex ">
                <div className="image-container w-1/2">
                  <img src={item.flags.png} alt={item.name.common} className="w-full object-cover h-full" />
                </div>
                <div className="description w-1/2 bg-green-200 pl-20 py-10 flex flex-col">
                  <h1 className="text-2xl text-bold border-b-2 border-black capitalize font-extrabold ">{name}</h1>

                  <arcticle className="list-info h-44 border-b-2 border-black flex flex-col flex-wrap">
                    <p>Native name : {getNativeName}</p>
                    <p>population: {item.population}</p>
                    <p>region: {item.region}</p>
                    <p>subregion: {item.subregion}</p>
                    <p>capital: {item.capital}</p>
                    <p>top level domain: {item.tld.map((e) => e)}</p>
                    <p>currencies: {Object.values(item.currencies)[0].name}</p>
                  </arcticle>
                  <arcticle className="border-countries">
                    <p>border:{item.borders ? item.borders.map((e) => `${e} `) : "Nothing"} </p>
                  </arcticle>
                </div>
              </div>
            ))}
        {state.error ? state.error : null}
      </div>
    </main>
  );
}

export default Country;
