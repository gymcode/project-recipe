import CookingFrame from "../../../Assets/Images/Cooking-pana.svg";

const Paleo = () => {
  return (
    <div className="">
      <div>
        <h1 className="kreon-font text-4xl">Paleo Category</h1>
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
              <div className="bg-[#FFD3D3] rounded-xl p-4">dasd</div>
              <div className="bg-[#DCFFD3] rounded-xl p-4">dsa</div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#D3E0FF] rounded-xl p-4">das</div>
              <div className="bg-[#FFFBD3] rounded-xl p-4">asd</div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h2 className="kreon-font ">
            Explore more with the paleo category...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Paleo
