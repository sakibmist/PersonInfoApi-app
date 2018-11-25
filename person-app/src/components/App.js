import React, { Component } from "react";
//import logo from './logo.svg';
import { Route, NavLink } from 'react-router-dom';
import "./App.css";
import AddPersonInfoPage from './AddPersonInfoPage';
import DetailsPage from "./DetailsPage";
import PersonIndexPage from "./PersonIndexPage";

 


class App extends Component {
  render() {
    return (
      <div className="offset-1 col-sm-10">
        <div className="container">
          <div className="card border">
            <div className="card-header border">
              <h1 className="text-center"> Simple Header </h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-blue">
              <NavLink className="nav-link" to="/details">Brand</NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active navSpace">
                    <NavLink className="nav-link" to="/app">Home</NavLink>

                  </li>
                  <li className="nav-item navSpace">
                    <NavLink className="nav-link" to="/add-person">Add Person Info.</NavLink>
                  </li>
                  <li className="nav-item dropdown navSpace">
                    <a
                      className="nav-link dropdown-toggle"
                      href="sd"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="d">
                        Action
                  </a>
                      <a className="dropdown-item" href="d">
                        Another action
                  </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="sd">
                        Something else here
                  </a>
                    </div>
                  </li>
                  <li className="nav-item navSpace">
                    <a className="nav-link disabled" href="df">
                      Disabled
                </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="minHeight">
            <Route path="/add-person" component={AddPersonInfoPage} />
            <Route path="/peoples" component={PersonIndexPage} />  
            <Route path="/details" component={DetailsPage} />  
            </div>
           
            <div className="card-footer border">
              <h6 className="text-center">
                All rights are reserved by the authority.
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
