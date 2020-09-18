import React, { Component } from "react";
import ProjectTile from "./ProjectsTile";
import travelPlannerPicture from "../assets/img/travel-planner.png";
import sortSmartPicture from "../assets/img/sort-smart.png";
import portfolioPicture from "../assets/img/portfolio.png";
import cookingSchedulerPicture from "../assets/img/cooking-scheduler.png";

class Projects extends Component {
  render() {
    return (
      <div className="section">
        <div className="section-content">
          <h1>Projects</h1>
          <div id="projects">
            <ProjectTile
              title="Travel Planner"
              img={travelPlannerPicture}
              description="HTML · CSS · JavaScript"
              hide_code={false}
              code_url={"https://github.com/theauk/Udacity-Front-End-Nanodegree/tree/master/Project%205%20-%20Travel%20App"}
              hide_website={true}
              website_url={null}
            />
            <ProjectTile
              title="SortSmart"
              img={sortSmartPicture}
              description="HTML · CSS"
              hide_code={false}
              code_url={"https://github.com/theauk/SortSmart"}
              hide_website={false}
              website_url={"https://sort-smart.netlify.app/"}
            />
            <ProjectTile
              title="Personal Portfolio"
              img={portfolioPicture}
              description="React"
              hide_code={false}
              code_url={"https://github.com/theauk/theauk.github.io"}
              hide_website={true}
              website_url={null}
            />
            <ProjectTile
              title="Cooking Scheduler Algorithm"
              img={cookingSchedulerPicture}
              description="Python"
              hide_code={false}
              code_url={"https://github.com/theauk/Algorithms-and-Data-Structures/blob/master/Cooking%20Scheduler.ipynb"}
              hide_website={true}
              website_url={"http://google.dk/"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;