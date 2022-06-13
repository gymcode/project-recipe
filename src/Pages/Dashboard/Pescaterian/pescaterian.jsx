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
        </div>
      </div>
    </div>
  );
};

export default Pescaterian;
