import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

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
        const cUser = AuthService.getCurrentUser();

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

        const { cUser } = this.state;

        return (
            <div className="container">
                {
                    (this.state.userReady) ? 
                        <div>
                         <header className="jumbotron">
                          <h3>
                           <strong>{cUser.username}</strong>  
                           Profile 
                          </h3>                                                      
                         </header>
                         <p>
                          <strong>Token:</strong>{" "}
                            {cUser.accessToken.substring(0, 20)} ...{" "}
                            {cUser.accessToken.substring(cUser.accessToken.length - 20)}
                         </p>
                         <p>
                          <strong>ID:</strong>{" "}
                           {cUser.id}
                         </p>
                         <p>
                          <strong>Email:</strong>{" "}
                           {cUser.email}
                         </p>
                         <strong>Authorities:</strong>
                         <ul>
                            {
                                cUser.roles &&
                                cUser.roles.map( (role, index) => <li key={index}>{role}</li> )
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