import { useState } from "react";

function Textarea () {

    const [textElement, setElement] = useState (
        "Here is the text area contents!!"
    );

    const handleChange = (event) => {
        setElement(event.target.value)
    }

    return (
        <form>
            <textarea value={textElement} onChange={handleChange} />
        </form>
        
    )

}

export default Textarea;