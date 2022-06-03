import { useState, useEffect } from "react";
import "./main.css";
import "../../Components/component.css";
import logo from "../../Assets/Images/logo.svg";
import { useParams } from "react-router-dom";
import { Endpoints } from "../../services/endpoints";
import { useFetch, useFetchNoStorage, useModal } from "../../Hooks";
import Modal from "../../Components/modal";
import { ReactComponent as Alert } from "../../Assets/Icons/alert-circle-outline.svg";

function MainComponent() {
  const { toggle, visible } = useModal();
  const { summary, setSummary } = useState("");
  const [dish, setDish] = useState([]);
  const { id } = useParams();
  const dataObject = useFetchNoStorage(Endpoints.RECIPE_INFO(id), {
    isLoading: true,
    data: null,
  });
  console.log(summary);
  return (
    <div className="recipe-container grid grid-cols-2">
      {!dataObject.isLoading ? (
        <>
          <div className="grid grid-rows-3">
            <div
              className="row-span-3 rounded-2xl"
              style={{
                margin: "2rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${dataObject.data.image})`,
              }}
            />
            {/* <div className="p-5 pl-16">
              <h3 className="kreon-font text-xl text-black">
                Extended Ingredients
              </h3>
              <div className="flex flex-wrap">
                {dataObject.data.extendedIngredients.map((data) => (
                  <>
                    <div className="px-4 py-5">
                      <div className="card-style kreon-font h-12 w-32 flex items-center text-black hover:text-white hover:bg-orange-500 justify-center rounded-tl-xl rounded-br-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl duration-300">
                        {data.name}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div> */}
          </div>
          <div className="grid grid-rows-2 p-12">
            <div className="">
              <div className="flex items-center justify-between">
                <div className="kreon-font text-black text-4xl w-3/4">
                  {dataObject.data.title}
                </div>
                <img src={logo} className={"h-32 w-32"} alt="" />
              </div>
              <div className="bg-yellow-100">
                <h2 className="kreon-font">Recipe Summary</h2>
                <div
                  className="kreon-font text-lg text-justify"
                  dangerouslySetInnerHTML={{
                    __html: dataObject.data.summary,
                  }}
                />
              </div>
              <div>
                <div
                  onClick={toggle}
                  className="kreon-font lg:mt-8 h-10 w-full flex justify-center items-center shadow-lg cursor-pointer"
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
              <h2 className="kreon-font text-xl text-black flex">
                Instructions
                <Alert height={"1rem"} stroke={"red"} />
              </h2>
              <div
                className="kreon-font text-sm text-justify text-black text-justify"
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

      <Modal visible={visible} toggle={toggle} header={"Recipe Summary"}>
        {/* <div
          className="p-3 kreon-font text-lg"
          dangerouslySetInnerHTML={{
            __html: dataObject.data.summary,
          }}
        /> */}
      </Modal>
    </div>
  );
}

export default MainComponent;
