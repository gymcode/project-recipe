import { useState, useEffect } from "react";
import "./main.css";
import SideNav from "../../Components/sideNav";
import Search from "../../Components/search";

// components import
import Home from "./HomeCategory/home";
import Pescaterian from "./Pescaterian/pescaterian";
import Paleo from "./Paleo/paleo";
import Vegan from "./Vegan/vegan";
import Vegetarian from "./Vegetarian/vegetarian";
import Omnivore from "./Omnivore/omnivore";
import Fruitarian from "./Fruitarian/fruitarian";

function MainComponent() {
  const [tab, setTab] = useState("Home");
  const childToParent = (data)=>{
      setTab(data)
  }
  return (
    <div className="category-container">
      <div className="grid grid-cols-6 h-full overflow-hidden">
        {/* side navigation section  */}
        <div className="">
          <SideNav childToParent={childToParent} />
        </div>
        {/* main body section  */}
        <div className="col-span-5 relative">
          {/* search section  */}
          <div className="absolute top-0 left-0 right-0 z-30 bg-white">
            <Search />
          </div>
        <div className="relative overflow-y-scroll h-full w-full">
          <div className="absolute">
            {/* dynamic section  */}
            <div className="p-10 ml-1 mt-20">
              {/* render random components in this section */}
              {tab === "Home" && <Home />}
              {tab === "Paleo" && <Paleo />}
              {tab === "Fruitarian" && <Fruitarian />}
              {tab === "Vegan" && <Vegan />}
              {tab === "Vegetarian" && <Vegetarian />}
              {tab === "Omnivore" && <Omnivore />}
              {tab === "Pescaterian" && <Pescaterian />}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
