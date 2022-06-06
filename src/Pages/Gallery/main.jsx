import "./main.css";
import "../../Components/component.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MainComponent({ data }) {
  return (
    <>
      <div className="gallery-container xl:px-28 lg:px-28 xs:px-16 sm:px-16 grid lg:grid-cols-3 xl:grid-cols-3 py-20 gap-10">
        <div className="grid lg:grid-rows-6 gap-5">
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
            data-aos="zoom-in-right"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="row-span-3 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url(${require("../../Assets/Images/background11.jpg")})`,
            }}
          />
          <div />
        </div>
        <div className="grid grid-rows-6">
          <div className="kreon-font text-6xl text-center border-b border-gray-100 h-20">
            Our Gallery
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            data-aos="zoom-out-up"
            data-aos-offset="500"
            data-aos-duration="3000"
            className="row-span-5 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url(${require("../../Assets/Images/background4.jpg")})`,
            }}
          />
        </div>
        <div
          className="grid grid-row-2 gap-10"
          data-aos="zoom-in-left"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <div>
            <img
              src={require("../../Assets/Images/vege2.jpg")}
              className={"h-full w-full rounded-xl"}
              alt=""
            />
          </div>
          <div>
            <img
              src={require("../../Assets/Images/pexels-jonathan-borba-2983101.jpg")}
              className={"h-full w-full rounded-xl"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
