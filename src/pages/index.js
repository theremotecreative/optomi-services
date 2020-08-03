import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import HomeHero from "../components/home-sections/home-hero"
import HomeCanvas from "../components/home-sections/home-canvas"
import HomeSimple from "../components/home-sections/home-simple"
import HomeMiddle from "../components/home-sections/home-middle"
import HomeThreeCol from "../components/home-sections/home-three-col"
import LeadershipSection from "../components/leadership-section"
import HomeParallax from "../components/home-sections/home-parallax"
import HomeBottom from "../components/home-sections/home-bottom"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 3}}}}) {
                edges {
                    node {
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    return(
      data.allWordpressWpHomeSection.edges.map(post => (
      <HomeLayout>
        <SEO 
        title="Optomi Professional Services" 
        image={post.node.featured_media.localFile.childImageSharp.sizes}
        />
        <HomeHero/>
        <HomeCanvas/>
        <HomeSimple/>
        <HomeMiddle/>
        <HomeThreeCol/>
        <LeadershipSection/>
        <HomeParallax/>
        <HomeBottom/>
      </HomeLayout>
    ))
  )
}

export default IndexPage
