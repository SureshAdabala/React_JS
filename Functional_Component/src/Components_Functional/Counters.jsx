import { Component, useState } from "react";

function Counters() {
    const[count,setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+5)}>+</button>
        </div>
    )
}

export default Counters;