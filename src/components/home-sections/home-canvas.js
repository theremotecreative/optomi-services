import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll';

import ParticleBG from "../../components/particle-bg"
import { FaChevronDown } from 'react-icons/fa'

const HomeCanvas = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 4}}}}) {
                edges {
                    node {
                        content
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
            <CanvasSection id={"canvas_section"}>

                <ParticleBG/>

                <CanvasContent 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />

                <ArrowIcon>
                    <button onClick={() => scrollTo('#home-identity-row')} aria-label="Scroll"><FaChevronDown size={42}/></button>
                </ArrowIcon>
                    
            </CanvasSection>
        ))
    )
}

const CanvasSection = styled.div`
    background-color: #ffffff;
    padding-top: 120px;
    padding-bottom: 80px;
    text-align: center;
    position: relative;
    z-index: 1;
`

const CanvasContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    p {
        font-family: "Helvetica Thin";
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 40px;
        line-height: 40px;
        &.canvas-buttons {
            a {
                width: 178px;
                display: inline-block;
                color: #fff;
                background-color: rgba(0,0,0,1);
                font-size: 20px;
                font-weight: 500;
                margin: 15px 30px;
                padding: 18px 0;
                z-index: 7;
                line-height: 17px;
                font-weight: 400;
                border: 2px solid #000;
                cursor: pointer;
                text-align: inherit;
                letter-spacing: 1px !important;
                text-decoration: none;
                transition-duration: .3s;
                &:hover {
                    color: #000;
                    background-color: #fff;
                }
            }
        }
    }
    @media(max-width:1200px) {
        max-width: 990px;
    }
`

const ArrowIcon = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px;
    text-align: center;
    button {
        color: #000;
        background-color: transparent;
        border: none;
        outline: 0;
        &:hover {
            cursor: pointer;
        }
    }
`

export default HomeCanvas