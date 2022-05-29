import { useState, useEffect } from "react";
import "./main.css";
import Lottie from "react-lottie";
import SideNav from "../../Components/sideNav";
import Search from "../../Components/search";

function MainComponent() {
  return (
    <div className="category-container flex">
      {/* side navigation  */}
      <SideNav/>
      <Search/>
    </div>
  );
}

export default MainComponent;
