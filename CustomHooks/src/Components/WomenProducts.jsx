import React from 'react'
import useFetch from '../Hooks/useFetch';

function WomenProducts() {
    // const[products,setProducts] = useState([])
    
    //     useEffect(()=>{
    //         async function fetchData() {
    //             try {
    //                 let res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
    //                 let jsonRes = await res.json();
    //                 setProducts(jsonRes);
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         }
    //         fetchData();
    //     },[])

    const{products} = useFetch("https://fakestoreapi.com/products/category/women's clothing");
  return (
    <div>
        {
            products.map(item=>(
                <div key={item.id}>
                    <img src={item.image} alt="" />
                    <h1>{item.title}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default WomenProducts