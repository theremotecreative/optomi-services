import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 13}}}}) {
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
                            section_one_content
                            section_two_content
                            meta_title
                            meta_description
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
                        <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </ImageBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
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
                        data-sal-delay="900"
                        data-sal-easing="ease"
                    >
                        <button onClick={() => scrollTo('#section_one')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>

                    <HeroSocials
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                    >
                        <a href="https://twitter.com/OptomiServices" target="_blank" rel="noopener noreferrer" aria-label="Link"><FaTwitter size={42}/></a>
                        <a href="https://www.linkedin.com/company/27003541/" target="_blank" rel="noopener noreferrer" aria-label="Link"><FaLinkedinIn size={42}/></a>
                    </HeroSocials>
                </ClientsBanner>
                <SectionOne id={"section_one"}>
                    <SectionOneRow>
                        <SectionOneContent
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            dangerouslySetInnerHTML={{ __html: post.node.acf.section_one_content }}
                        />
                    </SectionOneRow>
                </SectionOne>
                <SectionTwo>
                    <SectionTwoRow>
                        <SectionTwoContent
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            dangerouslySetInnerHTML={{ __html: post.node.acf.section_two_content }}
                        />
                    </SectionTwoRow>
                </SectionTwo>
            </Layout>
            
        ))
    )
}

const ClientsBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width:600px) {
        display: block;
    }
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
    h2 {
        font-family: "Helvetica Thin";
        max-width: 800px;
        width: 100%;
        color: #fff;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 77px;
        font-weight: 100;
        line-height: .8;
        .freeland {
            color: #5ab3e8;
            font-family: 'Freeland';
            font-size: 95px;
            padding-right: 170px;
            @media(max-width:600px) {
                font-size: 72px;
            }
            @media(max-width:500px) {
                font-size: 55px;
                padding: 0;
            }
        }
        .blue {
            color: #5ab3e8;
        }
        .uppercase {
            text-transform: uppercase;
            padding-left: 120px;
        }
        @media(max-width:600px) {
            font-size: 42px;
        }
        @media(max-width:500px) {
            font-size: 28px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 28px;
        color: #fff;
        line-height: 1.2;
        color: #fff;
        max-width: 1200px;
        margin: 0 auto;
        @media(max-width:1200px) {
            max-width: 990px
        }
        @media(max-width:600px) {
            font-size: 24px;
        }
        @media(max-width:500px) {
            font-size: 18px;
            color: #fff;
        }
        @media(max-width:360px) {
            display: none;
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
    transition-delay: 1.2s;
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

const SectionOne = styled.div`
    background-color: #000;
`

const SectionOneRow = styled.div`
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    border-top: 1px solid #818181;
    @media(max-width:1000px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const SectionOneContent = styled.div`
    padding: 100px 0 80px;
    text-align: center;
    margin: 0 auto;
    h3 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-weight: 100;
        font-size: 45px;
        line-height: 1;
        @media(max-width:500px) {
            font-size: 32px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 28px;
        line-height: 1.2;
        max-width: 600px;
        margin: 0 auto;
        .freeland {
            color: #5ab3e8;
            font-family: 'Freeland';
            font-size: 78px;
            line-height: 28px;
            @media(max-width:600px) {
                font-size: 55px;
            }
            @media(max-width:500px) {
                font-size: 42px;
            }
        }
        @media(max-width:500px) {
            font-size: 20px;
        }
    }
`

const SectionTwo = styled.div`
    background-color: #000;
    padding-bottom: 100px;
`

const SectionTwoRow = styled.div`
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    border-top: 1px solid #818181;
`

const SectionTwoContent = styled.div`
    padding: 100px 0 80px;
    text-align: center;
    margin: 0 auto;
    h3 {
        color: #5ab3e8;
        font-family: 'Freeland';
        font-size: 80px;
        line-height: 1;
        @media(max-width:600px) {
            font-size: 55px;
        }
        @media(max-width:500px) {
            font-size: 42px;
        }
    }
    hr {
        background-color: #8b8f91;
        max-width: 400px;
        margin: 80px auto 20px;
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 28px;
        line-height: 1.2;
        max-width: 950px;
        margin: 0 auto;
        .freeland {
            color: #5ab3e8;
            font-family: 'Freeland';
            font-size: 78px;
            line-height: 28px;
            @media(max-width:600px) {
                font-size: 55px;
            }
            @media(max-width:500px) {
                font-size: 42px;
            }
        }
        &.sub-text {
            color: #8b8f91;
            font-size: 22px;
            letter-spacing: 1px;
            font-weight: 600;
        }
        @media(max-width:500px) {
            font-size: 20px;
        }
    }
`

export default AboutPage