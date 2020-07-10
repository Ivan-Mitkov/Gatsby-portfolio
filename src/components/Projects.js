import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showlink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((item, i) => {
          return <Project key={item.id} index={i} {...item}></Project>
        })}
      </div>
      {showlink && (
        <Link to="/projects" className="btn center-btn">
          Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
