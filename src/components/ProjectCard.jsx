import React from 'react'

function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
          <p className="mt-3 text-slate-600">{project.description}</p>
        </div>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{project.category}</span>
      </div>
    </article>
  )
}
export default ProjectCard;