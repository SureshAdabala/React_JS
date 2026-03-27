import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {

    const [products, setProducts] = useState([])
    const [value, setValue] = useState("")

    useEffect(() => {
        async function getAll() {
            try {
                let res = await fetch(`https://fakestoreapi.com/products/`);
                let jsonRes = await res.json();
                setProducts(jsonRes);
            } catch (error) {
                console.log(error)
            }
        }
        getAll();
    },[])

    const handleBtn = async (event) => {
        try {
            if (event.target.textContent == "All") {
                let res = await fetch(`https://fakestoreapi.com/products/`);
                let jsonRes = await res.json();
                setProducts(jsonRes)
            }
            else {
                let res2 = await fetch(`https://fakestoreapi.com/products/category/${event.target.textContent}`);
                let jsonRes2 = await res2.json();
                setProducts(jsonRes2)
            }
        } catch (error) {
            console.log(error)
        }
    }

    let filterData = products.filter(item => {
        return item.title.includes(value)
    })
    console.log(filterData);

    return (
        <>
            <div>
                <button onClick={handleBtn}>All</button>
                <button onClick={handleBtn}>men's clothing</button>
                <button onClick={handleBtn}>women's clothing</button>
                <button onClick={handleBtn}>electronics</button>
                <button onClick={handleBtn}>jewelery</button>

                <input type="search" onChange={(event) => setValue(event.target.value)} />
            </div>

            <div>
                {
                    filterData.length == 0 ? (
                        <h2>No Product Found</h2>
                    ) : (
                        filterData.map(item => (
                            <Link to={`products/${item.id}`} key={item.id}>
                                <div>
                                    <img src={item.image} width="200" />
                                    <h1>{item.title}</h1>
                                </div>
                            </Link>
                        ))
                    )
                }
            </div>
        </>

    )
}

export default Products