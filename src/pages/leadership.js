import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeadershipSectionSimple from "../components/leadership-section-simple"

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const LeadershipPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 15}}}}) {
                edges {
                    node {
                        title
                        content
                        acf {
                            bottom_subtitle
                            meta_title
                            meta_description
                        }
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
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <ClientsBanner>
                    <ImageBackground>
                    </ImageBackground>

                    <HeroTitle
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <h1>{post.node.title}</h1>
                        <p>Optomi <span>Professional</span> Services</p>
                    </HeroTitle>

                    <HeroContent 
                        data-sal="slide-up"
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
                        <p>{post.node.acf.bottom_subtitle}</p>
                        <button onClick={() => scrollTo('#section_one')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>

                    <HeroSocials
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <a href="https://twitter.com/OptomiServices" target="_blank" rel="noopener noreferrer" aria-label="Link"><FaTwitter size={42}/></a>
                        <a href="https://www.linkedin.com/company/27003541/" target="_blank" rel="noopener noreferrer" aria-label="Link"><FaLinkedinIn size={42}/></a>
                    </HeroSocials>
                </ClientsBanner>
                <LeadershipCustom id={"section_one"}>
                    <LeadershipSectionSimple/>
                </LeadershipCustom>
            </Layout>
            
        ))
    )
}

const ClientsBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width:600px) {
        display: block;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroTitle = styled.div`
    position: absolute;
    top: 100px;
    left: 150px;
    h1 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 90px;
        font-weight: 100;
        line-height: 1;
        @media(max-width:1200px) {
            font-size: 82px;
        }
        @media(max-width:500px) {
            font-size: 52px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 2px;
        width: 100%;
        text-align: center;
        z-index: 1;
        font-size: 20px;
        color: rgb(140,145,146);
        span {
            color: #5ab3e8;
        }
        @media(max-width:500px) {
            font-size: 18px;
        }
    }
    @media(max-width: 600px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    min-width: 100vw;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    margin-top: 100px;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 32px;
        color: #5ab3e8;
        line-height: 1.2;
        max-width: 1200px;
        margin: 0 auto;
        @media(max-width:1200px) {
            font-size: 28px;
            max-width: 990px;
        }
        @media(max-width:600px) {
            font-size: 24px;
        }
        @media(max-width:500px) {
            font-size: 18px;
            color: #fff;
        }
    }
    @media(max-width:600px) {
        margin-top: 30px;
    }
`

const HeroBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    p {
        font-family: 'Freeland';
        font-size: 50px;
        line-height: 1.1;
        text-align: center;
        margin: 0;
        margin-bottom: 120px;
        color: #fff;
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

const LeadershipCustom = styled.div`

`

export default LeadershipPage