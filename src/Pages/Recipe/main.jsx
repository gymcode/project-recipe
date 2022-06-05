import "./main.css";
import "../../Components/component.css";
import logo from "../../Assets/Images/logo.svg";
import { useParams } from "react-router-dom";
import { Endpoints } from "../../services/endpoints";
import { useFetch, useFetchNoStorage, useModal } from "../../Hooks";
import Modal from "../../Components/modal";
import { ReactComponent as Alert } from "../../Assets/Icons/alert-circle-outline.svg";
import ReactStars from "react-rating-stars-component";
import PageLoader from "../../Assets/lottie/lf30_editor_xnaqdxfx.json";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

function MainComponent() {
  const { toggle, visible } = useModal();
  const { id } = useParams();
  const dataObject = useFetchNoStorage(Endpoints.RECIPE_INFO(id), {
    isLoading: true,
    data: null,
  });
  const defaultLoadingOption = {
    loop: true,
    autoplay: true,
    animationData: PageLoader,
  };
  return (
    <div className="">
      {!dataObject.isLoading ? (
        <>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1, delay: 0.2 }}
           className="recipe-container grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-none xs:grid-cols-none overflow-hidden">
            <>
              <div>
                <motion.div
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
                  className="p-6 h-full"
                >
                  <img
                    src={dataObject.data.image}
                    className="h-full rounded-2xl"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="p-10 relative">
                <div className="">
                  <div className="lg:flex xl:flex md:flex  items-center justify-between">
                    <motion.div
                      initial={{ x: -100, opacity: 0.5 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 1,
                        delay: 0.2,
                      }}
                      className="kreon-font w-3/4"
                    >
                      <h2 className=" text-black text-4xl">
                        {dataObject.data.title}
                      </h2>
                      <div className="flex pt-3 items-center">
                        <div>
                          <ReactStars
                            count={5}
                            size={25}
                            activeColor="#F83F05"
                          />
                        </div>
                        <div className="border-r border-gray-300 px-2 text-sm">
                          2545 ratings
                        </div>
                        <div className="px-2 text-sm">2372 reviews</div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: 100, opacity: 0.5 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 1,
                        delay: 0.2,
                      }}
                    >
                      <img
                        src={logo}
                        className={
                          "h-32 w-32 lg:block xl:block md:block sm:hidden xs:hidden"
                        }
                        alt=""
                      />
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  initial={{ y: 40, opacity: 0.5 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
                  className="card-background p-8 shadow-md rounded-xl border border-gray-100"
                >
                  <h2 className="kreon-font text-xl">Recipe Summary</h2>
                  <div
                    className="imprima-font pt-2 text-lg text-justify"
                    dangerouslySetInnerHTML={{
                      __html: dataObject.data.summary,
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: -40, opacity: 0.5 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
                  className="mt-10 h-[40%]"
                >
                  <h2 className="kreon-font text-xl text-black flex">
                    Instructions
                    <Alert height={"1rem"} stroke={"red"} />
                  </h2>
                  <div
                    className="imprima-font text-base text-justify text-black text-justify h-11/12 overflow-y-auto"
                    dangerouslySetInnerHTML={{
                      __html: dataObject.data.instructions,
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{opacity: 0.5, scale: 0.9 }}
                  animate={{opacity: 1, scale:1 }}
                  transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
                  onClick={toggle}
                  className="kreon-font lg:mt-2 h-10 w-11/12 flex justify-center text-white items-center shadow-xl rounded-lg cursor-pointer absolute buttom-0"
                  style={{
                    background:
                      "linear-gradient(180.18deg, #4D77ED 0.16%, #F98809 0.17%, #F83F05 85.53%)",
                  }}
                >
                  View more...
                </motion.div>
              </div>
            </>
            <Modal
              visible={visible}
              toggle={toggle}
              header={"Extended Ingredients"}
            >
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
          </motion.div>
        </>
      ) : (
        <div
          className="flex justify-center items-center"
          style={{ height: "100vh" }}
        >
          <Lottie options={defaultLoadingOption} height={300} width={300} />
        </div>
      )}
    </div>
  );
}

export default MainComponent;
