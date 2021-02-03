import React, { Component } from "react";
import profile from "../assets/img/circle-cropped.png"

class About extends Component {
  render() {
    return (
      <div className="section" id="outer-about">
        <div className="section-content" id="about">
          <h1>About Me</h1>
          <div className="about-grid">
            <div class="about-text-skills">
              <p className="about-text">I enjoy building solutions that help people and organizations reach their goals. 
                Currently, I am an undergraduate student at the IT University of Copenhagen, where I study software development. Before ITU, I studied at Minerva Schools at KGI in the US and South Korea. 
                <br></br>
                <br></br>
                Technically, I am proficient in Java, Python, HTML, CSS, and React. My international experience from the US, South Korea, and Denmark has given me an understanding of how to communicate across cultures and backgrounds.
                During my work, I always strive to expose myself to new problems and knowledge. </p>
            </div>
            <img className="profile-image" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;