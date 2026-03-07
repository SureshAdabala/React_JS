import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function SinglePage() {
    const{id} = useParams()
    const[data,setData] = useState({})

    useEffect(()=>{
        async function getSingleProduct(){
            try{
                let res = await fetch(`https://fakestoreapi.com/products/${id}`)
                let jsonres = await res.json();
                setData(jsonres)
            }catch(error){
                console.log(error)
            }
        }
        getSingleProduct()
    },[])
  return (
    <div>
        <h1>{data.title}</h1>
        <img src={data.image}/>
    </div>
  )
}

export default SinglePage