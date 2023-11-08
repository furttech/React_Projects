function Select (val){

    return <li>You have Selected {val.keyvalue}</li>;

}

function Keymaps (props) {

    return (
        <>
            <h1>What have we Key-Mapped?</h1>

            {
                props.keylist.map(
                   (list) => <Select key={list.id} keyvalue={list.phrase} />
                )
            }
        
        </>
    );

}

export default Keymaps;