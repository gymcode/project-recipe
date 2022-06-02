import CookingFrame from "../../../Assets/Images/Cooking-pana.svg";
import "../main.css";

const Pescaterian = () => {
  return (
    <div className="">
      <div>
        <h1 className="kreon-font text-4xl">Pescaterian Category</h1>
        <div className="grid grid-cols-2 h-60 my-5 gap-16 px-10">
          <div className="category-background w-full rounded-2xl shadow-lg border border-gray-100 p-7">
            <h2 className="kreon-font text-lg">Category Description</h2>
            <div className="roboto-font font-semibold pt-6 text-[0.8rem] tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              error accusamus sunt quia. Pariatur, sapiente libero! Veniam esse
              quos accusantium harum voluptate sunt numquam? Aliquam esse
              consequuntur eveniet vel? Voluptas!consequuntur eveniet vel? Voluptas!
            </div>
            <div className="flex justify-end mt-8 cookie-font text-3xl text-[#F83F05]">@Haute Cuisine</div>
          </div>
          <div className="w-full grid grid-rows-2 h-max-full gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-red-400">dasd</div>
              <div className="bg-red-400">dsa</div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-red-400">das</div>
              <div className="bg-red-400">asd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pescaterian;
