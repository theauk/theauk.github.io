import React from "react";

export default function SpecificExperience({ company, role, place, date, resp }) {
    return (
        <div className="specific-experience">
            <div className="experience-general">
                <p className="company-name">{company}</p>
                <p className="role-name">{role}</p>
            </div>
            <div class="experience-details">
                <p className="experience-place">{place}</p>
                <p className="experience-date">{date}</p>
                <p className="responsibility">{resp}</p>
            </div>
        </div>
    );
}