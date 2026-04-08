import React, { useMemo, useState } from 'react'

function Counter() {

    const[count, setCount] = useState(0);

    function Sum() {
        console.log("Sum Function Called");

        let s = 0;
        for(let i=0;i<=10000;i++) {
            s+=i;
        }
        return s;
    }

    let result = useMemo(()=>{
        return Sum();
    },[])
  return (
    <div>
        <h1>Sum of Numbers : {result}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter