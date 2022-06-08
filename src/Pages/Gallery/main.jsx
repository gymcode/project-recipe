import "./main.css";
import "../../Components/component.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MainComponent({ data }) {
  return (
    <>
      <div className="gallery-container xl:px-28 lg:px-28 xs:px-16 sm:px-16 py-20">
        <div className=" text-center">
          <h2 className="kreon-font text-4xl pb-3">The Gallery</h2>
          <p className="imprima-font pb-4">Not much to see here just watch and get your mouth watered</p>
        </div>
        <div className="grid lg:grid-cols-9 xl:grid-cols-9 gap-3 h-[87%]">
          <div className="col-span-6 grid grid-rows-8 gap-3">
            <div className="row-span-5 grid grid-cols-8 gap-3">
              <div className="col-span-5 bg-red-300 bg-cover bg-center" style={{
                backgroundImage: `url(${require("../../Assets/Images/pexels-jonathan-borba-2983101.jpg")})`,
              }}></div>
              <div className="col-span-3 grid grid-row-2 gap-3">
                <div className="bg-yellow-300 bg-cover bg-center" style={{
                  backgroundImage: `url(${require("../../Assets/Images/pexels-jonathan-borba-2983101.jpg")})`,
                }}></div>
                <div className="bg-yellow-600 bg-cover bg-center" style={{
                  backgroundImage: `url(${require("../../Assets/Images/pexels-jonathan-borba-2983101.jpg")})`,
                }}></div>
              </div>
            </div>
            <div className="row-span-3 grid grid-cols-5 gap-3">
              <div className="col-span-2 bg-blue-300 bg-cover bg-center" style={{
                backgroundImage: `url(${require("../../Assets/Images/background4.jpg")})`,
              }}></div>
              <div className="col-span-3 bg-green-300 bg-cover bg-center" style={{
                backgroundImage: `url(${require("../../Assets/Images/pexels-jonathan-borba-2983101.jpg")})`,
              }}></div>
            </div>
          </div>
          <div className="col-span-3 grid grid-rows-6 gap-3">
            <div className="row-span-2 bg-green-400 bg-cover bg-center" style={{
                backgroundImage: `url(${require("../../Assets/Images/background4.jpg")})`,
              }}></div>
            <div className="row-span-4 bg-green-400 bg-cover bg-center" style={{
                backgroundImage: `url(${require("../../Assets/Images/background4.jpg")})`,
              }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
