import React from "react";

export default function ProjectTile({ title, img, description }) {
    return (
        <div class="project-tile">
            <h2>{title}</h2>
            <img class="project-image" src={img} alt="Project" />
            <p>{description}</p>
        </div>
    );
}