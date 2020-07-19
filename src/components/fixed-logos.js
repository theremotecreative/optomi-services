import React from "react"
import styled from "styled-components"

import OptomiLogo from "../components/logos/optomi-logo"
import ProLogo from "../components/logos/provalus-logo"
import SanLogo from "../components/logos/santeka-logo"

const FixedLogos = () => (
  <LogoCol>
    <Optomi>
      <a href="http://optomi.com/" target="_blank" rel="noopener noreferrer"><OptomiLogo/></a>
    </Optomi>
    <Pro>
      <a href="https://provalus.com/" target="_blank" rel="noopener noreferrer"><ProLogo/></a>
    </Pro>
    <San>
      <a href="http://www.santeka.com/" target="_blank" rel="noopener noreferrer"><SanLogo/></a>
    </San>
  </LogoCol>
)

const LogoCol = styled.div`
  position: fixed;
  top: 15px;
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
  border-bottom: 1px solid #fff;
  padding: 10px 0;
  width: 90px;
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
  border-bottom: 1px solid #fff;
  padding: 10px 0;
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
  border-bottom: 1px solid #fff;
  padding: 10px 0;
  width: 90px;
  .gatsby-image-wrapper {
    width: 70px;
    height: 63px;
    margin: 0 auto;
    img {
      margin-bottom: 0;
    }
  }
`

export default FixedLogos