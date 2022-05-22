import "./component.css";
import { ReactComponent as Checker } from "../Assets/Icons/checkmark-circle-outline.svg";
import { ReactComponent as Cross } from "../Assets/Icons/close-outline.svg";
import { ReactComponent as Eye } from "../Assets/Icons/eye-outline.svg";
import { Link } from "react-router-dom";

function Card({ id, title, image, score, Vegetarian, gluten, time }) {
  return (
    <div
      className="bg-white card-style shadow-xl mt-20 rounded-lg grid grid-cols-2 border-black"
      style={{ height: "75%", width: "93%" }}
    >
      <div className="h-full w-full">
        <img
          src={image}
          className={"h-full w-full rounded-lg"}
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
              <h2>Health score</h2>
              <p>{score}</p>
            </div>
            <div>
              <h2>Cooking time</h2>
              <p>{time}mins</p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex text-white">
            Vegetarian
              <div>
                {Vegetarian ? (
                  <>
                    <Checker height={"0.8rem"} stroke="#F96107" />
                  </>
                ) : (
                  <>
                    <Cross height={"0.8rem"} stroke="black" />
                  </>
                )}
              </div>
            </div>
            <div className="flex text-white">
              Gluten Free
              <div>
                {gluten ? (
                  <>
                    <Checker height={"0.8rem"} stroke="#F96107" />
                  </>
                ) : (
                  <>
                    <Cross height={"0.8rem"} stroke="black" />
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
              className="border w-10 rounded-full flex items-center justify-center"
              style={{ borderColor: "white", height: "68%" }}
            >
              <Eye height={"1.5rem"} fill="white" />
            </div>
          </div>
        </Link>
      </div>
    </div>
    // <div
    //   className={"card-style mt-24 rounded-2xl relative shadow-md"}
    //   style={{ height: "78%", width: "78%" }}
    // >
    //   <div
    //     className={"absolute left-24 -top-24 h-44 w-44 rounded-full shadow-2xl"}
    //   >
    //     <img
    //       src={image}
    //       className={"absolute h-44 w-44 rounded-full"}
    //       style={{
    //         backgroundAttachment: "fixed",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //     />
    //   </div>
    //   <div className={"grid grid-rows-5 p-6 h-full"}>
    //     <div className="row-span-4 mt-20 grid grid-rows-3">
    //       <div className="flex justify-center items-center row-span-2">
    //         <h2 className="text-2xl capitalize text-center text-white">
    //           {title}
    //         </h2>
    //       </div>
    //       <div className="text-gray-400 text-lg flex justify-center">
    //         <p> Health Score : {score}</p>
    //       </div>
    //     </div>
    //     <div className="border-t border-gray-300 pt-2 flex justify-between items-center">
    //       <div>
    //         <div className="flex text-white">
    //           Vegan
    //           <div>
    //             {vegan ? (
    //               <>
    //                 <Checker height={"0.8rem"} stroke="#F96107" />
    //               </>
    //             ) : (
    //               <>
    //                 <Cross height={"0.8rem"} stroke="black" />
    //               </>
    //             )}
    //           </div>
    //         </div>
    //         <div className="flex text-white">
    //           Gluten
    //           <div>
    //             {gluten ? (
    //               <>
    //                 <Checker height={"0.8rem"} stroke="#F96107" />
    //               </>
    //             ) : (
    //               <>
    //                 <Cross height={"0.8rem"} stroke="black" />
    //               </>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <Link to={`/recipe/${id}`}>
    //           <div
    //             className="h-10 w-32 flex justify-center items-center rounded-tl-lg rounded-br-lg cursor-pointer"
    //             style={{ background: "#F96107" }}
    //           >
    //             view
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
