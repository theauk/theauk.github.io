import React, { Component } from "react";
import owl from "../assets/img/owl.png"

class Home extends Component {
  render() {
    return (
      <div className="section-home">
        <div id="home">
          <img className="owl-image" src={owl} alt="owl" />
          <div className="home-text">
            <h1>Hi, I am Thea</h1>
            <p>student · code nerd · hiker · traveller</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;