import CookingFrame from "../../../Assets/Images/Cooking-pana.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="bg-red-200">dsdasdasad</div>,
  <div className="bg-green-200">hello</div>,
  <div className="bg-blue-200">hey</div>,
  <div className="bg-yellow-200">thisbise</div>,
];

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div className="post-header-img rounded-2xl w-2/3 flex">
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
          <img src={CookingFrame} className={"absolute w-[21%] top-3"} alt="" />
        </div>
      </div>
      <div className="my-8">
        <h2 className="kreon-font">
          <strong>Popular</strong> this week{" "}
        </h2>
        <Splide aria-label="My Favorite Images" options={{perPage:4, arrows: false}}>
          <SplideSlide>
            <div className="bg-red-200 h-40">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
        </Splide>
      </div>
      <div className="my-8">
        <h2 className="kreon-font">
          Let's guess some dishes you'll like to prepare...
        </h2>
        <Splide aria-label="My Favorite Images" options={{perPage:4, arrows: false}}>
          <SplideSlide>
            <div className="bg-red-200 h-40">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
        </Splide>
        <Splide aria-label="My Favorite Images" options={{perPage:4, arrows: false}}>
          <SplideSlide>
            <div className="bg-red-200 h-40">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
        </Splide>
        <Splide aria-label="My Favorite Images" options={{perPage:4, arrows: false}}>
          <SplideSlide>
            <div className="bg-red-200 h-40">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
        </Splide>
        <Splide aria-label="My Favorite Images" options={{perPage:4, arrows: false}}>
          <SplideSlide>
            <div className="bg-red-200 h-40">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-200">dsdasdasad</div>,
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Home;
