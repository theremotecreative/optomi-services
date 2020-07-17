import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const HomeSimple = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 6}}}}) {
                edges {
                    node {
                        content
                    }
                }
            }
        }
    `)
    
    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MiddleSection>

                <MiddleContent 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />
                    
            </MiddleSection>
        ))
    )
}

const MiddleSection = styled.div`
    background-color: #000;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    position: relative;
    z-index: 1;
`

const MiddleContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    .home-black-background {
        padding-top: 80px;
        padding-bottom: 80px;
        p {
            font-family: "Helvetica Thin";
            color: #61b1e8;
            font-size: 35px;
            line-height: 35px;
            margin-bottom: 0;
        }
    }
`

export default HomeSimple