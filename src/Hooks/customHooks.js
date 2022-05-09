import {useEffect, useState} from 'react'

function useFetch(BaseUrl){
    const [data, setData] = useState()

    function fetchData(){
        fetch(BaseUrl)
        .then((res)=>{
            if (res.ok) {
                return res.json()
            }
            throw res
        })
        .then()
    }

    return data
}
