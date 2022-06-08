import CookingFrame from "../../../Assets/Images/Cooking-pana.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { Endpoints } from "../../../services/endpoints";
import { useFetch } from "../../../Hooks";
import { ReactComponent as Eye } from "../../../Assets/Icons/eye-outline.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const dataResponse = useFetch(
    Endpoints.GENERALSEARCH(),
    { isLoading: true, data: null },
    "dashboardrecipe"
  );
  // const data = dataResponse.data.searchResults[5]
  return (
    <div className="">
      <motion.div className="grid grid-cols-5 gap-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
          className="post-header-img rounded-2xl flex col-span-3"
        >
          <div className="w-[62%] p-10 text-white">
            <h2 className="text-5xl kreon-font py-3">Hey there,</h2>
            <p className="leading-none text-[0.8rem] font-medium imprima-font text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              incidunt! Sit rerum harum repellat qui voluptas accusamus non
              itaque veniam maiores, laborum atque. Dolore eum harum natus
              velit, saepe quaerat.
            </p>
          </div>
          <div className="w-[38%] ">
            <img
              src={CookingFrame}
              className={"absolute w-[19%] top-[1.9rem]"}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
          className="bg-center bg-cover rounded-3xl flex col-span-2 shadow-2xl"
          style={{
            backgroundImage: `url(${require("../../../Assets/Images/pexels-mathias-reding-11739092.jpg")})`,
          }}
        >
          <div className=" p-10 text-black">
            <h2 className="text-4xl kreon-font py-3 text-white">
              @Haute Wines...
            </h2>
            <motion.p className="text-base text-red-600 kreon-font">
              coming soon........
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-7 gap-10">
        <div className="col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 1.5 }}
            className="my-12"
          >
            <div className="flex justify-between kreon-font">
              <h2 className="">
                <strong>Popular</strong> this week{" "}
              </h2>
              <div className="flex">
                <p className="mr-2">view more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
            <Splide
              aria-label="My Favorite Images"
              options={{ perPage: 4, arrows: false }}
            >
              {dataResponse.isLoading ? (
                <>this is me</>
              ) : (
                dataResponse.data.map((item) => {
                  return (
                    <>
                      <SplideSlide>
                        <div className="h-44 mt-20 flex justify-center items-center">
                          <div className="dash-card w-[85%] h-full rounded-2xl">
                            <div
                              className="absolute bg-cover bg-center h-32 w-32 bg-yellow-200 top-[1rem] left-[4.5rem] shadow-xl rounded-full"
                              style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="mt-16 p-6 flex justify-between items-end">
                              <div className="imprima-font">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="#F83F05"
                                  viewBox="0 0 24 24"
                                  stroke="#F83F05"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>
                                {item.title}
                              </div>
                              <Link to={`/recipe/${item.id}`}>
                                <div
                                  style={{
                                    borderTop:
                                      "1px solid rgba(214, 214, 214, 0.11)",
                                  }}
                                  className="flex justify-end h-full items-center"
                                >
                                  <div
                                    className="border w-9 mt-2 rounded-full flex items-center justify-center"
                                    style={{
                                      borderColor: "gray",
                                      height: "2.3rem",
                                    }}
                                  >
                                    <Eye
                                      height={"1.5rem"}
                                      width={"1.5rem"}
                                      fill="gray"
                                    />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        ,
                      </SplideSlide>
                    </>
                  );
                })
              )}
            </Splide>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 1.8 }}
            className="my-8"
          >
            <h2 className="kreon-font">
              Let's guess some dishes you'll like to prepare...
            </h2>
            <Splide
              aria-label="My Favorite Images"
              options={{ perPage: 3, arrows: false }}
            >
              <SplideSlide>
                <div className="h-40 mt-10 flex justify-center items-center">
                  <div className="dash-card w-[85%] h-full rounded-2xl"></div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="h-40 mt-10 flex justify-center items-center">
                  <div className=" dash-card w-[85%] h-full rounded-2xl"></div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="h-40 mt-10 flex justify-center items-center">
                  <div className=" dash-card w-[85%] h-full rounded-2xl"></div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="h-40 mt-10 flex justify-center items-center">
                  <div className=" dash-card w-[85%] h-full rounded-2xl"></div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="h-40 mt-10 flex justify-center items-center">
                  <div className=" dash-card w-[85%] h-full rounded-2xl"></div>
                </div>
              </SplideSlide>
            </Splide>
          </motion.div>
        </div>
        <div className="col-span-2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 1.8 }}
            className="mt-12 bg-whitex bg-cover bg-center h-[88%] rounded-2xl cookie-font p-10 text-3xl text-center relative"
            style={{
              backgroundImage: `url(${require("../../../Assets/Images/pexels-pixabay-414262.jpg")})`,
            }}
          >
            <p>Dessert for the day</p>
            <div className="absolute bottom-0 bg-red-200"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
