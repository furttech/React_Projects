import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import CallBacks from "./CallBacks";

const UseCallBackHooks = () => {

    const [count, setCount] = useState(0);
    const [callback, setCallBack] = useState([]);

    const incr = () => {
        setCount( (c) => c+1 );
    };

    const addCall = useCallback(() => {
        setCallBack( (t) => [...t, "New Callback 9000"]);
    }, [callback]);

    return (
        <>
            <CallBacks calls={callback} addCalls={addCall} />
            <hr />
            <div>
                Count: {count}
                <button onClick={incr}>Increase</button>
            </div>
        </>
    );
};

export default UseCallBackHooks;