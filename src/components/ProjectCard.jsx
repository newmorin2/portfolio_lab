import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="category">{project.category}</span>
    </div>
  )
}
export default ProjectCard;