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

  const { paramsName } = useParams();

  // const getNativeName = () => {
  //   if (state.post) {
  //     state.post.map((item) => {
  //       const allNativeNames = Object.values(item.name.nativeName);
  //       const getNative = Object.values(allNativeNames[allNativeNames.length - 1]);

  //       console.log(allNativeNames);
  //       console.log(getNative[getNative.length - 1]);

  //       // console.log(item);
  //     });
  //   } else {
  //     console.log("LOL");
  //   }
  // };

  // useEffect(() => {
  //   getDataAPI();

  //   console.log("get API succes");
  //   console.log(state.post);
  // }, []);

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
      // .then((state) => {
      //   console.log(state.post);
      // })

      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  // useEffect(() => {
  //   getNativeName();
  // }, []);

  return (
    <main className=" w-4/5 mx-auto pt-24 text-base">
      <button className="flex justify-between px-10 py-2 rounded-md shadow-xl bg-slate-50">
        <img src={IconArrowBack} alt="go-back-icon" width={18} />
        <span>back</span>
      </button>
      {/* {state.loading
        ? console.log("waiting")
        : state.post.map(({ name, region }) => {
            console.log(name);
            console.log(region);
          })} */}
      <div className="container mt-4 bg-slate-600 min-h-full">
        {state.loading ? (
          <h1 className="text-2xl">Loading...</h1>
        ) : (
          state.post.map(({ name, flags, population, region, subregion, capital, tld, currencies, borders, languages }) => (
            <div id="country" className="flex ">
              <div className="image-container w-1/2">
                <img src={flags.png} alt={name.common} className="w-full object-cover h-full" />
              </div>
              <div className="description w-1/2 bg-green-200 pl-16 py-10 flex flex-col">
                <h1 className="text-2xl text-bold border-b-2 border-black capitalize font-extrabold ">{paramsName}</h1>

                <article className="list-info mt-4 mb-10 h-44 border-b-2 capitalize border-black flex flex-col flex-wrap">
                  <p className="mb-2 font-semibold">
                    native Name : <span className="font-normal">{Object.values(name.nativeName)[Object.values(name.nativeName).length - 1].common}</span>
                  </p>
                  <p className="mb-2 font-semibold">
                    population: <span className="font-normal">{population}</span>{" "}
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
                    Languages :<span className="font-normal">{Object.values(languages).reverse()}</span>
                    {/* Languages :<span className="font-normal">{Object.values(languages)[Object.values(languages).length - 1] ? Object.values(languages).reverse() + " ," : Object.values(languages)[Object.values(languages).length - 1]}</span> */}
                  </p>
                </article>
                <article className="border-countries">
                  <p>border:{borders ? borders.map((e) => `${e} `) : "Nothing"} </p>
                </article>
              </div>
            </div>
          ))
        )}
        {state.error ? state.error : null}
      </div>
    </main>
  );
}

export default Country;
