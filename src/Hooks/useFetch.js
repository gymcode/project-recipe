import {useEffect, useState} from 'react'

function useFetch(url, defaultResponse, recipeString){
    const [data, setData] = useState(defaultResponse)

    useEffect(()=>{
        // checking if there's data in local storage
        const localStorageCheck = localStorage.getItem(recipeString)
        if (localStorageCheck) {
            setData({isLoading: false, data: JSON.parse(localStorageCheck)})
        }else {
            getDataFromApi()        
        }
    }, [url])

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
