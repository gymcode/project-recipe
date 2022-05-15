import "./main.css"
import * as nextPageLoader from "../../Assets/lottie/lf30_editor_cialu9mk.json"
import Lottie from "react-lottie"



const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: nextPageLoader,
}


function MainComponent(){
    return (
        <div className="healthy-container grid grid-rows-7">
            <div className="row-span-6 grid grid-cols-2 gap-4">
                <div className="p-40 mt-20 kreon-font text-white">
                    <h2 className="w-full my-4 text-6xl capitalize">Changing your eating habits ?</h2>
                    <p>Always take care of your health starting from the food menu that you consume everyday</p>
                </div>
                <div className="p-36 flex justify-center items-center">
                    <div className="bg-white h-full rounded-2xl shadow-2xl" style={{width: "75%"}}>

                    </div>
                </div>
            </div>
            <div className="healthy-lottie flex justify-center">
                <Lottie
                    options={defaultOptions}
                />
            </div>
        </div>
    )
}

export default MainComponent
