import React, { Component } from "react";
import owl from "../assets/img/owl.png"
 
class Home extends Component {
  render() {
    return (
      <div className="section_home">
        <div className="section-content" id="home">
          <img class="owl-image" src={owl} alt="owl" />
          <h1>Hi, I am Thea</h1>
          <p>Description</p>
        </div>
      </div>
    );
  }
}
 
export default Home;