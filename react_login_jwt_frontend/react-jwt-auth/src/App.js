import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import BoardMod from "./components/board-moderator.component";

class App extends Component {
  constructor(props){
    super(props);

    // set logout bindings
    this.logOut = this.logOut.bind(this);

    // initialize current state
    this.state = {
      showMod:false,
      showAdmin:false,
      cUser:undefined,
    };
  }

  // set current user and current state on load
  componentDidMount(){
    const user = AuthService.getCurrentUser();
  
    if(user){
      this.setState({
        cUser:user,
        showMod:user.roles.includes("ROLE_MODERATOR"),
        showAdmin:user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  // logout function
  logOut(){
    AuthService.logout();
    this.setState({
      showMod:false,
      showAdmin:false,
      cUser:undefined,
    });
  }
  
  // render content for app
  render() {
    const { cUser, showMod, showAdmin } = this.state;

    return(
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            FurtTech
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showMod && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Zone
                </Link>
              </li>
            )}

            {showAdmin && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Administration Zone
                </Link>
              </li>
            )}

            {cUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User Zone
                </Link>
              </li>
            )}
          </div>

          { cUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {cUser.user}
                </Link>
              </li>
              <li className="navbar-nav ml-auto">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/mod" element={<BoardMod />} />
              <Route path="/admin" element={<BoardAdmin />} />
            </Routes>
        </div>

      </div>
    );

  }
}

export default App;
