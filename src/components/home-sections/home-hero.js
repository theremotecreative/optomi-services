import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const HomeHero = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 3}}}}) {
                edges {
                    node {
                        content
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
            <HeroBanner>
                <ImageBackground>
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <HeroContent dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                    
            </HeroBanner>
        ))
    )
}

const HeroBanner = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
`
const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100vw;
    img {
        margin-bottom: 0;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    .home-hero {
        > .panel-grid-cell {
            display: flex;
            min-height: 100vh;
            align-items: center;
            .panel-first-child {
                width: 100%;
                padding: 0 20px;
                h1 {
                    font-size: 48px;
                    font-weight: 300;
                    color: #5ab3e8;
                    max-width: 1100px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 25px;
                    color: #8c9192;
                }
            }
            .panel-last-child {
                position: absolute;
                left: 0;
                bottom:0;
            }
        }
    }
`



export default HomeHero