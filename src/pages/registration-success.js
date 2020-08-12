import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import NewsLayout from "../components/news-layout"
import SEO from "../components/seo"
import styled from 'styled-components'


const SuccessPage = () => {

  const data = useStaticQuery(graphql`
  query {
      allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 22}}}}) {
          edges {
              node {
                  acf {
                      event_date
                      ics_file {
                        url {
                          source_url
                        }
                      }
                      google_link
                  }
              }
          }
      }
  }
`)

return(
        
  data.allWordpressWpCustomPage.edges.map(post => (

    <NewsLayout>
      <SEO title="Registration Success" />
      <MainContent>
        <h1>Thank you for Registering for our Event</h1>
        <h2>Save the Date:</h2>
        <WebinarDate>
            <p>{post.node.acf.event_date}</p>
          </WebinarDate>
        <Buttons>
          <a href={post.node.acf.ics_file.url.source_url} aria-label="Calendar Link">Outlook Calendar</a>
          <a href={post.node.acf.google_link} target="_blank" rel="noopener noreferrer" aria-label="Calendar Link">Google Calendar</a>
        </Buttons>
      </MainContent>
    </NewsLayout>
    ))
    )
}
  
  const MainContent = styled.div`
    background-color: #fff;
    padding: 100px 20px;
    text-align: center;
    h1 {
      font-family: "Raleway";
      font-size: 20px;
      text-transform: uppercase;
      color: #303030;
      margin-bottom: 100px;
    }
    h2 {
      font-family: "Raleway";
      font-size: 32px;
      color: #303030;
      margin-bottom: 20px;
    }
    p {
      font-family: "Raleway";
      color: #818181;
      font-size: 14px;
      margin-bottom: 35px;
    }
  `

  const WebinarDate = styled.div`
    padding: 0 20px;
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        font-size: 29px;
        color: #000;
        font-weight: bold;
        line-height: 1.4;
        padding: 22px 75px;
        border: 5px solid #000;
        display: inline-block;
        letter-spacing: 5px;
        text-transform: uppercase;
        max-width: 575px;
    }
    @media(max-width:480px) {
        p {
            padding: 20px;
            font-size: 20px;
        }
    }
`
  
  const Buttons = styled.div`
    display: flex;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    a {
      font-family: "Raleway";
      display: inline-block;
      margin: 0 auto;
      text-align: center;
      padding: 0 23px;
      border: 2px solid #303030;
      font-size: 13px;
      height: 39px;
      line-height: 39px;
      color: #303030;
      text-transform: uppercase;
      text-decoration: none !important;
      letter-spacing: 1px;
      transition-duration: .3s;
      &:hover {
        color: #fff;
        background-color: #303030;
      }
    }
  `
  
  export default SuccessPage