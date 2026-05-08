import { useState} from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ProjectList from "./components/ProjectList";
import Form from "./components/Form";
import Search from "./components/Search";
import "./App.css";


const initialProjects = [
  {id: 1, title: "Brand Identity", description: "Logo and branding for a tech startup",category: "Branding"},
  {id: 2, title: "Website Redesign", description: "Full redesign of a corporate website", category: "Web Design"},
  {id: 3, title: "Social Media Campaign", description: "Creative campaign for a fashion brand", category: "Marketing"},
]

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleForm = (newProject) => {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main>
        <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
        <Form onAdd={handleForm} />
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  )
}

export default App;