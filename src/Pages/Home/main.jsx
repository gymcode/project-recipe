import BackgroundImage from "../../Assets/Images/background-img.png"
import logo from "../../Assets/Images/logo.svg"
import "./main.css"

function MainComponent(){
    return (
        <div className={"main-container grid grid-rows-2 grid-flow-col p-16"}>
            {/* responsiveness  */}
            <div className={"flex flex-row justify-between"}>
                <div>
                    <h3 className={"kreon-font capitalize text-8xl py-4 text-gray-900"}>Simple and <br />tasty recipe</h3>
                    <div className={"py-6 w-2/4 px-5"}>
                        <p className={"dancing-script text-xl pb-3"}><q>Food can be very transformational, and it can be more than just about a dish. That’s what happened to me when I first went to France. I fell in love. And if you fall in love, well, then everything is easy.</q></p>
                        <p className="pacifico text-xl">~Alice Waters</p>
                    </div>
                </div>
                <div>
                {/* Good food, good mood. */}
                    <img src={logo} className={"h-32 w-32"} alt="" />
                </div>
            </div>
            <div className={"kreon-font"}>
                <h4 className="capitalize text-xl">Top Trends ....</h4>
            </div>
        </div>
    )
}

export default MainComponent