import Logo from "../Assets/Images/logo2.png";

const NavigationControl = [
  {
    id: 1,
    name: "Pescaterian",
    svg: require("../Assets/Images/koi-fish.png"),
  },
  {
    id: 2,
    name: "Omnivore",
    svg: require("../Assets/Images/proteins.png"),
  },
  {
    id: 3,
    name: "Vegetarian",
    svg: require("../Assets/Images/carrot.png"),
  },
  {
    id: 4,
    name: "Fruitarian",
    svg: require("../Assets/Images/fruits.png"),
  },
  {
    id: 5,
    name: "Paleo",
    svg: require("../Assets/Images/nuts.png"),
  },
  {
    id: 6,
    name: "Vegan",
    svg: require("../Assets/Images/broccoli.png"),
  },
];

const SideNav = () => {
  return (
    <nav className="w-1/6 side-nav-container bg-red-400 xl:block lg:bloxk md:block sm:hidden xs:hidden shadow-xl">
      <div className="w-auto h-48 flex justify-center items-center">
        <img src={Logo} className="h-20" />
      </div>
      <div className="px-20">
        {NavigationControl.map((data) => (
          <div className="flex h-16 items-center">
            <div className="pr-5">
                <img src={data.svg} className="h-7"/>
            </div>
            <div>{data.name}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
