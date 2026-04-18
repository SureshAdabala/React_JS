import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '..Slice/cartSlice';

export const store = configureStore({  // In store Updates the Values 
    reducer:{
        cart : cartReducer // In cartReducer have a Intial Values
    }
})