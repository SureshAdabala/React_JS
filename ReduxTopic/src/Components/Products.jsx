import React from 'react'
import { data } from '../Data/Data'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Slice/CartSlice';

function Products() {

   const state =  useSelector(state=>state.cart.counts)

   const dispatch = useDispatch()

  return (
    <div>
        {
            data.map(item=>{
                const count = state[item.id] || 0
                return (
                    <div key= {item.id}>
                        <h1>{item.name}</h1>
                        <button onClick={()=>dispatch(increment(item.id))}> ADD</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products