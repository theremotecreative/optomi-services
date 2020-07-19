import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FaChevronDown } from 'react-icons/fa'

const HomeMiddle = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 5}}}}) {
                edges {
                    node {
                        title
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
                        acf {
                            banner_arrow_link
                        }
                    }
                }
            }
        }
    `)
    
    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MiddleSection>

                <ImageBackground>
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <MiddleContent 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />

                <ArrowIcon>
                    <button onClick={() => scrollTo(post.node.acf.banner_arrow_link)}><FaChevronDown size={42}/></button>
                </ArrowIcon>
                    
            </MiddleSection>
        ))
    )
}

const MiddleSection = styled.div`
    position: relative;
    min-height: 140vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    background-color: #000;
`

const BackgroundImg = styled(Img)`
    height: 140vh;
    width: 100vw;
    img {
        margin-bottom: 0;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 140vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
`

const MiddleContent = styled.div`
    position: absolute;
    height: 140vh;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    > .panel-layout {
        height: 140vh;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        > .panel-grid {
            width: 100%;
            &:first-child {
                .home-full-banner-content {
                    max-width: 1140px;
                    width: 100%;
                    padding-left: 20px;
                    padding-right: 20px;
                    margin: 0 auto;
                    display: flex;
                    > div {
                        margin-top: 30vh;
                        margin-bottom: 30vh;
                    }
                    .panel-grid-cell {
                        &:first-child {
                            width: 33%;
                            h2 {
                                font-family: "Helvetica Thin";
                                color: #61b1e8;
                                text-transform: uppercase;
                                font-size: 80px;
                                line-height: 80px;
                                font-weight: 400;
                                letter-spacing: 0px;
                            }
                        }
                        &:last-child {
                            width: 66%;
                            .p1 {
                                font-family: "Helvetica Thin";
                                color: #fff;
                                font-size: 38px;
                                line-height: 38px;
                                padding-bottom: 10px !important;
                                margin-bottom: 0;
                                span.blue {
                                    color: #61b1e8;
                                }
                            }
                            .p2 {
                                font-family: "Helvetica Thin";
                                color: #fff;
                                letter-spacing: 1px;
                                font-size: 20px;
                                line-height: 25px;
                                margin-bottom: 0;
                                span.blue {
                                    color: #61b1e8;
                                }
                            }
                            a {
                                font-family: "Helvetica Thin";
                                display: inline-block;
                                color: #61b1e8;
                                font-size: 25px;
                                font-weight: 500;
                                margin: 50px 0px;
                                border-color: #61b1e8;
                                line-height: 17px;
                                font-weight: 500;
                                border-style: solid;
                                border-width: 2px;
                                cursor: pointer;
                                padding: 12px 35px;
                                letter-spacing: 1px !important;
                                background-color: transparent;
                                text-decoration: none !important;
                                text-transform: uppercase;
                                transition-duration: .3s;
                                &:hover {
                                    color: #fff;
                                    border-color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const ArrowIcon = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    z-index: 10;
    button {
        color: #61b1e8;
        background-color: transparent;
        border: none;
        outline: 0;
        &:hover {
            cursor: pointer;
        }
    }
`

export default HomeMiddle