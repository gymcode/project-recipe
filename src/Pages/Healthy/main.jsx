import { useState, useEffect } from "react";
import "./main.css";
import * as nextPageLoader from "../../Assets/lottie/lf30_editor_cialu9mk.json";
import Lottie from "react-lottie";
import { Endpoints } from "../../services/endpoints";
import { useFetch } from "../../Hooks";
import * as loadingData from "../../Assets/lottie/lf30_editor_xad43im4.json";
import { Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: nextPageLoader,
};

const defaultLoadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
};

function MainComponent() {
  const searchEndpoint = `${Endpoints.SEARCH}&diet=vegetarian&number=1`;
  const dataObject = useFetch(
    searchEndpoint,
    { isLoading: true, data: null },
    "vegi_search"
  );
  //   const data = dataObject.data.results[0]
  //   console.log(dataObject.data.results[0]);
  return (
    <div className="healthy-container grid grid-rows-7">
      <div className="row-span-6 grid grid-cols-2">
        <div className="p-36 mt-16 kreon-font text-white">
          <h2 className="w-full my-5 text-6xl capitalize">
            Changing your eating habits ?
          </h2>
          <p>
            Always take care of your health starting from the food menu that you
            consume everyday
          </p>
          <Link to={"/category"}>
            <div className="flex justify-center items-center ml-3 mt-10 w-1/2 p-5 text-white hover:text-black shadow-2xl hover:bg-red-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Explore more content..
            </div>
          </Link>
        </div>
        {dataObject.isLoading ? (
          <>
            <Lottie options={defaultLoadingOptions} />
          </>
        ) : (
          <div
            className="flex justify-center items-center mt-44 ml-32"
            style={{ width: "62%", height: "68%" }}
          >
            <div
              className="bg-white h-full rounded-lg shadow-2xl grid grid-rows-2"
              style={{ width: "75%" }}
            >
              <div className="healthy-card-image" />
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <img
                      src={dataObject.data.results[0].image}
                      className={"h-20 w-28 rounded-full"}
                      alt=""
                    />
                  </div>
                  <p className="kreon-font text-xl ml-5">
                    {dataObject.data.results[0].title}
                  </p>
                </div>
                <div className="flex justify-between p-5 kreon-font ">
                  <div>
                    <p>Calories</p>
                    <p className="text-red-700">230</p>
                  </div>
                  <div>
                    <p>Protein</p>
                    <p className="text-green-700">12g</p>
                  </div>
                  <div>
                    <p>Fat</p>
                    <p className="text-red-700">34g</p>
                  </div>
                </div>
                <div className="border-b mt-7">

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="healthy-lottie flex justify-center">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}

export default MainComponent;
