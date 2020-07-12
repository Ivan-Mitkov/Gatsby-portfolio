import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        twitterUsername
        image
        siteUrl
      }
    }
  }
`
const SEO = ({ title, description }) => {
  //two ways as props or as meta
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    author,
    image,
    twitterUsername,
    siteUrl,
  } = site.siteMetadata
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
