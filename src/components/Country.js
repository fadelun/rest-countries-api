import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

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
  useEffect(() => {
    // getData();
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        dispatch({ type: "SUCCES", payload: response.data });
      })

      .catch((err) => {
        dispatch({ type: "ERROR" });
      });

    // state.post.map((item) => {
    //   console.log(item.name.common);
    // });

    console.log(state.post);
  }, []);

  return (
    <div className="mt-20">
      {state.loading
        ? "loading"
        : state.post.map((item) => (
            <div className="w-3/4 mx-auto border ">
              <img src={item.flags.png} alt={item.name.common} />
              <h1 className="text-2xl text-bold">{name}</h1>
              <p>population: {item.population}</p>
              <p>region: {item.region}</p>
              <p>subregion: {item.subregion}</p>
              <p>capital: {item.capital}</p>
              <p>top level domain: {item.tld.map((e) => e)}</p>
              <p>currencies: {Object.values(item.currencies)[0].name}</p>
              <p>border:{item.borders ? item.borders.map((e) => `${e} `) : "Nothing"} </p>
            </div>
          ))}
      {state.error ? state.error : null}

      {/* 
        -flags.png
        -name.common
        -population
        -region
        -subregion
        -capital
        -tld.0
        -currencies.PEN.name
        -languages.(3 value)
        -borders.(2/3/4 value)
      */}
    </div>
  );
}

export default Country;
