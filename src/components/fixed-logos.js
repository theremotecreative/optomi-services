import React from "react"
import styled from "styled-components"

import OptomiLogo from "../components/logos/optomi-logo"
import ProLogo from "../components/logos/provalus-logo"
import SanLogo from "../components/logos/santeka-logo"

const FixedLogos = () => (
  <LogoCol>
    <Optomi>
      <a href="http://optomi.com/" target="_blank" rel="noopener noreferrer" aria-label="Link"><OptomiLogo/></a>
    </Optomi>
    <Divider style={{ marginTop: '10px', marginBottom: '10px' }}/>
    <Pro>
      <a href="https://provalus.com/" target="_blank" rel="noopener noreferrer" aria-label="Link"><ProLogo/></a>
    </Pro>
    <Divider style={{ marginTop: '8px', marginBottom: '0px' }}/>
    <San>
      <a href="http://www.santeka.com/" target="_blank" rel="noopener noreferrer" aria-label="Link"><SanLogo/></a>
    </San>
    <Divider/>
  </LogoCol>
)

const LogoCol = styled.div`
  position: fixed;
  top: 20px;
  left: 5px;
  width: 90px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 101;
  @media(max-width:700px) {
    display: none;
  }
`
const Optomi = styled.div`
  padding: 0;
  width: 90px;
  margin-left: 10px;
  .gatsby-image-wrapper {
    width: 62px;
    height: 40px;
    margin: 0 auto;
    img {
      margin-bottom: 0;
    }
  }
`
const Pro = styled.div`
  padding: 0;
  width: 90px;
  .gatsby-image-wrapper {
    width: 50px;
    height: 43px;
    margin: 0 auto;
    img {
      margin-bottom: 0;
    }
  }
`
const San = styled.div`
  padding: 0;
  width: 90px;
  margin-left: 5px;
  .gatsby-image-wrapper {
    width: 70px;
    height: 63px;
    margin: 0 auto;
    img {
      margin-bottom: 0;
    }
  }
`

const Divider = styled.hr`
  background-color: #aaa;
  width: 50px;
`

export default FixedLogos