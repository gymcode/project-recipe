import "./component.css";
import { ReactComponent as Checker } from "../Assets/Icons/checkmark-circle-outline.svg";
import { ReactComponent as Cross } from "../Assets/Icons/close-outline.svg";
import { ReactComponent as Eye } from "../Assets/Icons/eye-outline.svg";
import { Link } from "react-router-dom";

function Card({ id, title, image, score, Vegetarian, gluten, time }) {
  return (
    <div
      className="bg-white card-style shadow-xl lg:mt-20 xs:mt-7 rounded-lg grid lg:grid-cols-2 
                    lg:grid-rows-none sm:grid-rows-2 xs:grid-cols-2 border-black lg:h-3/4 lg:w-1/10 xs:w-full xs:h-48"
    >
      <div className="lg:h-full lg:w-full xs:h-3/4">
        <img
          src={image}
          className={"lg:h-full lg:w-full xs:h-3/4 rounded-lg"}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="h-full w-full p-5 grid grid-row-5">
        <div className="flex justify-center items-center row-span-3">
          <h2 className="text-2xl capitalize text-center text-white h-16">
            {title}
          </h2>
        </div>
        <div
          className="row-span-1 grid grid-rows-2"
          style={{ borderTop: "1px solid rgba(214, 214, 214, 0.11)" }}
        >
          <div className="flex justify-around items-center">
            <div>
              <div className="flex justify-center">
                <div className="h-3 w-3 bg-green-600 rounded mr-2 mt-1" />
                <div>
                  <h2 className="text-white">Health score</h2>
                  <p className="text-sm text-gray-400">{score}%</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="h-3 w-3 bg-blue-600 rounded mr-2 mt-1" />
                <div>
                  <h2 className="text-white">Cooking time</h2>
                  <p className="text-sm text-gray-400">{time}mins</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex text-white ml-4">
              Vegetarian
              <div>
                {Vegetarian ? (
                  <>
                    <Checker height={"0.8rem"} fill="#F96107" />
                  </>
                ) : (
                  <>
                    <Cross height={"0.8rem"} fill="black" />
                  </>
                )}
              </div>
            </div>
            <div className="flex text-white ml-4">
              Gluten Free
              <div>
                {gluten ? (
                  <>
                    <Checker height={"0.8rem"} fill="#F96107" />
                  </>
                ) : (
                  <>
                    <Cross height={"0.8rem"} fill="black" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Link to={`/recipe/${id}`}>
          <div
            style={{ borderTop: "1px solid rgba(214, 214, 214, 0.11)" }}
            className="flex justify-end h-full items-center"
          >
            <div
              className="border w-10 mt-2 rounded-full flex items-center justify-center"
              style={{ borderColor: "white", height: "81%" }}
            >
              <Eye height={"1.4rem"} fill="white" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
