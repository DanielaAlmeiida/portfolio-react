import React from 'react'
import '../styles/components/projectscontainer.sass'

const projects = [
  { id: "Fintech", name: "Fintech", description: "Sistema de Controle Financeiro", link: "https://github.com/DanielaAlmeiida/fintech" },
  { id: "Alura Typer", name: "Alura Typer", description: "Typing game made with jQuery", link: "https://github.com/DanielaAlmeiida/jquery-alura-typer" },
]

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
        <h2>Projects</h2>

        <section className="project">
          {projects.map((project) => (
            <div>
              <h3>{project.name}</h3>
              <p className="description">
                {project.description}
              </p>
              <a href={project.link} className="btn" target='_blank'>
                See Project
              </a>
            </div>
          ))}
        </section>
       
    </section>
  )
}

export default ProjectsContainer
