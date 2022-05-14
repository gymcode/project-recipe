import "./component.css"

function Card(){
    return (
        <div className={"card-style mt-24 rounded-2xl relative shadow-md"} style={{height: "78%", width: "78%"}}>
            <div className={"absolute left-24 -top-24 bg-green-400 h-44 w-44 rounded-full"}>
                
            </div>
            <div className={"grid grid-rows-5 p-6 h-full"}>
                    <div className="row-span-4 mt-24">
                        <div className="flex justify-center ">
                            <h2 className="text-2xl capitalize">Fresh and Healthy Salad</h2>
                        </div>
                        <div className="text-gray-600 text-lg mt-5 flex justify-center">
                            <p>60 calories</p>
                        </div>
                    </div>                
                    <div className="border-t border-gray-300 pt-2 flex justify-between items-center">
                        <div>
                            <div>vegan</div>
                            <div>two</div>
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