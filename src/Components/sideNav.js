import "./component.css"
import CuisineLogo from "../Assets/Images/logo2.svg"

const NavigationControl = [
  {
    id: 1,
    name: "Pescaterian",
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

const SideNav = () => {
  return (
    <nav className="w-[19%] side-nav-container bg-red-400 xl:block lg:bloxk md:block sm:hidden xs:hidden shadow-xl">
      <div className="w-auto h-36 mt-8 flex items-center px-12">
        <img src={CuisineLogo} className="h-[4.5rem]" />
      </div>
      <div className="px-10">
        <h2 className="capitalize text-sm text-gray-700 pb-2 px-3 font-sans border-b font-extralight">Diet Categories</h2>
        {NavigationControl.map((data) => (
          // navigationlinks
          <div className="flex h-12 items-center mt-5 my-1 px-3 text-gray-800 hover:rounded-lg hover:bg-[#FFE0D6] hover:text-[#F83F05] hover:shadow-sm hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out cursor-pointer">
            <div className="pr-5">
              <img src={data.svg.default} className="h-7 text-yellow-300" />
            </div>
            <div className="rubik font-medium">{data.name}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;