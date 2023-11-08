import { useState } from "react";

function Selectionbox () {

    const [mySelection, setSelection] = useState("Waffle");

    const changeHandler = (event) => {
        setSelection(event.target.value)
    }

    return (
        <form>
            <select value={mySelection} onChange={changeHandler}>
                <option value="Pancake">PanCakes</option>
                <option value="Waffle">Waffles</option>
                <option value="Bacon">Bacon</option>
                <option value="Egg">Eggs</option>
            </select>
        </form>
    )
}

export default Selectionbox;