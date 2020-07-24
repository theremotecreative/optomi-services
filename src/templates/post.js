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
            <h1><span>{post.date}</span>{post.title}</h1>
            <p class={"blog-meta"}><span>Posted in </span>
            {post.categories.map(category => (
                  <span>
                      {category.name}
                  </span>
              ))}
              <span> by </span>{post.author.name}</p>
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
  margin-top: 60px;
  article {
    h1 {
      font-family: "Raleway SemiBold";
      font-size: 24px;
      line-height: 1.38;
      color: #303030;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      margin-bottom: 0;
      span {
        color: #bebebe;
        padding-right: 5px;
      }
    }
    p {
      margin-bottom: 22px;
      font-family: "Raleway";
      font-size: 14px;
      line-height: 26px;
      color: #818181;
      a {
        color: #5ab3e8;
        text-decoration: none !important;
      }
      &.blog-meta {
        color: #bebebe;
        font-weight: 500;
        margin-bottom: 18px;
        span {

        }
      }
    }
  }
`

const FeaturedImg = styled(Img)`
    margin-bottom: 25px;
`

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          content
          date(formatString: "DD MMM")
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