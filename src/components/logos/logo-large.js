import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoLarge = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "OPS-logo-large.png" }) {
        childImageSharp {
          fixed(width: 350, height: 172) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fixed} />
}

export default LogoLarge
