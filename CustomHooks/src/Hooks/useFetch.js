import React, { useEffect, useState } from 'react'

function useFetch(url) {

    const[products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchData() {
            try {
                let res = await fetch(url);
                let jsonRes = await res.json();
                setProducts(jsonRes);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    return {products};
}

export default useFetch