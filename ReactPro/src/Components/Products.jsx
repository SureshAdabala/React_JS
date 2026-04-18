import React, { useEffect, useState } from 'react'

function Products() {

    const[data,setData] = useState([])

    useEffect(()=>{
        async function getProducts() {
            try {
                let res = await fetch(`http://localhost:3002/products`);
                let jsonRes = await res.json();
                setData(jsonRes);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[])

  return (
    <div>
        {
            data.map((item)=>(
                <div key={item.id}>
                        <h1>{item.name}</h1>
                        <img src={item.image} alt="" />
                        <p>{item.description}</p>
                        <h2>{item.price}</h2>
                    </div>
            ))
        }
    </div>
  )
}

export default Products;