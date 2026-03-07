import { useState } from "react";

function Counter() {

    const[count, setCount] = useState(0)

    const onIncrementBtn = ()=> {
        setCount(count+5);
    }

    const onDecerementBtn = () => {
        setCount(count-5);
    }

    return(
        <div>
            <h1>
                Counter
            </h1>
            <h1>{count}</h1>

            <button onClick={onIncrementBtn}>Increment</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={onDecerementBtn}>Decrement</button>
        </div>
    )
}
export default Counter;