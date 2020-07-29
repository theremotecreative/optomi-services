import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const HomeParallax = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 8}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 1920) {
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
            <ParallaxSection>
                <div class={"parallax-top"}>
                    <hr/>
                </div>

                <ImageBackground>
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <div class={"parallax-content"}>
                    <ParallaxContent 
                        data-sal="slide-down"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.content }}
                    />
                </div>
                    
                <div class={"parallax-bottom"}>
                    <hr/>
                </div>
            </ParallaxSection>
        ))
    )
}

const ParallaxSection = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    .parallax-top {
        background-color: #000;
        position: absolute;
        height: 100px;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        hr {
            width: 80%;
            margin: 0 auto;
            margin-top: 79px;
            height: 1px;
            background-color: #888;
            z-index: 1;
        }
    }
    .parallax-content {
        max-width: 1140px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
        z-index: 1;
    }
    .parallax-bottom {
        background-color: #000;
        position: absolute;
        height: 20px;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 1;
        hr {
            width: 80%;
            margin: 0 auto;
            margin-top: 9px;
            height: 1px;
            background-color: #888;
            z-index: 1;
        }
    }
    @media(max-width:420px) {
        height: auto;
        .parallax-content {
            padding: 100px 20px;
        }
    }
`

const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100%;
    img {
        margin-bottom: 0;
        left: auto !important;
        right: -450px;
        object-position: center right !important;
    }
    @media(max-width:850px) {
        display: none;
    }
`

const ImageBackground = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;
`

const ParallaxContent = styled.div`
    z-index: 1;
    max-width: 550px;
    margin-left: 115px;
    h2 {
        font-family: "Helvetica Thin";
        color: #61b1e8;
        font-size: 77px;
        font-weight: 100;
        text-align: center;
        line-height: 26px;
        position: relative;
        margin-bottom: 140px;
        .freeland {
            font-family: 'Freeland';
            font-style: italic;
            font-size: 95px;
            position: absolute;
            top: 60px;
            left: 80px;
            @media(max-width:600px) {
                font-size: 72px;
                top: 50px;
            }
            @media(max-width:420px) {
                position: relative;
                top: auto;
                left: auto;
            }
        }
        .white {
            font-size: 77px;
            color: #8c9192;
            text-transform: uppercase;
            position: absolute;
            top: 120px;
            @media(max-width:600px) {
                font-size: 42px;
                top: 100px;
            }
            @media(max-width:420px) {
                position: relative;
                top: auto;
                left: auto;
            }
        }
        @media(max-width:600px) {
            font-size: 42px;
        }
        @media(max-width:420px) {
            line-height: 1;
            margin-bottom: 20px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        font-size: 36px;
        font-weight: 100;
        color: #8c9091;
        line-height: 35px;
    }
    @media(max-width:800px) {
        margin: 0 auto;
        p {
            text-align: center;
        }
    }
`

export default HomeParallax