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

const CandidatesPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 12}}}}) {
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
                                content
                                button_copy
                                button_link
                                image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 500) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_two {
                                content
                                button_copy
                                button_link
                                image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 800) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_three {
                                content
                                button_copy
                                button_link
                                image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 500) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_four {
                                content
                                button_copy
                                button_link
                            }
                            section_five {
                                content
                                image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 800) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
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
                <MainSections>
                    <div class={"main-section"} id={"section_one"}>
                        <div class={"main-section-row"}>
                            <div class={"col-one"}
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div
                                    class={"col-copy"}
                                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.content }}
                                />
                                <a href={post.node.acf.section_one.button_link} target="_blank" rel="noopener noreferrer">{post.node.acf.section_one.button_copy}</a>
                            </div>
                            <div class={"col-two"}
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.section_one.image.localFile.childImageSharp.sizes} alt={"Candidates Image"}/>
                            </div>
                        </div>
                    </div>
                    <div class={"main-section"} id={"section_two"}>
                        <div class={"main-section-row"}>
                            <div class={"col-one"}
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.section_two.image.localFile.childImageSharp.sizes} alt={"Candidates Image"}/>
                            </div>
                            <div class={"col-two"}
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div
                                    class={"col-copy"}
                                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_two.content }}
                                />
                                 <a href={post.node.acf.section_two.button_link} target="_blank" rel="noopener noreferrer">{post.node.acf.section_two.button_copy}</a>
                            </div>
                        </div>
                    </div>
                    <div class={"main-section"} id={"section_three"}>
                        <div class={"main-section-row"}>
                            <div class={"col-one"}
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div
                                    class={"col-copy"}
                                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_three.content }}
                                />
                                 <a href={post.node.acf.section_three.button_link} target="_blank" rel="noopener noreferrer">{post.node.acf.section_three.button_copy}</a>
                            </div>
                            <div class={"col-two"}
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.section_three.image.localFile.childImageSharp.sizes} alt={"Candidates Image"}/>
                            </div>
                        </div>
                    </div>
                </MainSections>
                <SectionFour>
                    <div class={"section-row"}>
                        <div
                            class={"section-content"}
                            dangerouslySetInnerHTML={{ __html: post.node.acf.section_four.content }}
                        />
                        <a href={post.node.acf.section_four.button_link} target="_blank" rel="noopener noreferrer">{post.node.acf.section_four.button_copy}</a>
                    </div>
                </SectionFour>
                <SectionFive>
                    <div class={"section-row"}>
                        <FiveImg sizes={post.node.acf.section_five.image.localFile.childImageSharp.sizes} alt={"Candidates Image"} />
                        <div
                            class={"section-content"}
                            dangerouslySetInnerHTML={{ __html: post.node.acf.section_five.content }}
                        />
                    </div>
                </SectionFive>
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
    justify-content: center;
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
    background-color: #000;
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
    h2 {
        font-family: "Helvetica Thin";
        max-width: 800px;
        width: 100%;
        color: #fff;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 44px;
        font-weight: 100;
        line-height: 1;
        color: #fff;
        .freeland {
            font-family: 'Freeland';
            color: #5ab3e8;
            font-size: 95px;
            line-height: 1;
            @media(max-width:500px) {
                font-size: 62px;
            }
        }
        @media(max-width:1200px) {
            font-size: 40px;
            margin-bottom: 10px;
        }
        @media(max-width:500px) {
            font-size: 28px;
        }
    }
    hr {
        background-color: #aaa;
        max-width: 500px;
        margin: 20px auto;
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 23px;
        color: #fff;
        line-height: 1.2;
        max-width: 800px;
        margin: 0 auto;
        margin-bottom: 35px;
        &.blue {
            color: #5ab3e8;
            @media(max-width:1200px) {
                font-size: 21px;
                margin-bottom: 25px;
            }
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
    @media(max-width:370px) {
        p {
            &:last-child {
                display: none;
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

const MainSections = styled.div`
    #section_one {
        background-color: #fff;
        h3 {
            font-family: "Helvetica Thin";
            color: #000;
            font-size: 40px;
            font-weight: 100;
            line-height: 1.1;
            margin-bottom: 5px;
        }
        p {
            font-family: "Helvetica Thin";
            color: #000;
            font-size: 20px;
            font-weight: 100;
            line-height: 1.1;
            margin-bottom: 45px;
        }
        a {
            font-family: "Helvetica Thin";
            width: 390px;
            padding: 35px 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none !important;
            font-size: 25px;
            font-weight: normal;
            color: #fff;
            background-color: #000;
            transition-duration: .3s;
            &:hover {
                background-color: #4d4d4d;
            }
            @media(max-width:1200px) {
                width: 300px;
                padding: 20px;
            }
            @media(max-width:500px) {
                width: auto;
                padding: 20px 35px;
            }
        }
        @media(max-width:900px) {
            .col-one {
                order: 2;
            }
            .col-two {
                order: 1;
            }
        }
    }
    #section_two {
        background-color: #333;
        h3 {
            font-family: "Helvetica Thin";
            color: #5ab3e8;
            font-size: 40px;
            font-weight: 100;
            line-height: 1.1;
            margin-bottom: 5px;
        }
        p {
            font-family: "Helvetica Thin";
            color: #5ab3e8;
            font-size: 20px;
            font-weight: 100;
            line-height: 1.1;
            margin-bottom: 45px;
        }
        a {
            font-family: "Helvetica Thin";
            width: 390px;
            padding: 35px 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none !important;
            font-size: 25px;
            font-weight: normal;
            color: #5ab3e8;
            background-color: #fff;
            transition-duration: .3s;
            &:hover {
                background-color: #c1c1c1;
            }
            @media(max-width:1200px) {
                width: 300px;
                padding: 20px;
            }
            @media(max-width:500px) {
                width: auto;
                padding: 20px 35px;
            }
        }
        
    }
    #section_three {
        background-color: #000;
        h3 {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 40px;
            font-weight: 100;
            line-height: 1.1;
            margin-bottom: 5px;
        }
        p {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 20px;
            font-weight: 100;
            line-height: 1.1;
            margin-bottom: 0px;
            &.freeland {
                font-family: 'Freeland';
                color: #fff;
                font-size: 32px;
                line-height: 1.1;
                margin-bottom: 45px;
            }
        }
        a {
            font-family: "Helvetica Thin";
            width: 390px;
            padding: 35px 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none !important;
            font-size: 25px;
            font-weight: normal;
            color: #000;
            background-color: #fff;
            transition-duration: .3s;
            &:hover {
                background-color: #c1c1c1;
            }
            @media(max-width:1200px) {
                width: 300px;
                padding: 20px;
            }
            @media(max-width:500px) {
                width: auto;
                padding: 20px 35px;
            }
        }
        @media(max-width:900px) {
            .col-one {
                order: 2;
            }
            .col-two {
                order: 1;
            }
        }
    }
    .main-section {
        padding: 60px 0;
        .main-section-row {
            max-width: 1140px;
            padding-left: 20px;
            padding-right: 20px;
            margin: 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            .col-one {
                width: 50%;
                padding-right: 30px;
            }
            .col-two {
                width: 50%;
                padding-left: 30px;
            }
            @media(max-width:1200px) {
                max-width: 990px
            }
            @media(max-width:900px) {
                flex-wrap: wrap;
                text-align: center;
                .col-one,
                .col-two {
                    width: 100%;
                    padding-left: 0;
                    padding-right: 0;
                }
                .gatsby-image-wrapper {
                    max-width: 400px;
                    margin: 0 auto;
                    margin-bottom: 35px;
                }
            }
        }
    }

`

const SectionFour = styled.div`
    background-color: #fff;
    padding: 90px 0 150px;
    .section-row {
        max-width: 1140px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        p {
            font-family: "Helvetica Thin";
            font-size: 50px;
            line-height: 1;
            color: #5ab3e8;
            margin-bottom: 10px;
            &.freeland {
                font-family: 'Freeland';
                color: #5ab3e8;
                font-size: 50px;
                line-height: 1.1;
                margin-bottom: 90px;
            }
        }
        a {
            font-family: "Helvetica Thin";
            width: 390px;
            padding: 35px 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none !important;
            font-size: 25px;
            font-weight: normal;
            color: #5ab3e8;
            background-color: #000;
            transition-duration: .3s;
            &:hover {
                background-color: #4d4d4d;
            }
            @media(max-width:1200px) {
                width: 300px;
                padding: 20px;
            }
            @media(max-width:500px) {
                width: auto;
                padding: 20px 35px;
            }
        }
    }
`

const SectionFive = styled.div`
    background-color: #000;
    padding: 60px 0;
    position: relative;
    .section-row {
        max-width: 1140px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        .section-content {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        p {
            color: #fff;
            font-size: 50px;
            line-height: 1;
            font-family: "Helvetica Thin";
            padding: 0 20px;
        }
    }
`

const FiveImg = styled(Img)`
    height: auto;
    width: 650px;
    margin: 0 auto;
    img {
        margin-bottom: 0;
    }
    @media(max-width:800px) {
        height: auto;
        width: 100%;
    }
`

export default CandidatesPage