import { useEffect, useRef } from "react";
import "./main.css";
import * as nextPageLoader from "../../Assets/lottie/lf30_editor_cialu9mk.json";
import Lottie from "react-lottie";
import { Endpoints } from "../../services/endpoints";
import { useFetch } from "../../Hooks";
import * as loadingData from "../../Assets/lottie/lf30_editor_xad43im4.json";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { GalleryComponent } from "..";
import { useInView } from "react-intersection-observer";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: nextPageLoader,
};

const defaultLoadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
};

function MainComponent() {
  const gallery = useRef(null);
  const control = useAnimation();
  const [ref, inView] = useInView();
  const searchEndpoint = `${Endpoints.SEARCH()}&diet=vegetarian&number=1`;
  const dataObject = useFetch(
    searchEndpoint,
    { isLoading: true, data: null },
    "vegi_search"
  );
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1, delay: 0.2 }}
        className="healthy-container grid lg:grid-rows-7 xl:grid-rows-7"
      >
        <div className="row-span-6 grid xl:grid-cols-2 lg:grid-cols-2 ">
          <div className="lg:p-36 xl:-36 xs:p-10 sm:p-10 mt-16 kreon-font text-white">
            <motion.div
              initial={{ x: -100, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
            >
              <h2 className="w-full my-5 lg:text-6xl xl:text-6xl xs:text-5xl capitalize">
                Changing your eating habits ?
              </h2>
              <p className="imprima-font">
                Always take care of your health starting from the food menu that
                you consume everyday
              </p>
            </motion.div>
            <Link to={"/dashboard"}>
              <motion.div
                initial={{ y: 50, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className="flex justify-center items-center lg:ml-3 xl:ml-3 mt-10 lg:w-1/2 xl:w-1/2 xs:w-full p-5 text-white hover:text-black shadow-2xl hover:bg-red-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              >
                Explore more content..
              </motion.div>
            </Link>
          </div>
          {dataObject.isLoading ? (
            <div className="flex items-center justify-center">
              <Lottie options={defaultLoadingOptions} height={400} width={400} />
            </div>
          ) : (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
              className="flex justify-center items-center lg:mt-44 xl:mt-44 xs:mt-10 ml-32 xs:ml-16 w-[62%] h-[68%] xs:w-[70%] sm:h-[70%] xs:w-[70%] sm:h-[70%]"
            >
              <div
                className="bg-white h-full rounded-lg shadow-2xl grid grid-rows-2"
                style={{ width: "75%" }}
              >
                <div className="healthy-card-image" />
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={dataObject.data.results[0].image}
                        className={"h-20 w-28 rounded-full"}
                        alt=""
                      />
                    </div>
                    <p className="kreon-font text-xl ml-5">
                      {dataObject.data.results[0].title}
                    </p>
                  </div>
                  <div className="flex justify-between p-5 kreon-font">
                    <div>
                      <p className="imprima-font">Calories</p>
                      <p className="text-red-700">230</p>
                    </div>
                    <div>
                      <p className="imprima-font">Protein</p>
                      <p className="text-green-700">12g</p>
                    </div>
                    <div>
                      <p className="imprima-font">Fat</p>
                      <p className="text-red-700">34g</p>
                    </div>
                  </div>
                  <div className="border-b mt-7"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div
          onMouseOver={() => scrollToSection(gallery)}
          className="healthy-lottie flex justify-center sm:hidden xs:hidden lg:block"
        >
          <Lottie options={defaultOptions} />
        </div>
      </motion.div>
      <div ref={gallery}>
        <GalleryComponent />
      </div>
    </>
  );
}

export default MainComponent;
