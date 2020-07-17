import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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
            <CanvasSection>

                <CanvasContent dangerouslySetInnerHTML={{ __html: post.node.content }}/>

                <ArrowIcon>
                    <a href={post.node.acf.banner_arrow_link}><FaChevronDown size={42}/></a>
                </ArrowIcon>
                    
            </CanvasSection>
        ))
    )
}

const CanvasSection = styled.div`
    background-color: #ffffff;
    padding-top: 120px;
    padding-bottom: 100px;
    text-align: center;
    position: relative;
`

const CanvasContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    p {
        font-family: "Helvetica Thin";
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 50px;
        line-height: 40px;
        &.canvas-buttons {
            a {
                width: 178px;
                display: inline-block;
                color: #fff;
                background-color: rgba(0,0,0,1);
                font-size: 20px;
                font-weight: 500;
                margin: 15px;
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
                    background-color: rgba(0,0,0,0);
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
    a {
        color: #000;
    }
`

export default HomeCanvas