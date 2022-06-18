import DashboardHeader from "../../../Components/dashboardHeader";
import "../main.css";

const Pescaterian = () => {
  return (
    <div className="">
      <div>
        <h1 className="kreon-font text-4xl">Pescaterian Category</h1>
        <DashboardHeader percentage={"70%"} menus={"162"} views={"1,240K"} bookmarks={"26,567K"}>
          <p>
            Most simply, a pescatarian is someone who doesn’t eat meat, but does
            eat fish. The term pescatarian was coined in the early 1990s and is
            a combination of the Italian word for fish, “pesce,” and the word
            “vegetarian.” Sometimes it’s spelled “pescetarian,” but this means
            the same thing.
          </p>
        </DashboardHeader>
        <div className="mt-7">
          <h2 className="kreon-font ">
            Explore more with the pescaterian category...
          </h2>
          <div className="mt-7 flex flex-wrap">
            <div className="dash-card lg:w-[30%] w-[80%] h-48 mb-8 ml-10 rounded-r-lg shadow-md bg-blue-200 grid grid-cols-2">
              <div className="lg:w-56 xl:w-56 w-40 h-full bg-cover bg-center" style={{backgroundImage: `url(${require("../../../Assets/Images/pexels-pixabay-414262.jpg")})`}}/>
              <div className="grid grid-rows-6 w-full">
                <div className="row-span-2 kreon-font text-lg items-center flex justify-center">Title goes here</div>
                <div className="row-span-3">dasd</div>
                <div>dasda</div>
              </div>
            </div>
            {/* <div className="bg-red-300 lg:w-[30%] w-[80%] h-48 mb-8 ml-10">
              csdcds
            </div>
            <div className="bg-red-300 lg:w-[30%] w-[80%] h-48 mb-8 ml-10">
              csdcds
            </div>
            <div className="bg-red-300 lg:w-[30%] w-[80%] h-48 mb-8 ml-10">
              csdcds
            </div>
            <div className="bg-red-300 lg:w-[30%] w-[80%] h-48 mb-8 ml-10">
              csdcds
            </div> */}
          </div>
        </div>
        <div>
          possible pagination 
        </div>
      </div>
    </div>
  );
};

export default Pescaterian;
