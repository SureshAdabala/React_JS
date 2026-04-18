import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{counts:{}},
    reducers :{
        increment:(state,action)=>{
            state.counts[action.payload] = (state.counts[action.payload] || 0)+1
        },
        decrement:(state,action)=>{
            state.counts[action.payload] -= 1
        }

    }
})

export default cartSlice.reducer // Exporting Intital State because used in Store
export const{increment, decrement} = cartSlice.actions