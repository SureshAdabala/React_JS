import React, { useReducer } from 'react'

function reducer(state,action) {
    switch(action.type) {
        case "LOGIN" :
            return {page: "Login"}
        case "LOGOUT" :
            return {page: "Logout"}
        default :
            return state;
    }
}

function InOut() {
    const[state,dispatch] = useReducer(reducer,{page :"Login"})

  return (
    <>
    <h1>Welcome to {state.page}Page</h1>
    <button onClick={()=>dispatch({type:"LOGIN"})}>Login</button>
    <button onClick={()=>dispatch({type:"LOGOUT"})}>LogOut</button>
    </>
  )
}

export default InOut