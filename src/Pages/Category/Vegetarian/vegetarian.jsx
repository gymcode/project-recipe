import CookingFrame from "../../../Assets/Images/Cooking-pana.svg";
import { ReactComponent as Person } from "../../../Assets/Icons/people-outline.svg";
import { ReactComponent as Eye } from "../../../Assets/Icons/eye-outline.svg";
import { ReactComponent as Menu } from "../../../Assets/Icons/menu-2-outline.svg";
import { ReactComponent as Bookmark } from "../../../Assets/Icons/bookmark-outline.svg";

const Vegetarian = () => {
  return (
    <div className="">
      <div>
        <h1 className="kreon-font text-4xl">Vegetarian Category</h1>
        <div className="grid grid-cols-2 h-60 my-5 gap-16 px-10">
          <div className="category-background w-full rounded-2xl shadow-lg border border-gray-100 p-7">
            <h2 className="kreon-font text-lg">Category Description</h2>
            <div className="roboto-font font-semibold pt-6 text-[0.8rem] tracking-wider">
              Most simply, a pescatarian is someone who doesn’t eat meat, but
              does eat fish. The term pescatarian was coined in the early 1990s
              and is a combination of the Italian word for fish, “pesce,” and
              the word “vegetarian.” Sometimes it’s spelled “pescetarian,” but
              this means the same thing.
            </div>
            <div className="flex justify-end mt-6 cookie-font text-3xl text-[#F83F05]">
              @Haute Cuisine
            </div>
          </div>
          <div className="w-full grid grid-rows-2 h-max-full gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#FFD3D3] rounded-xl p-4 px-5 flex items-center">
                <div className="flex-2 w-16 border-r border-[#FFA794]">
                  <Person height={"3.2rem"} fill={"#FF785A"} />
                </div>
                <div className="flex flex-col items-center px-4">
                  <div className="kreon-font text-sm text-gray-500">
                    Vegetarian Percentage
                  </div>
                  <div className="text-3xl font-bold text-[#FF785A]">90%</div>
                </div>
              </div>
              <div className="bg-[#DCFFD3] rounded-xl p-4 px-5 flex items-center ">
                <div className="flex-2 w-16 border-r border-[#82FF6D]">
                  <Menu height={"3.2rem"} fill={"#69FF51"} />
                </div>
                <div className="flex flex-col items-center px-4">
                  <div className="kreon-font text-sm text-gray-500">
                    Total Menus
                  </div>
                  <div className="text-3xl font-bold text-[#69FF51]">90%</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#D3E0FF] rounded-xl p-4 px-5 flex items-center ">
                <div className="flex-2 w-16 border-r border-[#5182FF]">
                  <Eye height={"3.2rem"} fill={"#0047FF"} />
                </div>
                <div className="flex flex-col items-center px-4">
                  <div className="kreon-font text-sm text-gray-500">
                    Guide Views
                  </div>
                  <p className="text-3xl font-bold text-[#5182FF] oldstyle-nums">1,240K</p>
                </div>
              </div>
              <div className="bg-[#FFEBD3] rounded-xl p-4 px-5 flex items-center ">
                <div className="flex-2 w-16 border-r border-[#FFB865]">
                  <Bookmark height={"3.2rem"} fill={"#FFB865"} />
                </div>
                <div className="flex flex-col items-center px-4">
                  <div className="kreon-font text-sm text-gray-500">
                    Total Bookmarks
                  </div>
                  <div className="text-3xl font-bold text-[#FFB865]">26,567K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h2 className="kreon-font ">
            Explore more with the vegetarian category...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Vegetarian;
