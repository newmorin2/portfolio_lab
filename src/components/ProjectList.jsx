import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-soft">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold text-slate-950">Our Projects</h2>
        <span className="text-sm text-slate-500">{projects.length} project{projects.length === 1 ? '' : 's'}</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectList;