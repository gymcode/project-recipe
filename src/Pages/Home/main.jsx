import { useEffect, useState } from "react";
import logo from "../../Assets/Images/logo.svg";
import "./main.css";
import { Link } from "react-router-dom";
import JsonQuoteData from "../../helpers/quote.json";
import { Endpoints } from "../../services/endpoints";
import { useFetch, useModal } from "../../Hooks";
import Card from "../../Components/card";
import Lottie from "react-lottie";
import * as animationData from "../../Assets/lottie/lf30_editor_chrsdjer.json";
import * as loadingData from "../../Assets/lottie/lf30_editor_xad43im4.json";

function MainComponent() {
  const [quote, setQuote] = useState(JsonQuoteData.quote[0]);
  const dataResponse = useFetch(
    Endpoints.RANDOM_RECIPES,
    { isLoading: true, data: null },
    "recipe"
  );
  console.log(dataResponse);
  //prototypes
  Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  useEffect(() => {
    setInterval(randomQuote, 36000000);
    function randomQuote() {
      const data = JsonQuoteData.quote;
      // ----------------- factored code to just get the objects at random -------//
      const randomData = data.sample();
      setQuote(randomData);
    }
  }, [quote]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const defaultLoadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
  };
  return (
    <div
      className={
        "main-container grid grid-rows-2 grid-flow-col lg:p-20 md:p-20 sm:p-16 xs:p-12"
      }
    >
      {/* responsiveness  */}
      <div>
        <div className={"flex flex-row justify-between items-center"}>
          <div>
            <h3
              className={
                "kreon-font capitalize lg:text-8xl md:text-8xl sm:text-4xl xs:text-4xl text-white"
              }
            >
              Simple and <br />
              tasty <span style={{ color: "#F96107" }}>recipe</span>
            </h3>
          </div>
          <div>
            {/* Good food, good mood. */}
            <img
              src={logo}
              className={
                "lg:h-32 lg:w-32 md:h-32 md:w-32 sm:h-28 sm:w-28 xs:h-20 w-20"
              }
              alt=""
            />
          </div>
        </div>
        <div className={"lg:py-12 xs:py-6 lg:w-2/4 lg:px-5"}>
          <p className={"dancing-script text-xl text-white pb-3"}>
            <q>{quote.content}</q>
          </p>
          <p className="pacifico text-xl text-white">~{quote.author}</p>
        </div>
      </div>
      <div className={"kreon-font"}>
        <h4 className="capitalize text-xl lg:mt-1 sm:text-md xs:text-md text-white xs:-mt-20">Top Trends ....</h4>
        <div
          className={"grid grid-cols-6 gap-8 px-5 h-full flex justify-center"}
        >
          {/* random recipes iterations  */}
          <div className={"col-span-5 grid lg:grid-cols-2 lg:grid-rows-none xs:grid-cols-none xs:grid-rows-2"}>
            {dataResponse.isLoading ? (
              <div>
                <Lottie options={defaultLoadingOptions} />
              </div>
            ) : (
              dataResponse.data.recipes.map((data) => {
                return (
                  <Card
                    title={data.title}
                    image={data.image}
                    score={data.healthScore}
                    Vegetarian={data.vegetarian}
                    gluten={data.glutenFree}
                    id={data.id}
                    time={data.readyInMinutes}
                  />
                );
              })
            )}
          </div>
          {/* arrow navigation for next page */}
          <Link to="/healthy">
            <div className={"lottie lg:block md:block xs:hidden"}>
              <Lottie options={defaultOptions} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
