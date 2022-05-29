import { useState, useEffect } from "react";
import "./main.css";
import Lottie from "react-lottie";
import SideNav from "../../Components/sideNav";
import Search from "../../Components/search";

function MainComponent() {
  return (
    <div className="category-container">
      <div className="grid grid-cols-6 h-full">
        {/* side navigation section  */}
        <div className="">
          <SideNav />
        </div>
        {/* main body section  */}
        <div className="col-span-5">
          {/* search section  */}
          <div>
            <Search />
          </div>
          {/* dynamic section  */}
          <div className="p-10 ml-1">
            csdas
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* side navigation  */
}
{
  /* <SideNav /> */
}
{
  /* <Search /> */
}

export default MainComponent;
