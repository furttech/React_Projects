import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function ContextHooks(){

   const [user, setUser] = useState("Furt_Tech");

    return (
        <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <AvoidDrill user={user} />
        </UserContext.Provider>
    );

}

function AvoidDrill (){

    const user = useContext(UserContext);

    return (
        <h1>The {`[${user}]`} is still in scope! </h1>
    );

}

export default ContextHooks;