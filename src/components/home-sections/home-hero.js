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

                <div>
                <HeroLogo>
                    <div className="hero-logo-imgs">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1500"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        className="logo-1"
                        >
                            <OLogo/>
                        </div>
                        <div 
                        data-sal="fade"
                        data-sal-duration="1500"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        className="logo-2"
                        >
                            <PLogo/>
                        </div>
                        <div 
                        data-sal="fade"
                        data-sal-duration="1500"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        className="logo-3"
                        >
                            <SLogo/>
                        </div>
                    </div>
                    <hr
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    />
                    <p>
                        <span
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >Optomi</span> <span 
                        class={"blue"}
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >Professional</span> <span
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >Services</span>
                        </p>
                </HeroLogo>

                <HeroContent 
                    data-sal="fade"
                    data-sal-duration="2000"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />
                </div>

                <HeroBottom
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                >
                    <button onClick={() => scrollTo('#canvas_section')} aria-label="Scroll"><FaChevronDown size={42}/></button>
                    <p>{post.node.acf.bottom_subtitle}</p>
                </HeroBottom>

                <HeroSocials
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                >
                    <a href={post.node.acf.twitter_link} target="_blank" rel="noopener noreferrer" aria-label="Link"><FaTwitter size={42}/></a>
                    <a href={post.node.acf.linkedin_link} target="_blank" rel="noopener noreferrer" aria-label="Link"><FaLinkedinIn size={42}/></a>
                </HeroSocials>
                    
            </HeroBanner>
        ))
    )
}

const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: 1;
`
const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100%;
    img {
        margin-bottom: 0;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 50px;
    justify-content: center;
    .hero-logo-imgs {
        display: flex;
        align-items: center;
        margin-right: 10px;
        img {
            margin-bottom: 0;
        }
        .logo-1 {
            .gatsby-image-wrapper {
                width: 120px;
                height: 132px;
                @media(max-width:500px) {
                    width: 102px;
                    height: 113px;
                }
            }
        }
        .logo-2 {
            margin-left: -10px;
            margin-right: -7px;
            margin-top: 2px;
            .gatsby-image-wrapper {
                width: 92px;
                height: 110px;
                @media(max-width:500px) {
                    width: 78px;
                    height: 93px;
                }
            }
        }
        .logo-3 {
            margin-top: 5px;
            .gatsby-image-wrapper {
                width: 77px;
                height: 110px;
                @media(max-width:500px) {
                    width: 65px;
                    height: 93px;
                }
            }
        }
    }
    hr {
        width: 100%;
        max-width: 400px;
        background-color: rgba(255, 255, 255, 0.5);
        margin-bottom: 5px;
        z-index: 1;
        transition-delay: 2s;
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
            &:nth-child(1){
                transition-delay: 1.2s;
            }
            &:nth-child(2){
                transition-delay: 1.4s;
            }
            &:nth-child(3){
                transition-delay: 1.6s;
            }
            &.blue {
                color: #5ab3e8;
            }
        }
        @media(max-width:420px) {
            font-size: 18px;
        }
    }
    @media(max-width:500px) {
        padding: 20px;
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    min-width: 100vw;
    width: 100%;
    transition-delay: 1.8s;
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
                    max-width: 1000px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    @media(max-width:600px) {
                        font-size: 32px;
                    }
                    @media(max-width:420px) {
                        font-size: 20px;
                    }
                }
                p {
                    font-family: "Helvetica Thin";
                    font-size: 24px;
                    line-height: 1.2;
                    color: #8c9192;
                    @media(max-width:420px) {
                        font-size: 14px;
                        line-height: 1.2;
                    }
                }
            }
        }
    }
`

const HeroBottom = styled.div`
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;
    z-index: 1;
    transition-delay: 2.1s;
    p {
        font-family: "Helvetica Thin";
        text-align: center;
        margin: 0;
        color: rgb(140, 145, 146);
        @media(max-width:500px) {
            display: none;
        }
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
    transition-delay: 2.4s;
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