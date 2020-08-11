import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const ClientsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 10}}}}) {
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
                            section_one {
                                column_one_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 347) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                column_one_copy
                                column_two_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 347) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                column_two_copy
                                column_three_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 347) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                column_three_copy
                            }
                            section_two {
                                section_two_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                section_two_copy
                                section_two_link_copy
                                section_two_link
                            }
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
                        data-sal="zoom-in"
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
                        <p>{post.node.acf.bottom_subtitle}</p>
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
                        <SectionOneCol
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <SectionOneImage sizes={post.node.acf.section_one.column_one_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                            <SectionOneCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.column_one_copy }}/>
                        </SectionOneCol>
                        <SectionOneCol
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <SectionOneImage sizes={post.node.acf.section_one.column_two_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                            <SectionOneCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.column_two_copy }}/>
                        </SectionOneCol>
                        <SectionOneCol
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <SectionOneImage sizes={post.node.acf.section_one.column_three_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                            <SectionOneCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.column_three_copy }}/>
                        </SectionOneCol>
                    </SectionOneRow>
                </SectionOne>
                <SectionTwo>
                    <SectionTwoRow
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <SectionTwoImage sizes={post.node.acf.section_two.section_two_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                        <SectionTwoCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_two.section_two_copy }}/>
                        <SectionTwoLink href={post.node.acf.section_two.section_two_link}>{post.node.acf.section_two.section_two_link_copy}</SectionTwoLink>
                    </SectionTwoRow>
                </SectionTwo>
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
        text-align: center;
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
        max-width: 850px;
        width: 100%;
        color: #fff;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        span {
            color: #5ab3e8;
            font-family: 'Freeland';
            font-size: 91px;
        }
        @media(max-width:1200px) {
            font-size: 65px;
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
        font-size: 32px;
        color: #5ab3e8;
        text-transform: uppercase;
        line-height: 1.2;
        @media(max-width:1200px) {
            font-size: 31px;
            max-width: 950px;
            margin: 0 auto;
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
    background-color: #fff;
`

const SectionOneRow = styled.div`
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media(max-width:1200px) {
        max-width: 990px;
    }
    @media(max-width:1000px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const SectionOneCol = styled.div`
    width: 30%;
    text-align: center;
    @media(max-width:1200px) {
        width: 31%;
    }
    @media(max-width:1000px) {
        width: 100%;
        max-width: 550px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`

const SectionOneImage = styled(Img)`
    max-width: 245px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    img {
        margin-bottom: 0;
    }
`

const SectionOneCopy = styled.div`
    h3 {
        font-size: 40px;
        line-height: 40px;
        text-transform: lowercase;
        font-family: "Helvetica Thin";
        font-weight: 600;
        color: #000;
        margin-top: -25px;
    }
    p {
        font-size: 22px;
        line-height: 25px;
        color: #000;
        font-family: "Helvetica Thin";
        letter-spacing: 1px;
        @media(max-width:500px) {
            font-size: 18px;
            line-height: 1.2;
        }
    }
`

const SectionTwo = styled.div`
    background-color: #000;
    padding-bottom: 50px;
`

const SectionTwoRow = styled.div`
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    @media(max-width:1200px) {
        max-width: 990px;
    }
`

const SectionTwoImage = styled(Img)`
    max-width: 600px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    img {
        margin-bottom: 0;
    }
`

const SectionTwoCopy = styled.div`
    margin-top: -70px;
    h2 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 50px;
        line-height: 50px;
        font-weight: 100;
    }
    p {
        font-family: "Helvetica Thin";
        font-size: 28px;
        line-height: 35px;
        color: #fff;
        @media(max-width:500px) {
            font-size: 18px;
            line-height: 1.2;
        }
    }
`

const SectionTwoLink = styled(Link)`
    color: #5ab3e8;
    font-family: 'Freeland';
    font-size: 52px;
    line-height: 52px;
    padding-top: 15px;
    text-decoration: none !important;
    text-align: center;
`

export default ClientsPage