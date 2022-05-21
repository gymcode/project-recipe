import { useState, useEffect } from "react";
import "./main.css";
import "../../Components/component.css";
import logo from "../../Assets/Images/logo.svg";
import { useParams } from "react-router-dom";
import { Endpoints } from "../../services/endpoints";
import { useFetch, useFetchNoStorage } from "../../Hooks";
import { ReactComponent as Alert } from "../../Assets/Icons/alert-circle-outline.svg";

function MainComponent() {
  const [dish, setDish] = useState([]);
  const { id } = useParams();
  const dataObject = useFetchNoStorage(Endpoints.RECIPE_INFO(id), {
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    setTimeout(() => {
      const newDish = dataObject.data.dishTypes.map((data) => {
        return { name: data };
      });
      setDish(newDish);
    }, 3000);
  }, []);
  return (
    <div className="recipe-container grid grid-cols-2">
      {!dataObject.isLoading ? (
        <>
          <div className="grid grid-rows-3">
            <div
              className="row-span-2 shadow-6xl"
              style={{
                clipPath: "circle(67% at 34% 16%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${dataObject.data.image})`,
              }}
            />
            <div className="p-5 pl-16">
              <h3 className="kreon-font text-xl text-black">
                Extended Ingredients
              </h3>
              <div className="flex flex-wrap">
                {dataObject.data.extendedIngredients.map((data) => (
                  <>
                    <div className="px-4 py-5">
                      <div className="card-style kreon-font h-12 w-32 flex items-center text-black hover:text-black hover:bg-orange-600 justify-center rounded-tl-xl rounded-br-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl duration-300">
                        {data.name}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 pr-16">
            <div>
              <div className="pt-14 flex justify-end">
                <img src={logo} className={"h-32 w-32"} alt="" />
              </div>
              <div className="kreon-font text-4xl w-3/4">
                {dataObject.data.title}
              </div>
              <div className="kreon-font py-3 pt-10">
                <div className="mb-3">
                  <h3 className="text-xl">Dish Types</h3>
                  <p>
                    This type of dish is best suitable for the following dish
                    types
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {dish.map((data) => (
                    <>
                      <div className="pr-3">
                        <div
                          className="card-style kreon-font h-8 w-32 flex items-center text-white justify-center rounded-tl-2xl rounded-br-2xl"
                          style={{ background: "#000" }}
                        >
                          {data.name}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div>
                <div
                  className="kreon-font lg:mt-8 h-10 w-full flex justify-center items-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180.18deg, #4D77ED 0.16%, #F98809 0.17%, #F83F05 85.53%)",
                  }}
                >
                  Recipe summary
                </div>
              </div>
            </div>
            <div>
              <h2 className="kreon-font text-xl flex">
                Instructions
                <Alert height={"1rem"} stroke={"red"} />
              </h2>
              <div
                className="kreon-font text-sm text-justify"
                dangerouslySetInnerHTML={{
                  __html: dataObject.data.instructions,
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <>this is loading</>
      )}
    </div>
  );
}

export default MainComponent;
