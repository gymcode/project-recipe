import { useState, useEffect } from "react";
import "./main.css";
import {useParams} from "react-router-dom"
import {Endpoints} from "../../services/endpoints"
import { useFetch } from "../../Hooks";

function MainComponent() {
  const {id} = useParams()
  const dataObject = useFetch(Endpoints.RECIPE_INFO(id), {isLoading: false, data: null}, "recipe_information")
  console.log(dataObject)
  const recipeImage = dataObject.data.image
  const bgImage = {
    backgroundImage: `url(${recipeImage})`,
    clipPath: "circle(67% at 28% 16%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  
  return (
    <div className="recipe-container grid grid-cols-2">
      <div className="grid grid-rows-3">
        <div className="row-span-2" style={bgImage}>

        </div>
        <div>das</div>
      </div>
      <div className="grid grid-rows-2">
        <div>dsdas</div>
        <div>das</div>
      </div>
    </div>
  );
}

export default MainComponent;
