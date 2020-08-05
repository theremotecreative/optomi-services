import React from "react"
import NewsLayout from "../components/news-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

import PostFooter from "../components/post-footer"

const NewsPost = ({ data }) => (
    <NewsLayout>
      <SEO 
        title={data.wordpressWpNews.acf.meta_title} 
        description={data.wordpressWpNews.acf.meta_description}
        image={data.wordpressWpNews.featured_media.localFile.childImageSharp.sizes}
        />
      <BlogContainer>
          <article>
            <FeaturedImg sizes={data.wordpressWpNews.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpNews.title} />
            <h1><span>{data.wordpressWpNews.date}</span>{data.wordpressWpNews.title}</h1>
            <p class={"blog-meta"}><span>Posted by </span>{data.wordpressWpNews.acf.custom_author}</p>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressWpNews.content }} />
          </article>
          <PostFooter/>
      </BlogContainer>
    </NewsLayout>
)

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

export default NewsPost

export const query = graphql`
query($id: Int!) {
  wordpressWpNews(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMM")
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
        custom_author
        meta_title
        meta_description
      }
    }
  }
`