import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      nodes {
        company
        date
        position
        id
        description {
          name
          id
        }
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]
  console.log(company, position, date, description)
  return (
    <section className="section jobs">
      <Title title="experience"></Title>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, i) => {
            return (
              <button
                key={item.id}
                className={`job-btn ${i === value && "active-btn"}`}
                onClick={() => setValue(i)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link className="btn center-btn" to="/about">
        {" "}
        more info
      </Link>
    </section>
  )
}

export default Jobs
