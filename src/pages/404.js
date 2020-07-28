import React from "react"

import NewsLayout from "../components/news-layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import styled from 'styled-components'

const NotFoundPage = () => (
  <NewsLayout>
    <SEO title="404: Not found" />
    <MainContent>
      <h1>404 Page not found</h1>
      <h2>THE PAGE YOU ARE LOOKING FOR IS NOT FOUND</h2>
      <p>The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site’s homepage and see if you can find what you are looking for.</p>
      <Button to="/">Back to Homepage</Button>
    </MainContent>
  </NewsLayout>
)

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

const Button = styled(Link)`
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
  letter-spacing: 1px;
  transition-duration: .3s;
  &:hover {
    color: #fff;
    background-color: #303030;
  }
`

export default NotFoundPage