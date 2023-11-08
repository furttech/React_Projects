import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialValues = [
    {
        id: 0,
        title: "Item 1",
        status: false,
    },
    {
        id: 1,
        title: "Item 2",
        status: true,
    },
    {
        id: 2,
        title: "Item 3",
        status: true,
    }

];

const reducer = (state , action) => {
    switch (action.type) {
        case "STATUS":
            return state.map(
                (value) => {
                    if (value.id === action.id){
                        return {...value, status: !value.status};
                    } else {
                        return value;
                    }
                }
            );
        default:
            return state;
    }
};


function UseReducerHooks () {
    
    const [ values , valueManager ] = useReducer(reducer , initialValues);

    const manageCompletedTasks = (val) => {
        valueManager({ type: "STATUS", id: val.id });
    };

    return (
        <>
        {
            values.map(
                (val) => (
                    <div key={val.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={val.status}
                                onChange={() => manageCompletedTasks(val)}
                            />
                            {val.title}
                        </label>
                    </div>
                )
            )
        }
       </>
    );
};

export default UseReducerHooks;