import "./component.css"
import {ReactComponent as Checker} from "../Assets/Images/checkmark-circle-outline.svg"

function Card({modal, title, calories}){
    return (
        <div className={"card-style mt-24 rounded-2xl relative shadow-md"} style={{height: "78%", width: "78%"}}>
            <div className={"absolute left-24 -top-24 bg-green-400 h-44 w-44 rounded-full"}>
                
            </div>
            <div className={"grid grid-rows-5 p-6 h-full"}>
                    <div className="row-span-4 mt-24">
                        <div className="flex justify-center ">
                            <h2 className="text-2xl capitalize">{title}</h2>
                        </div>
                        <div className="text-gray-600 text-lg mt-5 flex justify-center">
                            <p>60 calories</p>
                        </div>
                    </div>                
                    <div className="border-t border-gray-300 pt-2 flex justify-between items-center">
                        <div>
                            <div className="flex">
                                Vegan
                                <div>
                                    <Checker height={"0.8rem"} color="yellow"/>
                                </div>
                            </div>
                            <div className="flex">
                                Gluten
                                <div>
                                    <Checker height={"0.8rem"}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-10 w-32 flex justify-center items-center rounded-tl-lg rounded-br-lg" style={{background: "#F96107"}}>
                                view
                            </div>
                        </div>
                    </div>                
            </div>
        </div>
    )
}

export default Card