import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "OPS-logo.png" }) {
        childImageSharp {
          fixed(width: 71, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fixed} />
}

export default HeaderLogo
