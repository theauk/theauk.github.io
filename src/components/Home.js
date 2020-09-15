import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import owl from "../assets/img/owl.png"

class Home extends Component {
  render() {
    return (
      <div>
        <img class="owl-image" src={owl} alt="owl" />
        <h1>Hi, I am Thea</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>

    );
  }
}

export default Home;