import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

function Home() {
    const[data,setData] = useState([]);
    useEffect(()=>{
        async function getAllProducts() {
            try{
                let res = await fetch("https://fakestoreapi.com/products");
                let jsonres = await res.json();
                setData(jsonres);
            } catch(error) {
                console.log(error);
            }
        }
        getAllProducts()
    },[])
    return(
    <div>
        {
            data.map(item=>(
                <Link to={`/products/${item.id}`}>
                <img src={item.image}/>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                </Link>
            ))
        }
    </div>
    )
}
export default Home;