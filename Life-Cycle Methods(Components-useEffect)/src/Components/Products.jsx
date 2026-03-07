import React, { useEffect } from "react";
import { useState } from "react";

function Products() {
    const[products,setProducts] = useState([])
    console.log(products)
    useEffect(()=>{
        async function getAllProducts() {
            try{
                let res = await fetch("https://fakestoreapi.com/products",{
                    method:"GET"
                })
                let jsonres = await res.json();
                setProducts(jsonres);
            } catch(error) {
                console.log(error);
            }
        }
        getAllProducts();
    },[])
    return(
        <div>
            {
                products.map(item=>(
                    <div key={item.id}>   
                        <img src={item.image}/>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <h2>price: {item.price}rs</h2>
                        <h2>rating: {item.rating.rate}</h2>
                    </div>
                ))
            }
        </div>
    )
}
export default Products;