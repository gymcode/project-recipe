import { useState, useEffect } from "react";
import "./main.css";
import SideNav from "../../Components/sideNav";
import Search from "../../Components/search";
import CookingFrame from "../../Assets/Images/Cooking-pana.svg";

function MainComponent() {
  return (
    <div className="category-container overflow-hidden">
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
            {/* render random components in this section */}
            <div className="">
              <div className="post-header-img rounded-2xl w-2/3 bg-green-500 flex">
                <div className="w-[62%] p-10 text-white">
                  <h2 className="text-5xl kreon-font py-3">Hey there</h2>
                  <p className="leading-none cookie-font text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, incidunt! Sit rerum harum repellat qui voluptas accusamus non itaque veniam maiores, laborum atque. Dolore eum harum natus velit, saepe quaerat.</p>
                </div>
                <div className="w-[38%] ">
                  <img src={CookingFrame} className={"absolute w-[21%] top-3"} alt="" />
                </div>
              </div>
            </div>
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
