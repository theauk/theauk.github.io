import React, { Component } from "react";
import SpecificExperience from "./SpecificExperience";

class Experience extends Component {
  render() {
    return (
      <div className="section outer-experience" id="Experience">
        <div className="section-content" id="experience">
          <h1>Experience</h1>
          <SpecificExperience
            company="Tradimo Interactive"
            role="Data Engineering Intern"
            date="Jun. 2019 - Feb. 2020"
            resp="Developed a tracking system, automated transfer between CRM systems, and created a marketing dashboard with JavaScript, APIs, and Python."
          />
          <SpecificExperience
            company="GreenBIM Engineering"
            role="Web Development Intern"
            date="Sep. 2019 - Dec. 2019"
            resp="Finetuned the UI and fixed bugs via HTML, CSS, and the WordPress editor."
          />
          <SpecificExperience
            company="Global Brain Health Institute, UCSF"
            role="Marketing Research Student"
            date="Nov. 2018 - Apr. 2019"
            resp="Created a Facebook page proposal, including example posts, a posting schedule, and survey results, which was later successfully implemented."
          />
          <SpecificExperience
            company="Minerva Schools at KGI"
            role="Writing Peer Tutor and Academic Assistant"
            date="Sep. 2018 - Apr. 2018"
            resp="Facilitated a 12-week course consisting of weekly writing sections, held one-on-one tutoring, and had office hours to help the students improve their English writing skills."
          />
        </div>
      </div>
    );
  }
}

export default Experience;