import "./component.css";
import { ReactComponent as Checker } from "../Assets/Icons/checkmark-circle-outline.svg";
import { ReactComponent as Cross } from "../Assets/Icons/close-outline.svg";
import { ReactComponent as Eye } from "../Assets/Icons/eye-outline.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, title, image, score, Vegetarian, gluten, time }) {
  let trimString = function (string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
  };
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1.5, delay: 0.3 }}
      className="bg-white card-style shadow-xl lg:mt-20 xs:mt-7 rounded-lg grid lg:grid-cols-2 
                    lg:grid-rows-none sm:grid-rows-2 xs:grid-cols-2 border-black lg:h-3/4 lg:w-1/10 md:w-1/10 xs:w-full xs:h-48 overflow-hidden"
    >
      <div className="lg:h-full lg:w-full">
        <img
          src={image}
          className={"lg:h-full lg:w-full xs:h-48 rounded-lg"}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="h-full w-full lg:p-5 xs:p-2 grid grid-row-5">
        <div className="flex justify-center items-center row-span-3">
          <h2 className="lg:text-2xl xs:text-md capitalize text-center text-gray-800 lg:h-16 md:h-16 xs:h-5">
            {trimString(title, 30)}
          </h2>
        </div>
        <div
          className="row-span-1 grid lg:grid-rows-2"
          style={{ borderTop: "1px solid rgba(214, 214, 214, 0.11)" }}
        >
          <div className="lg:flex lg:justify-around lg:items-center hidden">
            <div>
              <div className="flex justify-center">
                <div
                  className="bg-green-600 rounded mr-2 mt-1"
                  style={{ height: "0.75rem", width: "0.75rem" }}
                />
                <div>
                  <h2 className="text-gray-800">Health score</h2>
                  <p className="text-sm text-gray-500">{score}%</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div
                  className="bg-blue-600 rounded mr-2 mt-1"
                  style={{ height: "0.75rem", width: "0.75rem" }}
                />
                <div>
                  <h2 className="text-gray-800">Cooking time</h2>
                  <p className="text-sm text-gray-500">{time}mins</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row xs:flex-col justify-around items-center">
            <div className="flex text-gray-800 ml-4">
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
            <div className="flex text-gray-800 ml-4">
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
              style={{ borderColor: "black", height: "81%" }}
            >
              <Eye height={"1.4rem"} fill="black" />
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Card;
