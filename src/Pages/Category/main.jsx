import { useState, useEffect } from "react";
import "./main.css";
import Lottie from "react-lottie";
import SideNav from "../../Components/sideNav";
import Search from "../../Components/search";

function MainComponent() {
  return (
    <div className="category-container overscroll-none">
      <div className="grid grid-cols-6 h-full">
        {/* side navigation section  */}
        <div className="">
          <SideNav />
        </div>
        {/* main body section  */}
        <div className="col-span-5 relative">
          {/* search section  */}
          <div className="absolute top-0 left-0 right-0">
            <Search />
          </div>
          {/* dynamic section  */}
          <div className="p-10 ml-1 mt-20">
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
