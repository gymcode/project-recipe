import BackgroundImage from "../../Assets/Images/background-img.png"
import logo from "../../Assets/Images/logo.svg"
import "./main.css"

function MainComponent(){
    return (
        <div className={"main-container grid grid-rows-2 grid-flow-col gap-4 p-16"}>
            {/* responsiveness  */}
            <div className={"flex flex-row justify-between"}>
                <div>
                    <h3 className={"kreon-font capitalize text-9xl py-4"}>Simple and <br />tasty recipe</h3>
                    <p className={"w-2/3"}>“Food can be very transformational, and it can be more than just about a dish. That’s what happened to me when I first went to France. I fell in love. And if you fall in love, well, then everything is easy.”</p>
                </div>
                <div>
                {/* Good food, good mood. */}
                    <img src={logo} className={"h-32 w-32"} alt="" />
                </div>
            </div>
            <div>hey</div>
        </div>
    )
}

export default MainComponent