import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"

import PlusSign from "../components/logos/plus-sign"
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const ServicesPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 11}}}}) {
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
                                section_one_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 2000) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_two {
                                section_two_copy
                                section_two_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 650) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_three {
                                section_three_copy
                                image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 420) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_four {
                                section_four_copy
                                image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 650) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_five {
                                section_five_copy
                                section_five_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 420) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_six {
                                section_six_content
                                image_one {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 500) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                link_one
                                image_two {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                link_two
                                image_three
                                 {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 420) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                link_three
                                section_sub
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
                    <div
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <HeroContent 
                            dangerouslySetInnerHTML={{ __html: post.node.content }}
                        />
                        <SectionLinks
                        >
                                <button onClick={() => scrollTo('#section_two')} aria-label="Development Button">Development</button>
                                <button onClick={() => scrollTo('#section_three')} aria-label="Functional Roles Button">Functional Roles</button>
                                <button onClick={() => scrollTo('#section_four')} aria-label="Infastructure Button">Infastructure</button>
                                <button onClick={() => scrollTo('#section_five')} aria-label="Healthcare IT Button">Healthcare IT</button>
                        </SectionLinks>
                    </div>
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
                    <SectionOneRow
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <SectionOneImage sizes={post.node.acf.section_one.section_one_image.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                    </SectionOneRow>
                </SectionOne>
                <MainSections>
                    <div class={"main-section"} id={"section_two"}>
                        <div class={"main-section-row"}>
                            <div class={"col-one"}
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div
                                    class={"col-copy"}
                                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_two.section_two_copy }}
                                />
                            </div>
                            <div class={"col-two"}
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.section_two.section_two_image.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                            </div>
                        </div>
                    </div>
                    <div class={"main-section"} id={"section_three"}>
                        <div class={"main-section-row"}>
                            <div class={"col-one"}
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.section_three.image.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                            </div>
                            <div class={"col-two"}
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div
                                    class={"col-copy"}
                                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_three.section_three_copy }}
                                />
                            </div>
                        </div>
                    </div>
                    <div class={"main-section"} id={"section_four"}>
                        <div class={"main-section-row"}>
                            <div class={"col-one"}
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div
                                    class={"col-copy"}
                                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_four.section_four_copy }}
                                />
                            </div>
                            <div class={"col-two"}
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.section_four.image.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                            </div>
                        </div>
                    </div>
                    <div class={"main-section"} id={"section_five"}>
                        <div class={"main-section-row"}>
                            <div class={"col-one"}
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.section_five.section_five_image.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                            </div>
                            <div class={"col-two"}
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div
                                    class={"col-copy"}
                                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_five.section_five_copy }}
                                />
                            </div>
                        </div>
                    </div>
                </MainSections>
                <SectionSix id={"section_six"}>
                    <SectionSixRow
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <SectionSixCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_six.section_six_content }}/>
                        <div class={"section-links"}>
                            <div class={"link-col"}>
                                <a href={post.node.acf.section_six.link_one}>
                                <Img sizes={post.node.acf.section_six.image_one.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                                </a>
                            </div>
                            <div class={"plus-col"}>
                                <PlusSign/>
                            </div>
                            <div class={"link-col"}>
                                <a href={post.node.acf.section_six.link_two}>
                                <Img sizes={post.node.acf.section_six.image_two.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                                </a>
                            </div>
                            <div class={"plus-col"}>
                                <PlusSign/>
                            </div>
                            <div class={"link-col"}>
                                <a href={post.node.acf.section_six.link_three}>
                                <Img sizes={post.node.acf.section_six.image_three.localFile.childImageSharp.sizes} alt={"Services Image"}/>
                                </a>
                            </div>
                        </div>
                        <SectionSixSub><p>{post.node.acf.section_six.section_sub}</p></SectionSixSub>
                    </SectionSixRow>
                </SectionSix>
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
    justify-content: center;
    @media (max-width:600px) {
        display: block;
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
        font-size: 60px;
        font-weight: 100;
        line-height: 1;
        color: #5ab3e8;
        transition-duration: .3s;
        @media(max-width:1200px) {
            max-width: 600px;
            font-size: 49px;
        }
        @media(max-width:600px) {
            font-size: 42px;
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
        transition-duration: .3s;
        @media(max-width:1200px) {
            font-size: 20px;
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

const SectionLinks = styled.div`
    position: relative;
    padding: 0 20px;
    text-align: center;
    z-index: 1;
    button {
        font-family: "Helvetica Thin";
        font-size: 27px;
        line-height: 1;
        color: #fff;
        background: transparent;
        background-color: transparent;
        border: none;
        outline: 0;
        margin: 10px 25px;
        &:hover {
            cursor: pointer;
        }
        @media(max-width:1200px) {
            font-size: 23px;
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

const SectionOne = styled.div`
    background-color: #fff;
    padding: 40px 0;
`

const SectionOneRow = styled.div`
    max-width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    @media(max-width:800px) {
        padding-left: 0;
        padding-right: 0;
    }
`

const SectionOneImage = styled(Img)`
    width: 100%;
    height: auto;
    margin: 0 auto;
    img {
        margin-bottom: 0;
    }
`

const MainSections = styled.div`
    #section_two {
        background-color: #52555b;
    }
    #section_three {
        background-color: #000;
        .gatsby-image-wrapper {
            max-width: 420px;
        }
        @media(max-width:800px) {
            .col-one {
                order: 2;
            }
            .col-two {
                order: 1;
            }
        }
    }
    #section_five {
        background-color: #74777b;
        .gatsby-image-wrapper {
            max-width: 420px;
        }
        @media(max-width:800px) {
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
            h2 {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 40px;
                font-weight: 100;
                line-height: 1.1;
                margin-bottom: 0;
            }
            hr {
                background-color: #fff;
                max-width: 400px;
                margin-top: 5px;
                margin-bottom: 20px;
            }
            li {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 22px;
                line-height: 1.2;
                margin-bottom: 5px;
            }
            @media(max-width:1200px) {
                max-width: 990px;
            }
            @media(max-width:800px) {
                flex-wrap: wrap;
                .col-one,
                .col-two {
                    width: 100%;
                    padding-right: 0;
                    padding-left: 0;
                }
                .col-copy,
                .gatsby-image-wrapper {
                    max-width: 400px !important;
                    margin: 0 auto;
                    margin-bottom: 35px;
                }
            }
        }
    }
    #section_four {
        background-color: #d6d7d6;
        h2,
        li {
            color: #000;
        }
        hr {
            background-color: #000;
        }
    }

`

const SectionSix = styled.div`
    background-color: #000;
    padding: 60px 0;
    padding-bottom: 120px;
`

const SectionSixRow = styled.div`
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    .section-links {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .link-col {
            max-width: 250px;
            width: 100%;
            @media(max-width:1200px) {
                max-width: 215px;
            }
        }
        .plus-col {
            max-width: 45px;
            width: 100%;
            margin-bottom: 10px;
            .gatsby-image-wrapper {
                width: 45px;
                height: 42px;
            }
        }
        @media(max-width:1200px) {
            padding: 0 40px;
        }
        @media(max-width:800px) {
            flex-wrap: wrap;
            .link-col {
                max-width: 100%;
                .gatsby-image-wrapper {
                    margin: 0 auto;
                    margin-bottom: 20px;
                    max-width: 300px;
                }
            }
            .plus-col {
                max-width: 100%;
                .gatsby-image-wrapper {
                    margin: 0 auto;
                    margin-bottom: 20px;
                    max-width: 45px;
                }
            }

        }
    }
    @media(max-width:1200px) {
        max-width: 990px;
    }
`

const SectionSixCopy = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 850px;
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 28px;
        line-height: 38px;
        .freeland {
            color: #5ab3e8;
            font-family: 'Freeland';
            font-size: 72px;
            line-height: 52px;
            padding-top: 15px;
            padding-right: 10px;
        }
    }
`

const SectionSixSub = styled.div`
    padding: 0 20px;
    margin-top: 40px;
    z-index: 1;
    p {
        font-family: "Helvetica Thin";
        color: #8b8f91;
        font-size: 22px;
        letter-spacing: 1px;
        font-weight: 600;
        text-align: center;
    }
`

export default ServicesPage