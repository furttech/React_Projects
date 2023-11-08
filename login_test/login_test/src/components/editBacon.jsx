import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditBacon(){

    // declare stateful object for storing form data
    const [form, setForm] = useState({
        name:"",
        cut:"",
        cost:"",
        weight:"",
    });

    const nav = useNavigate();
    const urlParams = useParams();

    function updateForm(value){
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

    async function onSubmit(e){
        e.preventDefault();

        const newSet = { 
            name:form.name,
            cut:form.cut,
            cost:form.cost,
            weight:form.weight,
         };

        await fetch(`http://localhost:5050/paths/${urlParams.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSet),
        }).catch( error => {
            window.alert(error);
            return;
        });

        nav("/");
    }

    useEffect(() => {

        async function fetchData(){
            const id = urlParams.id.toString();
            const response = await fetch(`http://localhost:5050/paths/${urlParams.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }           

            const record = await response.json();
            if (!record){
                const message = `No record with id: ${id}`;
                window.alert(message);
                nav("/");
                return;
            }
            console.log(record);
            setForm(record);
        }

        fetchData();

        return;

    },[urlParams.id,nav]);

    return(
        <div>
            <h3>Edit Bacon Selection</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="cutOptions"
                            id="cutThin"
                            value="Thin"
                            checked={form.cut === "Thin"}
                            onChange={(e) => updateForm({ cut: e.target.value })}
                        />
                        <label htmlFor="cutThin" className="form-check-label">Thin Cut</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="cutOptions"
                            id="cutThick"
                            value="Thick"
                            checked={form.cut === "Thick"}
                            onChange={(e) => updateForm({ cut: e.target.value })}
                        />
                        <label htmlFor="cutThick" className="form-check-label">Thick Cut</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="cutOptions"
                            id="cutMaple"
                            value="Maple Smoked"
                            checked={form.cut === "Maple Smoked"}
                            onChange={(e) => updateForm({ cut: e.target.value })}
                        />
                        <label htmlFor="cutMaple" className="form-check-label">Maple Cut</label>

                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="cutOptions"
                            id="cutButcher"
                            value="Butcher"
                            checked={form.cut === "Butcher"}
                            onChange={(e) => updateForm({ cut: e.target.value })}
                        />
                        <label htmlFor="cutButcher" className="form-check-label">Butcher Cut</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Cost</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="cost"
                        value={form.cost}
                        onChange={(e) => updateForm({ cost: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Weight</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="weight"
                        value={form.weight}
                        onChange={(e) => updateForm({ weight: e.target.value })}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Bacon Entry"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}