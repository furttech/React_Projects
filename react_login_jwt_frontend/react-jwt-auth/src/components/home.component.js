import { Component } from "react";
import React from "react";
import UserService from "../services/user.service";

class Home extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            content:""
        };
    }
    componentDidMount(){
        UserService.getPublicContent()
        .then((response) =>{
            this.setState({
                content:response.data
            });
        })
        .catch((err) =>{
            this.setState({
                content:
                ( err.response && err.response.data && err.response.data.message ) ||
                err.message ||
                err.toString(),
            });
        });
    }

    render(){
        return(
            <div className="container">
             <div className="jumbotron">
                <i className="fas fa-h3">{this.state.content}</i>
             </div>
            </div>
        );
    }
}

export default Home;