import React from "react";

import { NavLink } from "react-router-dom";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Nav2 () {

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/landing">
             <h2>Home</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
   
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/preferences">
                  Preferences
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}