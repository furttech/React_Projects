import React from 'react';

class Boat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {engineType: "outboard",show:true};
    }

/* 
    motorChange = () =>{
        this.setState({engineType: "outboard"})
    }

    newMotor = () =>{
        this.setState({engineType: "inboard"})
    }

    shouldComponentUpdate() {
        return true;
    }

    // set the state from prop
    static getDerivedStateFromProps(props, state) {
        return {engineType: props.engine};
    }

    // executes a timed function after component mounted
    componentDidMount() {
        setTimeout(() => {
            this.motorChange();
        },3000)
    }

    // executes DOM element after an update occurs
    componentDidUpdate() {
        document.getElementById("d1").innerHTML = "Post Update"
    }
*/

    delElement = () => {
        this.setState({show:false});
    }

    render() {
        let element;
        if (this.state.show) {
            element = <Child />;
        };
        return (
            <>
            {element}
            <h1>This Boat uses an {this.state.engineType}</h1>
            <button type='button' onClick={this.delElement}>Delete Element</button>
            </>
        );
    }

}

class Child extends React.Component {
    componentWillUnmount() {
        alert("A component will be Unmounted!");
    }
    render(){
        return (
            <h1>Only Failure Comes from Hope...</h1>
        );
    }
}

export default Boat;