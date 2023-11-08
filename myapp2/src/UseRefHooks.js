import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function UseRefHooks () {

    const [inputVal, setInputVal] = useState("");
    const count = useRef(0);

    useEffect(
        () => {
            count.current = count.current + 1;
        }
    );

    return (
        <>
            <input
                type="text"
                value={inputVal}
                onChange={
                    (e) => setInputVal(e.target.value)
                }
            />
            <h1>Page Render Count: {count.current}</h1>
        </>
    );

}

export default UseRefHooks;