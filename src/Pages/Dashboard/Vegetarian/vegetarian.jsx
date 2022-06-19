import DashboardHeader from "../../../Components/dashboardHeader";
import { useFetch } from "../../../Hooks";
import { Endpoints } from "../../../services/endpoints";

// components
import DashboardCard from "../../../Components/dashCard";

const Vegetarian = () => {
  const searchEndpoint = `${Endpoints.SEARCH()}&diet=vegetarian&number=6&addRecipeNutrition=true`;
  const dataObject = useFetch(
    searchEndpoint,
    { isLoading: true, data: null },
    "vegetarian-section"
  );
  return (
    <div className="">
      <div>
        <h1 className="kreon-font text-4xl">Vegetarian Category</h1>
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
            {dataObject.isLoading ? (
              <>this is me</>
            ) : (
              dataObject.data.results.map((item) => {
                return <DashboardCard title={item.title} id={item.id} score={item.healthScore} time={item.readyInMinutes} image={item.image}/>;
              })
            )}
          </div>
        </div>
        <div>possible pagination</div>
      </div>
    </div>
  );
};

export default Vegetarian;
