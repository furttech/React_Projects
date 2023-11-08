function Car() {

    return <h2>This is a class Component</h2>  
}
  
function Car2(props) {

    // this example shows using a class component inside a function component 
    return (
    <>
        
        {/* This is a class component call*/}
        <Car />

        {/* here the prop value is used by the function component*/}
        <h1>This is a {props.color} function Component</h1>
        
    </>

    );

}

export default Car2;