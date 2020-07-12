import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import SEO from "../components/SEO"
import Image from "gatsby-image"
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  console.log(nodes)
  const { title, info, image, stack } = nodes[0]
  return (
    <Layout>
      <SEO title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(s => {
                return <span key={s.id}>{s.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
