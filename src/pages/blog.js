import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
    <BlogLayout>
      <SEO title="Blog"/>
      <BlogGrid>
        {data.allWordpressPost.edges.map(post => (
          <article>
              <BackgroundImg>
                <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}  />
              </BackgroundImg>
            <PostContent>
                <div class={"categories"}>
                {post.node.categories.map(category => (
                    <p>
                        {category.name}
                    </p>
                ))}
                </div>
              <Link to={`/${post.node.slug}`} style={{ textDecoration: "none" }}>
                <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              </Link>
              <div class={"excerpt"} dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              <p class={"meta"}>
                {post.node.date} | by {post.node.acf.custom_author}
              </p>
              
            </PostContent>
          </article>
        ))}
      </BlogGrid>
    </BlogLayout>
  )

  const BlogGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    article {
        width: 33.33%;
        height: 50vh;
        position: relative;
    }
    @media(max-width:1100px) {
      article {
        width: 50%;
      }
    }
    @media(max-width:767px) {
      article {
        width: 100%;
      }
    }
    @media(max-width:500px) {
      article {
        height: 80vh;
      }
    }
  `

  const BackgroundImg = styled.div`
    position: absolute;
    width: 100%;
    height:50vh;
    top:0;
    left: 0;
    .gatsby-image-wrapper {
        width: 100%;
        height:50vh;
        img {
            margin-bottom: 0;
        }
    }
    @media(max-width:500px) {
        height: 80vh;
        .gatsby-image-wrapper {
          height:80vh;
      }
    }
  `

  const PostContent = styled.div`
    position: absolute;
    width: 100%;
    height:50vh;
    top:0;
    left: 0;
    padding: 0 65px;
    z-index: 2;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 20%, rgba(0,0,0,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .categories {
        display: flex;
        margin-bottom: 23px;
        transform: translateY(72px);
        transition: all .2s;
        > p {
            font-family: "Raleway";
            color: #fff;
            border: 1px solid #fff;
            border-radius: 15px;
            padding: 3px 12px;
            text-transform: uppercase;
            font-size: 10px;
            line-height: 1;
            letter-spacing: 3px;
            margin-bottom: 0;
            margin-right: 5px;
        }
    }
    h3 {
        font-family: "Raleway Bold";
        color: #fff;
        text-transform: none;
        font-size: 36px;
        line-height: 42px;
        font-weight: 700;
        margin-bottom: 18px !important;
        transform: translateY(72px);
        transition: all .2s;
        text-decoration: none !important;
        @media(max-width:500px) {
          font-size: 28px;
          line-height: 1.3;
        }
        @media(max-width:370px) {
          font-size: 22px;
        }
    }
    .excerpt {
        p {
            font-family: "Raleway";
            color: #fff;
            font-size: 14px;
            visibility: hidden;
            opacity: 0;
            margin-bottom: 20px;
            transition: opacity .2s cubic-bezier(.3,.67,.24,.86),visibility .2s;
        }
    }
    .meta {
        font-family: "Raleway SemiBold";
        color: #fff;
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 3px;
    }
    &:hover {
        .categories {
            transform: translateY(0px);
        }
        h3 {
            transform: translateY(0px);
        }
        .excerpt {
            p {
                visibility: visible;
                opacity: 1;
            }
        }
    }
    @media(max-width:500px) {
      height: 80vh;
  }
  `

  
  export default BlogPage
  
  export const query = graphql`
    query {
      allWordpressPost {
        edges {
          node {
            title
            excerpt
            slug
            categories {
                name
              }
            date(formatString: "MMMM DD, YYYY")
            featured_media {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 1200) {
                      ...GatsbyImageSharpSizes
                    }
                }
              }
            }
            acf {
              custom_author
            }
          }
        }
      }
    }
  `