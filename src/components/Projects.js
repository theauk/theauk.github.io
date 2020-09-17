import React, { Component } from "react";
import ProjectTile from "./ProjectsTile";
import picture from "../assets/img/nail-gilfanov-TuyneoFacJg-unsplash.jpg"

class Projects extends Component {
  render() {
    return (
      <div className="section">
        <div className="section-content">
          <h1>Projects</h1>
          <div id="projects">
            <ProjectTile
              title="Project 1"
              img={picture}
              description="Text 1"
            />
            <ProjectTile
              title="Project 2"
              img={picture}
              description="Text 2"
            />
            <ProjectTile
              title="Project 3"
              img={picture}
              description="Text 3"
            />
            <ProjectTile
              title="Project 4"
              img={picture}
              description="Text 4"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;