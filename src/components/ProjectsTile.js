import React from "react";

export default function ProjectTile({ title, img, description, hide_code, code_url, hide_website, website_url }) {
    return (
        <div className="project-tile">
            <div className="project-text">
                <p className={"project-title"}>{title}</p>
                <p className={"project-description"}>{description}</p>
            </div>
            <img className={"project-image"} src={img} alt="Project" />
            <div className="project-buttons">
                <a href={code_url} target="_blank" rel="noopener noreferrer" className={"project-button" + (hide_code ? " button-hide" : "")}>Code</a>
                <a href={website_url} target="_blank" rel="noopener noreferrer" className={"project-button" + (hide_website ? " button-hide" : "")}>Website</a>
            </div>
        </div>
    );
}