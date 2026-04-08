import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const[data,setData] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        async function getSingleData() {
            try {
                let res = await fetch(`http://localhost:3002/products/${id}`);
                let jsonRes = await res.json();
                setData(jsonRes)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleData();
    },[])
  return (
    <div>
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </div>
  )
}

export default SingleProduct