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
          <div>
            <div className="p-6 h-full">
              <img
                src={dataObject.data.image}
                className="h-full rounded-xl"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                alt=""
              />
            </div>
          </div>
          <div className="p-10 relative">
            <div className="">
              <div className="flex items-center justify-between">
                <div className="kreon-font text-black text-4xl w-3/4">
                  {dataObject.data.title}
                </div>
                <img src={logo} className={"h-32 w-32"} alt="" />
              </div>
            </div>
            <div className="card-background p-8 shadow-md rounded-xl border border-gray-100">
              <h2 className="kreon-font text-xl">Recipe Summary</h2>
              <div
                className="rubik pt-2 text-lg text-justify"
                dangerouslySetInnerHTML={{
                  __html: dataObject.data.summary,
                }}
              />
            </div>
            <div className="mt-10 h-[40%]">
              <h2 className="kreon-font text-xl text-black flex">
                Instructions
                <Alert height={"1rem"} stroke={"red"} />
              </h2>
              <div
                className="rubik text-base text-justify text-black text-justify h-11/12 overflow-y-auto"
                dangerouslySetInnerHTML={{
                  __html: dataObject.data.instructions,
                }}
              />
            </div>
            <div
              onClick={toggle}
              className="kreon-font lg:mt-3 h-10 w-11/12 flex justify-center items-center shadow-xl rounded-lg cursor-pointer absolute buttom-0"
              style={{
                background:
                  "linear-gradient(180.18deg, #4D77ED 0.16%, #F98809 0.17%, #F83F05 85.53%)",
              }}
            >
              View more...
            </div>
          </div>
        </>
      ) : (
        <>this is loading</>
      )}

      <Modal visible={visible} toggle={toggle} header={"Extended Ingredients"}>
        {!dataObject.isLoading ? (
          <>
            <div className="flex flex-wrap">
              {dataObject.data.extendedIngredients.map((data) => (
                <>
                  <div className="px-3 py-3">
                    <div className="card-style kreon-font h-12 w-32 flex items-center text-black hover:text-white hover:bg-orange-500 justify-center rounded-tl-xl rounded-br-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl duration-300">
                      {data.name}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        ) : (
          <>load</>
        )}
      </Modal>
    </div>
  );
}

export default MainComponent;
