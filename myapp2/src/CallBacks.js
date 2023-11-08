import { memo } from "react";

const CallBacks = ({calls , addCalls}) => {
    console.log("Call Back hit!");
    return (
        <>
            <h2>My Callbacks</h2>
            {
                calls.map(
                    (val, index) => {
                        return <p key={index}>{val}</p>;
                    }
                )
            }
            <button onClick={addCalls}>Add Call-Back</button>
        </>
    );
};

export default memo(CallBacks);