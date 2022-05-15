import {useEffect, useState} from 'react'

function useFetch(url, defaultResponse, recipeString){
    const [data, setData] = useState(defaultResponse)
    console.log("data here" + data.Error)
    console.log(`killin me softly ${JSON.parse(localStorage.getItem(recipeString))}`)
    useEffect(()=>{
        // checking if there's data in local storage
        console.log(`killin me softly`)
        const localStorageCheck = localStorage.getItem(recipeString)    
        console.log(`killin me softly ${localStorageCheck}`)
        if (JSON.parse(localStorageCheck)) {
            setData({isLoading: false, data: JSON.parse(localStorageCheck)})
        }else {
            getDataFromApi()        
        }
    }, [])

    async function getDataFromApi(){
        try {
            const api = await fetch(url)
            if(api.status !== 200){
                throw Error
            }
            const apiResponse = await api.json()
            localStorage.setItem(recipeString, JSON.stringify(apiResponse))
            setTimeout(setData({isLoading: false, data: apiResponse}), 10000)
        } catch (error) {
            console.error(`Unfortunately an error occured ${error}`)
        }
    }

    return data

}

export default useFetch
