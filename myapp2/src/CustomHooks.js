import ReactDOM from "react-dom/client";
import useCustomHooks from "./useCustomHook";
import { keyboard } from "@testing-library/user-event/dist/keyboard";


const CustomHooks = () => {
    const [data] = useCustomHooks("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
         {
            data &&
             data.map(
                (item) => (
                    <p key={item.id}>{item.title}</p>
                )
             )
         }
        </>
    );
};

export default CustomHooks;