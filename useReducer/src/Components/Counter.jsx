import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case "INCREMENT" :
            return {count:state.count+1}
        case "RESET" :
            return {count:0}
        case "DECREMENT" :
            return {count:state.count-1}
        default :
            return state
    }
}

function Counter() {

    const[state,dispatch] = useReducer(reducer,{count:0})

  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </>
  )
}

export default Counter