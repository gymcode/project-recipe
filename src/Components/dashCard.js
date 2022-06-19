import { Link } from "react-router-dom";
import { ReactComponent as Eye } from "../Assets/Icons/eye-outline.svg";

const DashboardCard = ({ title, score, time, image, id }) => {
  let trimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };
  return (
    <>
      <div className="dash-card lg:w-[30%] w-[80%] h-48 mb-8 ml-10 rounded-r-lg shadow-md bg-blue-200 grid grid-cols-2">
        <div
          className="lg:w-56 xl:w-56 w-40 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${require("../Assets/Images/pexels-pixabay-414262.jpg")})`,
          }}
        />
        <div className="grid grid-rows-7 w-full p-2">
          <div className="row-span-3 kreon-font text-lg items-center flex justify-center">
            {trimString(title, 40)}
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <div>
              <div className="flex justify-center">
                <div
                  className="bg-yellow-400 rounded mr-2 mt-1"
                  style={{ height: "0.75rem", width: "0.75rem" }}
                />
                <div>
                  <h2 className="text-gray-800 text-sm kreon-font">
                    Health Score
                  </h2>
                  <p className="text-sm text-gray-500 imprima-font">
                    {score} score
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pl-4">
              <div className="flex justify-center">
                <div
                  className="bg-blue-600 rounded mr-2 mt-1"
                  style={{ height: "0.75rem", width: "0.75rem" }}
                />
                <div>
                  <h2 className="text-gray-800 text-sm kreon-font">
                    Cooking time
                  </h2>
                  <p className="text-sm text-gray-500 imprima-font">
                    {time} mins
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to={`/recipe/${id}`}>
            <div
              style={{
                borderTop: "1px solid rgba(214, 214, 214, 0.11)",
              }}
              className="row-span-2 flex justify-end h-full items-center px-1"
            >
              <div
                className="border w-7 rounded-full flex items-center justify-center"
                style={{ borderColor: "gray", height: "80%" }}
              >
                <Eye height={"1.2rem"} fill="gray" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
