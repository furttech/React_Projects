function Logic(props) {
    const opp = props.opp;

    return (
        <>
        <h1>Calculator Operations</h1>
        {opp.length > 0 &&
         <h2>
          You have requested {opp.length} operations.
         </h2> 
        }
        <h2>The Answer is : {question(opp)}</h2>
        </>       
    );

}

function question(props){
        
  return <> { (props.length>0) ? choice_1() : choice_2()} </>;

}

function choice_1 (){

    return <>"true"</>;

}

function choice_2 (){

    return <>"false"</>;

}

export default Logic