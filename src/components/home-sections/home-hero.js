import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import OLogo from "./logos/o-logo"
import PLogo from "./logos/p-logo"
import SLogo from "./logos/s-logo"

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
                        acf {
                            bottom_subtitle
                            twitter_link
                            linkedin_link
                            arrow_link
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

                <HeroLogo
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                >
                    <div className="hero-logo-imgs">
                        <div className="logo-1">
                            <OLogo/>
                        </div>
                        <div className="logo-2">
                            <PLogo/>
                        </div>
                        <div className="logo-3">
                            <SLogo/>
                        </div>
                    </div>
                    <hr/>
                    <p>Optomi <span>Professional</span> Services</p>
                </HeroLogo>

                <HeroContent 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />

                <HeroBottom
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                >
                    <button onClick={() => scrollTo('#canvas_section')}><FaChevronDown size={32}/></button>
                    <p>{post.node.acf.bottom_subtitle}</p>
                </HeroBottom>

                <HeroSocials
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                >
                    <a href={post.node.acf.twitter_link} target="_blank" rel="noopener noreferrer"><FaTwitter size={42}/></a>
                    <a href={post.node.acf.linkedin_link} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={42}/></a>
                </HeroSocials>
                    
            </HeroBanner>
        ))
    )
}

const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: 1;
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

const HeroLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    margin: 0 auto;
    justify-content: center;
    .hero-logo-imgs {
        display: flex;
        align-items: center;
        img {
            margin-bottom: 0;
        }
        .logo-1 {
            .gatsby-image-wrapper {
                width: 120px;
                height: 132px;
            }
        }
        .logo-2 {
            .gatsby-image-wrapper {
                width: 92px;
                height: 110px;
            }
        }
        .logo-3 {
            .gatsby-image-wrapper {
                width: 77px;
                height: 110px;
            }
        }
    }
    hr {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        margin-bottom: 5px;
        z-index: 1;
    }
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 2px;
        width: 100%;
        text-align: center;
        z-index: 1;
        font-size: 25px;
        color: rgb(140, 145, 146);
        span {
            color: #5ab3e8;
        }
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    min-width: 100vw;
    width: 100%;
    .home-hero {
        > .panel-grid-cell {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .panel-first-child {
                width: 100%;
                padding: 0 20px;
                h1 {
                    font-family: "Helvetica Thin";
                    font-size: 48px;
                    font-weight: 300;
                    color: #5ab3e8;
                    max-width: 1100px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
                p {
                    font-family: "Helvetica Thin";
                    font-size: 17px;
                    color: #8c9192;
                }
            }
            .panel-last-child {
                position: absolute;
                bottom: 0;
                width: 100%;
                .hero-bottom-copy {
                    text-align: center;
                    margin-bottom: 20px;
                    a {
                        display: inline-block;
                        padding: 20px;
                        padding-bottom: 5px;
                        img {
                            width: 30px;
                            height: auto;
                            margin-bottom: 0;
                        }
                    }
                    p {
                        font-family: "Helvetica Thin";
                        text-align: center;
                        margin: 0;
                        color: rgb(140, 145, 146);
                    }
                }
                .hero-socials {
                    position: absolute;
                    right: 20px;
                    bottom: 40px;
                    width: 60px;
                    border-left: 1px solid rgba(255, 255, 255, 0.5);
                    padding: 0 10px;
                    a {
                        display: inline-block;
                        img {
                            width: 45px;
                            height: auto;
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
`

const HeroBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    p {
        font-family: "Helvetica Thin";
        text-align: center;
        margin: 0;
        color: rgb(140, 145, 146);
    }
    button {
        color: #5ab3e8;
        background-color: transparent;
        border: none;
        outline: 0;
        &:hover {
            cursor: pointer;
        }
    }
`

const HeroSocials = styled.div`
    position: absolute;
    right: 20px;
    bottom: 40px;
    width: 60px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 10px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    a {
        display: inline-block;
        &:first-child {
            color: #5ab3e8;
        }
        &:last-child {
            color: #8c9192;
        }
    }
`



export default HomeHero