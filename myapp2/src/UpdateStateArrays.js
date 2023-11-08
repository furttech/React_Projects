import { useState } from "react";
import ReactDOM from "react-dom/client";

function UpdateStateArrays () {

    const [arr, setArr] = useState({
        a:"1",
        b:"11",
        c:"101",
        d:"0101"
    });

    const updateArray = () => {
        setArr( (preState) => {
            return { ...preState, b:"00"}
        });
    }

    return (
        <>
        <h1>The A is {arr.a}</h1>
        <p>
            Then we have B : {arr.b} and C: {arr.c} !!
        </p>
        <button 
            type="button"
            onClick={updateArray}
        >B - Zero Out!</button>
        </>
    )
}


export default UpdateStateArrays;