import {useEffect, useState} from 'react'
import logo from "../../Assets/Images/logo.svg"
import "./main.css"
import {Link} from "react-router-dom"
import JsonQuoteData from "../../helpers/quote.json"
import SampleData from "../../helpers/sampleData.json"
import {RANDOM_RECIPES} from "../../services/endpoints"
import {useFetch} from "../../Hooks"
import Card from "../../Components/card"
import Lottie from "react-lottie"
import * as animationData from "../../Assets/lottie/lf30_editor_chrsdjer.json"
import * as loadingData from "../../Assets/lottie/lf30_editor_xad43im4.json"

function MainComponent(){

    const [quote, setQuote] = useState(JsonQuoteData.quote[0])
    const dataResponse = useFetch(RANDOM_RECIPES, {isLoading: true, data: null}, "recipe")
    console.log(dataResponse)
    //prototypes
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)]
     }

    useEffect(()=>{
        setInterval(randomQuote, 36000000);       
        function randomQuote(){
            const data = JsonQuoteData.quote
            // ----------------- factored code to just get the objects at random -------//
            const randomData = data.sample()
            setQuote(randomData)
        }

    },[quote])

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
    }

    const defaultLoadingOptions = {
        loop: true,
        autoplay: true, 
        animationData: loadingData,
    }
    return (
        <div className={"main-container grid grid-rows-2 grid-flow-col p-20"}>
            {/* responsiveness  */}
            <div className={"flex flex-row justify-between"}>
                <div>
                    <h3 className={"kreon-font capitalize text-8xl text-white"}>Simple and <br />tasty recipe</h3>
                    <div className={"py-5 w-2/4 px-5"}>
                        <p className={"dancing-script text-xl text-white pb-3"}><q>{quote.content}</q></p>
                        <p className="pacifico text-xl text-white">~{quote.author}</p>
                    </div>
                </div>
                <div>
                {/* Good food, good mood. */}
                    <img src={logo} className={"h-32 w-32"} alt="" />
                </div>
            </div>
            <div className={"kreon-font -mt-8"}>
                <h4 className="capitalize text-xl text-white">Top Trends ....</h4>
                <div className={"grid grid-cols-6 gap-8 py-6 px-5 h-full flex justify-center"}>
                    {/* random recipes iterations  */}
                    <div className={"col-span-5 grid grid-cols-3"}>
                        {
                            dataResponse.isLoading ? 
                            <>
                               <Lottie
                                    options={defaultLoadingOptions}
                               /> 
                            </>
                            :
                            dataResponse.data.recipes.map((data)=>{
                                return (
                                    <Card
                                        title={data.title}
                                        image={data.image}
                                        score={data.healthScore}
                                        vegan={data.vegan}
                                        gluten={data.glutenFree}
                                    />
                                )
                            })
                        }
                    </div>
                    {/* arrow navigation for next page */}
                    <Link to="/healthy">
                        <div className={"lottie"}>
                            <Lottie                    
                                options={defaultOptions}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainComponent