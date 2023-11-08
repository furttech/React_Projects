import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function UseRefPreviousState () {

    const [inVal, setInVal] = useState("");
    const preInput = useRef("");

    useEffect(
        () => {
            preInput.current = inVal;
        },[inVal]
    );

    return (
        <>
            <input 
            type="text" 
            value={inVal}
            onChange={ (e) => setInVal(e.target.value) }
            />
            <h2>Current Value: {inVal}</h2>
            <h2>Previous Value: {preInput.current}</h2>
        </>
    );

}

export default UseRefPreviousState;