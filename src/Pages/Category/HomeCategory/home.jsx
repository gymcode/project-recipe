import CookingFrame from "../../../Assets/Images/Cooking-pana.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { motion } from "framer-motion";

const data = [
  {
    id: "1"
  },
  {
    id: "2"
  },
  {
    id: "3"
  },
  {
    id: "4"
  },
  {
    id: "5"
  },
  {
    id: "6"
  },
  {
    id: "7"
  },
  {
    id: "8"
  },
  {
    id: "9"
  }
]

const Home = () => {
  return (
    <div className="">
      <motion.div className="grid grid-cols-5 gap-6">
        <motion.div  
          initial = {{x: -100, opacity: 0}}
          animate = {{x: 0, opacity: 1}}
          transition={{ ease: "easeInOut", duration: .5, delay: 1 }} 
          className="post-header-img rounded-2xl flex col-span-3">
          <div className="w-[62%] p-10 text-white">
            <h2 className="text-5xl kreon-font py-3">Hey there,</h2>
            <p className="leading-none text-[0.8rem] font-medium imprima-font text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              incidunt! Sit rerum harum repellat qui voluptas accusamus non itaque
              veniam maiores, laborum atque. Dolore eum harum natus velit, saepe
              quaerat.
            </p>
          </div>
          <div className="w-[38%] ">
            <img src={CookingFrame} className={"absolute w-[20%] top-[1.9rem]"} alt="" />
          </div>
        </motion.div>
        <motion.div 
          initial = {{x: 100, opacity: 0}}
          animate = {{x: 0, opacity: 1}}
          transition={{ ease: "easeInOut", duration: .5, delay: 1 }} 
          className="category-background rounded-2xl flex col-span-2 shadow-xl">
          <div className=" p-10 text-black">
            <h2 className="text-5xl kreon-font py-3" >Coming soon...,</h2>
            <p className="leading-none text-[0.8rem] font-medium imprima-font text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              incidunt! Sit rerum harum repellat qui voluptas accusamus non itaque
              veniam maiores, laborum atque. Dolore eum harum natus velit, saepe
              quaerat.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{ ease: "easeInOut", duration: .6, delay: 1.5 }} 
        className="my-8">
        <h2 className="kreon-font">
          <strong>Popular</strong> this week{" "}
        </h2>
        <Splide aria-label="My Favorite Images" options={{perPage:5, arrows: false}}>
          {data.map(()=>{
            return (
              <>
              <SplideSlide>
                <div className="h-44 mt-20 flex justify-center items-center">
                  <div className="dash-card w-[85%] h-full rounded-2xl">
                    <div className="absolute h-32 w-32 bg-yellow-200 top-[1rem] left-[5.5rem] shadow-xl rounded-full">
                        
                    </div>
                  </div>
                </div>,
              </SplideSlide>
              </>
            )
          })}
        </Splide>
      </motion.div>
      <motion.div 
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      transition={{ ease: "easeInOut", duration: .6, delay: 1.8 }} 
      className="my-8">
        <h2 className="kreon-font">
          Let's guess some dishes you'll like to prepare...
        </h2>
        <Splide aria-label="My Favorite Images" options={{perPage:4, arrows: false}}>
          <SplideSlide>
            <div className="h-48 mt-10 flex justify-center items-center">
                <div className="dashboard-card w-[85%] h-full rounded-2xl">
                </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-48 mt-10 flex justify-center items-center">
                <div className="bg-red-800 w-[85%] h-full rounded-2xl">
                </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-48 mt-10 flex justify-center items-center">
                <div className="bg-red-800 w-[85%] h-full rounded-2xl">
                </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-48 mt-10 flex justify-center items-center">
                <div className="bg-red-800 w-[85%] h-full rounded-2xl">
                </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-48 mt-10 flex justify-center items-center">
                <div className="bg-red-800 w-[85%] h-full rounded-2xl">
                </div>
            </div>
          </SplideSlide>
        </Splide>
      </motion.div>
    </div>
  );
};

export default Home;
