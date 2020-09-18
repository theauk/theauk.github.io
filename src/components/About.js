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
              <p className="about-text">I enjoy building solutions that can efficiently help people and businesses achieve their goals.
              My international experience from the US, South Korea, and Denmark has given me an understanding of how to communicate across cultures and backgrounds.
             During my work, I always strive to expose myself to new problems and knowledge. </p>
              <h3>Skills</h3>
              <p>Intermediate: HTML · CSS · JavaScript · Python</p>
              <p>Beginner: Java · React</p>
              <p>Tools: Google Analytics · Google Tag Manager · Facebook Pixel · Google Data Studio</p>
            </div>
            <img className="profile-image" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;