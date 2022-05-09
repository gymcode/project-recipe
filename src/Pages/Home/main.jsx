import {useEffect, useState} from 'react'
import logo from "../../Assets/Images/logo.svg"
import "./main.css"
import JsonQuoteData from "../../helpers/quote.json"
import


function MainComponent(){

    const [quote, setQuote] = useState(JsonQuoteData.quote[0])  
    //prototypes
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)]
     }
    

    useEffect(()=>{
        let count = 0
        setInterval(randomQuote, 100000);       
        function randomQuote(){
            const data = JsonQuoteData.quote
            // ---------------- initial code for getting different data --------------//
            // const length = data.length - 1
            // count++
            // if (count >= length) {
            //     count = 0
            //     setQuote(data[count])
            // }else{
            //     setQuote(data[count])
            // }

            // ----------------- factored code to just get the objects at random -------//
            const randomData = data.sample()
            setQuote(randomData)
        }
    },[quote])

    useEffect(()=>{
        fetch
    }, [])

    return (
        <div className={"main-container grid grid-rows-2 grid-flow-col p-16"}>
            {/* responsiveness  */}
            <div className={"flex flex-row justify-between"}>
                <div>
                    <h3 className={"kreon-font capitalize text-8xl py-4 text-gray-900"}>Simple and <br />tasty recipe</h3>
                    <div className={"py-6 w-2/4 px-5"}>
                        <p className={"dancing-script text-xl pb-3"}><q>{quote.content}</q></p>
                        <p className="pacifico text-xl">~{quote.author}</p>
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