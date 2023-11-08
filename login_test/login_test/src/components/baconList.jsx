import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BaconTable = (props) => (
    <tr>
        <td>{props.bacon.name}</td>
        <td>{props.bacon.cut}</td>
        <td>{props.bacon.cost}</td>
        <td>{props.bacon.weight}</td>
        <td>
            <Link className="btn btn-link" to={`/edit/${props.bacon._id}`}>Edit</Link>
            <button className="btn btn-link" 
            onClick={()=> {
                props.deleteBacon(props.bacon._id);
            }}> Delete </button>
        </td>
    </tr>
);

export default function BaconList(){
    const [storage, setStorage] = useState([]);

    useEffect(() => {
        
        async function fetchBaconList(){
            const fetchResponse = await fetch(`http://localhost:5050/paths/`);
            
            if(!fetchResponse.ok) {
                const message = `Fetch Error: ${fetchResponse.statusText}`;
                window.alert(message);
                return;
            }

            const jsonResponse = await fetchResponse.json();
            setStorage(jsonResponse);
            
        }
       
        fetchBaconList();

        return;
    },[storage.length]);

    // delete bacon record
    async function deleteBacon(id){
        await fetch(`http://localhost:5050/paths/${id}`, {
            method : "DELETE"
        });

        const filtered = storage.filter((el) => el._id !== id);
        setStorage(filtered);
    }

    function baconList(){
        return storage.map( (bacon) => {
            return(
                <BaconTable 
                    bacon={bacon}
                    deleteBacon={() => deleteBacon(bacon._id)}
                    key={bacon._id}                
                />
            );
        });
    }   

    return(
        <div>
            <h3>Bacon List:</h3>
            <table className="table table-striped" style={{ marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cut</th>
                        <th>Cost</th>
                        <th>Weight</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>{baconList()}</tbody>
            </table>
        </div>
    );

};







