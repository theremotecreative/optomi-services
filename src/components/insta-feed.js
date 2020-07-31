import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import styled from 'styled-components'

const InstaFeed = () => (
  <StaticQuery
    query={graphql`
        query {
            allInstaNode(limit: 6, sort: {fields: timestamp, order: DESC}) {
            edges {
                node {
                    id
                    likes
                    comments
                    mediaType
                    preview
                    original
                    timestamp
                    caption
                    localFile {
                        childImageSharp {
                            sizes(maxWidth: 300) {
                                ...GatsbyImageSharpSizes
                              }
                        }
                    }
                    thumbnails {
                        src
                        config_width
                        config_height
                    }
                    dimensions {
                        height
                        width
                    }
                }
            }
            }
        }
    `}
    render={(data) => (
      <InstaFlex>
        {
          data.allInstaNode.edges.map((item, i) => (
            item.node.localFile ? (
              <InstaImage key={i}>
                  <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                  <Image
                    fluid={item.node.localFile.childImageSharp.sizes}
                    />
                  </a>
              </InstaImage>
            ) : (<div></div>)
          ))
        }
      </InstaFlex>
    )}
  />
);

const InstaFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width:700px) {
        max-width: 350px;
        margin: 0 auto;
        justify-content: center;
    }
`

const InstaImage = styled.div`
    width: 75px;
    height: 75px;
    margin-right: 10px;
    margin-bottom: 10px;
    @media(max-width:1200px) {
        width: 105px;
        height: 105px;
    }
    @media(max-width:980px) {
        width: 50px;
        height: 50px;
    }
    @media(max-width:700px) {
        width: 105px;
        height: 105px;
    }
    .gatsby-image-wrapper {
        width: 75px !important;
        height: 75px !important;
        overflow: hidden;
        @media(max-width:1200px) {
            width: 105px !important;
            height: 105px !important;
        }
        @media(max-width:980px) {
            width: 50px !important;
            height: 50px !important;
        }
        @media(max-width:700px) {
            width: 105px !important;
            height: 105px !important;
        }
        img {
            object-fit: cover;
            margin-bottom: 0; 
        }
    }
`

export default InstaFeed; 