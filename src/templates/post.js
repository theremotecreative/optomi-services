import React from "react"
import BlogLayout from "../components/blog-layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <BlogLayout>
      <BlogContainer>
          <article>
            <FeaturedImg sizes={post.featured_media.localFile.childImageSharp.sizes} alt={post.title} />
            <h1>{post.title}</h1>
            <p>Post Meta here</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          <p>Contact Form here</p>
      </BlogContainer>
    </BlogLayout>
  )
}

const BlogContainer = styled.div`
  max-width: 1140px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
`

const FeaturedImg = styled(Img)`
  img {
    margin-bottom: 25px;
  }
`

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          content
          date
          author {
            name
          }
          categories {
            name
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
`