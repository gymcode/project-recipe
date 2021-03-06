import { ReactComponent as SearchVector } from "../Assets/Images/Vector.svg";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div 
      initial = {{y: -200}}
      animate = {{y: 0}}
      transition={{ ease: "easeInOut", duration: .5, delay: 0.4 }}
    className="w-auto h-20 pl-10 flex items-center w-[100%] border-b border-gray-100">
      <div className="flex items-center bg-gray-100 w-11/12 py-1 rounded-md divide-x">
        <input
          className="ml-3 h-8 outline-0 bg-transparent text-gray-500"
          style={{ width: "95%" }}
          placeholder={"search..."}
        />
        <div className="border-l border-gray-400 px-3">
            <SearchVector height={"1.1rem"}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
