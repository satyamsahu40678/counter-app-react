import './Counter.css'
import { useState } from 'react'
import CounterButton from './CounterButton'

export default function Counter() {
    const [count, setCount] = useState(0);

    function increamentCounterParentFunction(by) {
        setCount(count + by);
    }
    function decrementCounterParentFunction(by) {
        setCount(count - by);
    }

    function reset(){
        setCount(0);
    }


    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} increamentMethod={increamentCounterParentFunction} decrementMethod={decrementCounterParentFunction} />
            <CounterButton by={2} increamentMethod={increamentCounterParentFunction} decrementMethod={decrementCounterParentFunction} />
            <CounterButton by={5} increamentMethod={increamentCounterParentFunction} decrementMethod={decrementCounterParentFunction} />

            <button className="counterButton" style={{backgroundColor:"black", width:"150px", fontSize:"30px", marginBottom:"5px"}} onClick={reset}>Reset</button>
        </>
    )
}