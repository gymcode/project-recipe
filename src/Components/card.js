import "./component.css"

function Card(){
    return (
        <div className={"card-style mt-24 rounded-2xl relative shadow-md"} style={{height: "82%", width: "78%"}}>
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
                    <div className="border-t border-gray-300">
                    </div>                
            </div>
        </div>
    )
}

export default Card