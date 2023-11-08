import { useEffect, useState } from "react";
import Todos from "./Todos";

const Memo = () => {

    const [count, setCount] = useState(0);
    const [calc, setCalc] = useState(0);
    const [todos, setTodos] = useState(["todo 1","todo 2"]);
   

    const increment = () => {
        setCount((c) => c+1 ) ;
    };

    const reset = () => {
        setCount((c) => 0);
    };

    useEffect(
        () => {
            setCalc(()=>count*2);
        },[count]
    );

    return (
        <>
            <Todos todos={todos} />
            <hr />
            <div>
                <p>Count: {count}</p>
                <p>Calculation: {calc}</p>
                <hr />
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>

            </div>
        </>
    );

};



export default Memo;