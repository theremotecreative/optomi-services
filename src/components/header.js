import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import FixedLogos from "../components/fixed-logos"
import HeaderLogo from "../components/header-logo"

const Header = () => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `0`,
      position: 'absolute',
      width: '100%',
    }}
  >
    <FixedLogos/>
    <HeaderMain>
      <LogoRight>
        <Link
          to="/"
        >
          <HeaderLogo/>
        </Link>
      </LogoRight>
      <MenuRight>
          <p>menu</p>
          <Hamburger>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
      </MenuRight>
    </HeaderMain>
  </header>
)

const HeaderMain = styled.div`
  margin: 0px auto;
  max-width: 100%;
  width: 100%;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const LogoRight = styled.div`
  padding-right: 15px;
  .gatsby-image-wrapper {
    width: 71px;
    height: 35px;
    img {
      margin-bottom: 0;
    }
  }
`

const MenuRight = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  p {
    font-size: 15px;
    line-height: 15px;
    color: #fff;
    margin-bottom: 0;
  }
`

const Hamburger = styled.div`
  width: 32px;
  height: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  div {
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
`

export default Header
