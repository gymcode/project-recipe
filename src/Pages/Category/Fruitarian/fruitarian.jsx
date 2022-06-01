import CookingFrame from "../../../Assets/Images/Cooking-pana.svg";

const Fruitarian = () => {
  return (
    <div className="">
      <div className="post-header-img rounded-2xl w-2/3 flex">
        <div className="w-[62%] p-10 text-white">
          <h2 className="text-5xl kreon-font py-3">Hey there,</h2>
          <p className="leading-none cookie-font text-lg text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            incidunt! Sit rerum harum repellat qui voluptas accusamus non itaque
            veniam maiores, laborum atque. Dolore eum harum natus velit, saepe
            quaerat.
          </p>
        </div>
        <div className="w-[38%] ">
          <img src={CookingFrame} className={"absolute w-[21%] top-3"} alt="" />
        </div>
      </div>
      <div className="my-8">
        <h2 className="kreon-font">
          Let's guess some dishes you'll like to prepare...
        </h2>
      </div>
    </div>
  );
};

export default Fruitarian
