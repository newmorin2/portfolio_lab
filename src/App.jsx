import { useState } from 'react'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import Form from './components/Form'
import Search from './components/Search'

const initialProjects = [
  { id: 1, title: 'Brand Identity', description: 'Logo and branding for a tech startup', category: 'Branding' },
  { id: 2, title: 'Website Redesign', description: 'Full redesign of a corporate website', category: 'Web Design' },
  { id: 3, title: 'Social Media Campaign', description: 'Creative campaign for a fashion brand', category: 'Marketing' },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')

  const handleForm = (newProject) => {
    setProjects([...projects, newProject])
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        <main className="mt-12 mb-8 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
            <ProjectList projects={filteredProjects} />
          </div>
          <Form onAdd={handleForm} />
        </main>
      </div>
    </div>
  )
}

export default App;