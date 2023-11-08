import React, {useState} from "react";
import { useNavigate } from "react-router";

export default function CreateBacon (){

    const [form, setForm] = useState({
        name:"",
        cut:"",
        cost:"",
        weight:"",
    });

    const nav = useNavigate();

    function updateForm(value){
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

    async function onSubmit(e){
        e.preventDefault();

        const newSet = { ...form };

        await fetch("http://localhost:5050/paths", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSet),
        }).catch( error => {
            window.alert(error);
            return;
        });

        setForm({
            name:"",
            cut:"",
            cost:"",
            weight:""
        });

        nav("/");
    }

    return(
        <div>
            <h3>Add Bacon Selection</h3>
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
                <div className="form-group">
                    <input
                        type="submit"
                        value="Add Bacon Entry"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}