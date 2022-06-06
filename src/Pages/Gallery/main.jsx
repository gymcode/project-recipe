import "./main.css";
import "../../Components/component.css";
import { AnimatePresence, motion } from "framer-motion";

function MainComponent({ data }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1, delay: 0.2 }}
        ref={data}
        className="gallery-container xl:px-28 lg:px-28 xs:px-16 sm:px-16 grid lg:grid-cols-3 xl:grid-cols-3 py-20 gap-10"
      >
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
          className="grid lg:grid-rows-6 gap-5"
        >
          <div className="row-span-2 imprima-font flex items-end text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            perspiciatis eum rem magni atque quasi, unde fuga dolorum sit,
            repellat iusto voluptatem. Alias reiciendis ducimus veniam dolorem
            reprehenderit doloremque quia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio, ullam voluptate eaque
            optio magnam beatae cupiditate reprehenderit! Minus rerum cum qui
            nulla dolores libero asperiores id! Odit ullam quae omnis!
          </div>
          <div
            className="row-span-3 bg-cover bg-center"
            style={{
              backgroundImage: `url(${require("../../Assets/Images/background11.jpg")})`,
            }}
          />
          <div />
        </motion.div>
        <div className="grid grid-rows-6">
          <div className="kreon-font text-6xl text-center border-b border-gray-100 h-20">
            Our Gallery
          </div>
          <div
            className="row-span-5 bg-cover bg-center"
            style={{
              backgroundImage: `url(${require("../../Assets/Images/background4.jpg")})`,
            }}
          />
        </div>
        <div className="grid grid-row-2 gap-10">
          <div>
            <img
              src={require("../../Assets/Images/vege2.jpg")}
              className={"h-full w-full"}
              alt=""
            />
          </div>
          <div>
            <img
              src={require("../../Assets/Images/pexels-jonathan-borba-2983101.jpg")}
              className={"h-full w-full"}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MainComponent;
