import React from "react";

function ProjectList() {

  return (
    <div className="project-list">
      <h2>Our Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
export default ProjectList;