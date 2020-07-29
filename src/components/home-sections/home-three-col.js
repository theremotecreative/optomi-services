import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const HomeThreeCol = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 7}}}}) {
                edges {
                    node {
                        title
                        content
                        acf {
                            col_one {
                                col_one_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                col_one_hover {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                              ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                col_one_text
                                col_one_link
                            }
                            col_two {
                                col_two_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                col_two_hover {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                              ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                col_two_text
                                col_two_link
                            }
                            col_three {
                                col_three_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                col_three_hover {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                              ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                col_three_text
                                col_three_link
                            }
                        }
                    }
                }
            }
        }
    `)
    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <ThreeColSection id={"optomi-provalus-section"}>

                <ThreeColContent 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />

                <HoverCols>
                    <HoverCol
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <ImageCol>
                            <BackgroundImg sizes={post.node.acf.col_one.col_one_image.localFile.childImageSharp.sizes} alt={post.node.title} />
                        </ImageCol>
                        <ImageHover>
                            <BackgroundImg sizes={post.node.acf.col_one.col_one_hover.localFile.childImageSharp.sizes} alt={post.node.title} />
                            <div>
                            <h3>{post.node.acf.col_one.col_one_text}</h3>
                            <ViewButton>
                                <a href={post.node.acf.col_one.col_one_link}>View</a>
                            </ViewButton>
                            </div>
                        </ImageHover>
                    </HoverCol>
                    <HoverCol
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <ImageCol>
                            <BackgroundImg sizes={post.node.acf.col_two.col_two_image.localFile.childImageSharp.sizes} alt={post.node.title} />
                        </ImageCol>
                        <ImageHover>
                            <BackgroundImg sizes={post.node.acf.col_two.col_two_hover.localFile.childImageSharp.sizes} alt={post.node.title} />
                            <div>
                            <h3>{post.node.acf.col_two.col_two_text}</h3>
                            <ViewButton>
                                <a href={post.node.acf.col_two.col_two_link}>View</a>
                            </ViewButton>
                            </div>
                        </ImageHover>
                    </HoverCol>
                    <HoverCol
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <ImageCol>
                            <BackgroundImg sizes={post.node.acf.col_three.col_three_image.localFile.childImageSharp.sizes} alt={post.node.title} />
                        </ImageCol>
                        <ImageHover>
                            <BackgroundImg sizes={post.node.acf.col_three.col_three_hover.localFile.childImageSharp.sizes} alt={post.node.title} />
                            <div>
                            <h3>{post.node.acf.col_three.col_three_text}</h3>
                            <ViewButton>
                                <a href={post.node.acf.col_three.col_three_link}>View</a>
                            </ViewButton>
                            </div>
                        </ImageHover>
                    </HoverCol>
                </HoverCols>
                    
            </ThreeColSection>
        ))
    )
}

const ThreeColSection = styled.div`
    background-color: #000;
    padding-top: 60px;
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    border-top: 1px solid #8c9192;
`

const ThreeColContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    h2 {
        font-family: "Helvetica Thin";
        color: #fff;
        text-align: center;
        font-size: 52px;
        font-weight: 300;
        line-height: 1;
        span {
            font-size: 25px;
        }
        @media(max-width:500px) {
            font-size: 32px;
            line-height: 1.1;
        }
    }
    p {
        font-family: "Helvetica Thin";
        font-size: 38px;
        color: #fff;
        font-weight: normal;
        line-height: 40px;
        text-align: center;
        @media(max-width:500px) {
            font-size: 28px;
            line-height: 1.1;
        }
    }
    @media(max-width:1200px) {
        max-width: 990px;
    }
`

const HoverCols = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 30px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media(max-width:1200px) {
        max-width: 990px;
    }
    @media(max-width:1000px) {
        justify-content: center;
    }
    @media(max-width:700px) {
        display: block;
    }
`

const ImageCol = styled.div``

const BackgroundImg = styled(Img)`
    height: 416px;
    width: 312px;
    img {
        margin-bottom: 0;
    }
    @media(max-width:1200px) {
        height: 350px;
        width: 263px;
    }
    @media(max-width:1000px) {
        height: 268px;
        width: 200px;
    }
    @media(max-width:700px) {
        height: 416px;
        width: 312px;
    }
    @media(max-width:500px) {
        height: 268px;
        width: 200px;
    }
`

const ImageHover = styled.div`
    position: absolute;
    width: 312px;
    height: 416px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    left: 0;
    top: 416px;
    transition-duration: .5s;
    > div {
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    h3 {
        font-family: "Helvetica Thin";
        font-size: 25px;
        color: #fff;
        font-weight: 100;
        width: 100%;
        text-align: center;
        z-index: 1;
        margin-bottom: 5px;
    }
    ${BackgroundImg} {
        position: absolute !important;
    }
    @media(max-width:1200px) {
        height: 350px;
        width: 263px;
    }
    @media(max-width:1000px) {
        height: 268px;
        width: 200px;
    }
    @media(max-width:700px) {
        height: 416px;
        width: 312px;
    }
    @media(max-width:500px) {
        height: 268px;
        width: 200px;
    }
`

const HoverCol = styled.div`
    width: 312px;
    position: relative;
    overflow: hidden;
    &:hover {
        ${ImageHover} {
            top: 0;
        }
    }
    @media(max-width:1200px) {
        width: 263px;
    }
    @media(max-width:1000px) {
        width: 200px;
        margin: 20px;
    }
    @media(max-width:700px) {
        width: 312px;
        margin: 20px auto;
    }
    @media(max-width:500px) {
        width: 200px;
    }
`

const ViewButton = styled.div`
    height: 50px;
    width: 50px;
    z-index: 1;
    a {
        font-family: "Helvetica Thin";
        display: inline-block;
        height: 50px;
        width: 50px;
        line-height: 50px;
        border-radius: 50%;
        background-color: #5ab3e8;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        transition-duration: .5s;
        &:hover {
            background-color: #3b3b3b;
        }
    }
`



export default HomeThreeCol