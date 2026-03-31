import React, { useReducer } from 'react'

function reducer(state,action) {

    switch(action.type) {
        case "LIGHT" :
            return {color:"white", text:"black"}
        case "DARK" :
            return {color:"black", text:"white"}
        default :
            return state
    }
}


function Themes() {
    const[state,dispatch] = useReducer(reducer,{color:"black", text:"white"})
  return (
    <div style={{backgroundColor : state.color, color: state.text}}>
        <h1>Mode : {state.color}</h1>
        <button onClick={()=>dispatch({type:"LIGHT"})}>Light Mode</button>
        <button onClick={()=>dispatch({type:"DARK"})}>Dark Mode</button>
    </div>
  )
}

export default Themes