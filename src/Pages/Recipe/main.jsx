import { useState, useEffect } from "react";
import "./main.css";
import "../../Components/component.css";
import logo from "../../Assets/Images/logo.svg";
import { useParams } from "react-router-dom";
import { Endpoints } from "../../services/endpoints";
import { useFetch, useFetchNoStorage } from "../../Hooks";

function MainComponent() {
  const { id } = useParams();
  const dataObject = useFetch(
    Endpoints.RECIPE_INFO(id),
    {
      isLoading: true,
      data: null,
    },
    "recipe_information"
  );
  console.log(dataObject);

  return (
    <div className="recipe-container grid grid-cols-2">
      {!dataObject.isLoading ? (
        <>
          <div className="grid grid-rows-3">
            <div
              className="row-span-2 shadow-6xl"
              style={{
                clipPath: "circle(67% at 34% 16%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${dataObject.data.image})`,
              }}
            />
            <div className="p-8 pl-16">
              <h3 className="kreon-font text-xl text-white">
                Extended Ingredients
              </h3>
              <div className="flex flex-wrap">
                {dataObject.data.extendedIngredients.map((data) => (
                  <>
                    <div className="px-4 py-5">
                      <div className="card-style kreon-font h-12 w-32 flex items-center text-white hover:text-black hover:bg-orange-600 justify-center rounded-tl-xl rounded-br-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl duration-300">
                        {data.name}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 pr-16">
            <div>
              <div className="pt-14 flex justify-end">
                <img src={logo} className={"h-32 w-32"} alt="" />
              </div>
              <div className="kreon-font text-4xl w-3/4">
                {dataObject.data.title}
              </div>
              <div className="pt-8 flex">
                <div className="kreon-font">Important notes</div>
              </div>
              <div>
                <div className="kreon-font h-10 w-full flex justify-center items-center shadow-md" style={{ background: "#F96107" }}>Recipe summary</div>
              </div>
            </div>
            <div>
              <h2 className="kreon-font py-2">Instructions</h2>
              <div dangerouslySetInnerHTML={{__html: dataObject.data.instructions}}/>
            </div>
          </div>
        </>
      ) : (
        <>this is loading</>
      )}
    </div>
  );
}

export default MainComponent;
