function Select (val){

    return <li>You have Selected {val.select}</li>;

}

function Mapping (props) {

    return (
        <>
            <h1>Whats in the list?</h1>
            <ul>
                {
                    props.maplist.map(
                        (list) => <Select select={list} />
                    )
                }
            </ul>
        </>
    );

} 

export default Mapping;