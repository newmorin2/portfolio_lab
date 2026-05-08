import React from 'react'

function Header() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Creative IO</h1>
      <p className="mt-4 max-w-2xl text-slate-600">A creative agency portfolio platform designed to highlight your latest work with clean, modern styling.</p>
    </header>
  )
}
export default Header;