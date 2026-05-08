import React from 'react'

function Search({ searchTerm, onSearch }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-soft">
      <h2 className="text-2xl font-semibold text-slate-950">Search Projects</h2>
      <input
        type="text"
        placeholder="Search by project name..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
      />
    </section>
  )
}
export default Search;