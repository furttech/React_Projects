import { useState } from "react";
import  ReactDOM from 'react-dom/client';

function Inputform (){
    const [inputValues, setName] = useState({});

    const actionChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setName(val => ({...val, [name]: value}))
    }

    const userSubmit = (event) => {
        event.preventDefault();
        console.log(inputValues);
    }

    return (
        <div >
        <form onSubmit={userSubmit}>
            <label> Enter A Name:
                <input 
                    type="text"
                    name="usrname"
                    value={inputValues.usrname || ""}
                    onChange={actionChange}    
                />
            </label>
            <label> Enter An Age:
                <input
                    type="number"
                    name="age"
                    value={inputValues.age || ""}
                    onChange={actionChange}
                />
            </label>
            <input type="submit" />
        </form>
        </div>
    )
}

export default Inputform;