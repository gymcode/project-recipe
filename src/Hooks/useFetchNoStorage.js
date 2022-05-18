import {useEffect, useState} from 'react'

function useFetchNoStorage(url, defaultResponse){
    const [data, setData] = useState(defaultResponse)
    useEffect(()=>{
        getDataFromApi()       
    }, [])

    async function getDataFromApi(){
        try {
            const api = await fetch(url)
            if(api.status !== 200){
                throw Error
            }
            const apiResponse = await api.json()
            setTimeout(setData({isLoading: false, data: apiResponse}), 10000)
        } catch (error) {
            console.error(`Unfortunately an error occured ${error}`)
        }
    }

    return data

}

export default useFetchNoStorage
