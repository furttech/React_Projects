import { Component } from "react";
import React from "react";
import userService from "../services/user.service";

class BoardAdmin extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: ""
        }
    }

    componentDidMount(){
        userService.getAdminContent()
        .then((res)=>{
            this.setState({content:res.data});
        })
        .catch((err)=>{
            this.setState({
                content:
                ( err.response && err.response.data && err.response.data.message ) ||
                err.message ||
                err.toString(),
            });
        })
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

export default BoardAdmin;