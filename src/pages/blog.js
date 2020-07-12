import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        date(formatString: "DD-MMM-YY")
        description
        id
        title
        category
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
const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blogs" />

      <section className="blog-page">
        <Blogs blogs={blogs} title="blog page" />
      </section>
    </Layout>
  )
}

export default Blog
