import { useState, useEffect } from "react";
import "./main.css";
import SideNav from "../../Components/sideNav";
import Search from "../../Components/search";

// components import
import Home from "./HomeCategory/home";

function MainComponent() {
  const [tab, setTab] = useState("Home");
  const childToParent = (data)=>{
      setTab(data)
  }
  return (
    <div className="category-container overflow-hidden">
      <div className="grid grid-cols-6 h-full">
        {/* side navigation section  */}
        <div className="">
          <SideNav childToParent={childToParent} />
        </div>
        {/* main body section  */}
        <div className="col-span-5 relative">
          {/* search section  */}
          <div className="absolute top-0 left-0 right-0">
            <Search />
          </div>
          {/* dynamic section  */}
          <div className="p-10 ml-1 mt-20">
            {/* render random components in this section */}
            {tab === "Home" && <Home />}
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
