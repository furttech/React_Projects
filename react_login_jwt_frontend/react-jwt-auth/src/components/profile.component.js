import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../services/auth.service";


class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect:null,
            userReady:false,
            currentUser:{ username: ""}
        };
    }
    
    componentDidMount(){
        const cUser = Auth.getCurrentUser();

        if(!cUser){
            this.setState({
                redirect:"/home"
            });
        }
        this.setState({
            currentUser: cUser, 
            userReady:true
        })
    }

    render(){
        if(this.state.redirect){
            return <Navigate to={this.state.redirect} />
        }

        const { currentUser } = this.state;

        return (
            <div className="container">
                {
                    (this.state.userReady) ? 
                        <div>
                         <header className="jumbotron">
                          <h3>
                           <strong>{currentUser.username}</strong>  
                           Profile 
                          </h3>                                                      
                         </header>
                         <p>
                          <strong>Token:</strong>{" "}
                            {currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substring(currentUser.accessToken.length - 20)}
                         </p>
                         <p>
                          <strong>ID:</strong>{" "}
                           {currentUser.id}
                         </p>
                         <p>
                          <strong>Email:</strong>{" "}
                           {currentUser.email}
                         </p>
                         <strong>Authorities:</strong>
                         <ul>
                            {
                                currentUser.roles &&
                                currentUser.roles.map( (role, index) => <li key={index}>{role}</li> )
                            }
                         </ul>
                        </div>
                    : null
                }
            </div>
        );
    }    
}

export default Profile;