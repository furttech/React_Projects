import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const expCalc = (num) => {
    console.log("expCalc Running....");
    for(let i=0; i<1000000; i++){
        num+=1;
    }
    return num;
};

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    const expCal = useMemo( () => expCalc(count),[count]);

    const incr = () => {
        setCount( (c) => c+1 );
    };

    const addList = () => {
        setList( (s) => [...s, "New List Item "+{count}] );
    };    

    return (
        <>
            <div>
                <h2>My Memo List:</h2>
                {
                    list.map(
                        (l,index) => {
                            return <p key={index}>{l}</p>
                        }
                    )
                }
                <button onClick={addList}>Add List Item</button>
            </div>
            <hr />
            <div>
                Count : {count}
                <button onClick={incr}>Increase Count</button>
                <h2>Expensive Function:</h2>
                {expCal}
            </div>
        </>
    );
};

export default UseMemo;