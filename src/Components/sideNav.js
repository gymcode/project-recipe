import "./component.css";
import CuisineLogo from "../Assets/Images/logo2.svg";
import { ReactComponent as Home } from "../Assets/Icons/home-outline.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeData = {
  id: 7,
  name: "Home",
  svg: require("../Assets/Images/koi-fish.svg"),
};

const NavigationControl = [
  {
    id: 1,
    name: "Pescaterian",c
    svg: require("../Assets/Images/koi-fish.svg"),
  },
  {
    id: 2,
    name: "Omnivore",
    svg: require("../Assets/Images/proteins.svg"),
  },
  {
    id: 3,
    name: "Vegetarian",
    svg: require("../Assets/Images/carrot.svg"),
  },
  {
    id: 4,
    name: "Fruitarian",
    svg: require("../Assets/Images/fruits.svg"),
  },
  {
    id: 5,
    name: "Paleo",
    svg: require("../Assets/Images/nuts.svg"),
  },
  {
    id: 6,
    name: "Vegan",
    svg: require("../Assets/Images/broccoli.svg"),
  },
];

const SideNav = ({ childToParent }) => {
  const [tab, setTab] = useState("Home");
  function click(data) {
    setTab(data.name);
    childToParent(tab);
  }
  return (
    <motion.nav
      initial = {{x: -200}}
      animate = {{x: 0}}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: .5, delay: 0.1 }}
     className="w-auto side-nav-container h-full bg-red-400 xl:block lg:bloxk md:block sm:hidden xs:hidden shadow-xl">
      <Link to={"/"}>
        <div className="w-auto h-36 pt-8 py-5 flex items-center px-12">
          <img src={CuisineLogo} className="h-[4.5rem]" />
        </div>
      </Link>
      <div className="px-10">
        <h2 className="imprima-font capitalize text-sm text-gray-700 pb-2 px-3 font-sans border-b font-extralight">
          Main Dash
        </h2>
        <div
          onClick={() => click(HomeData)}
          className="flex h-12 items-center my-1 px-3 text-gray-800 hover:rounded-lg hover:bg-[#FFE0D6] hover:text-[#F83F05] hover:shadow-sm hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out cursor-pointer"
        >
          <div className="pr-5">
            <Home height={"1.6rem"} fill={"#555555"} />
          </div>
          <div className="imprima-font font-medium">Home</div>
        </div>
      </div>
      <div className="px-10 mt-6">
        <h2 className="imprima-font capitalize text-sm text-gray-700 pb-2 px-3 font-sans border-b font-extralight">
          Diet Categories
        </h2>
        {NavigationControl.map((data) => (
          // navigationlinks
          <div
            onClick={() => click(data)}
            className="flex h-12 items-center mt-5 my-1 px-3 text-gray-800 hover:rounded-lg hover:bg-[#FFE0D6] hover:text-[#F83F05] hover:shadow-sm hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out cursor-pointer"
          >
            <div className="pr-5">
              <img src={data.svg.default} className="h-7 text-yellow-300" />
            </div>
            <div className="imprima-font font-medium">{data.name}</div>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default SideNav;
