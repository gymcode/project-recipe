import { useState, useEffect } from "react";
import "./main.css";
import {useParams} from "react-router-dom"
import {Endpoints} from "../../services/endpoints"
import { useFetch } from "../../Hooks";

function MainComponent() {
  const {id} = useParams()
  const dataObject = useFetch(Endpoints.RECIPE_INFO(id), {isLoading: false, data: null}, "recipe_information")
  console.log(dataObject)
  return (
    <div className="recipe-container grid grid-rows-7">
      
    </div>
  );
}

export default MainComponent;
