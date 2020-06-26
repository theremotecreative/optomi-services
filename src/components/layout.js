import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import "./layout.css"

import FixedLogos from "../components/fixed-logos"
import HeaderLogo from "../components/header-logo"
import SideMainMenu from "../components/sidebar-menu"

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    
    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const children = this.props.children
        let headerName = "mainLayout";
        if (this.state.isOpen) {
          headerName += ' mobileOpen';
        }
        return (
            <FullPage>
                <FixedLogos/>
                <MainLayout className={headerName}>

                    <MainContent>
                        <HeaderMain>
                            <LogoRight>
                                <Link
                                to="/"
                                >
                                <HeaderLogo/>
                                </Link>
                            </LogoRight>
                            <MenuRight>
                                <button onClick={() => this.toggleMenu()}>
                                    <p>menu</p>
                                    <Hamburger>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </Hamburger>
                                </button> 
                            </MenuRight>
                        </HeaderMain>

                        <main>{children}</main>
                        <footer>
                          © {new Date().getFullYear()}, Built with
                          {` `}
                          <a href="https://www.gatsbyjs.org">Gatsby</a>
                        </footer>
                    </MainContent>

                    <SidebarMenu>
                        <button onClick={() => this.toggleMenu()}>X</button>
                        <SideMainMenu/>
                    </SidebarMenu>

                </MainLayout>
            </FullPage>
        );
    }
}

const FullPage = styled.div`
    position: relative;
    overflow: hidden;
`

const MainContent = styled.div`
    width: 100vw;
    position: relative;
    top:0;
    left:0;
    transition-duration: .3s;
`

const SidebarMenu = styled.div`
    position: absolute;
    width: 270px;
    height: 100vh;
    top: 0;
    right: -270px;
    background-color: #1b1b1b;
    transition-duration: .3s;
    button {
      position: absolute;
      top: 29px;
      right: 25px;
      font-family: sans-serif;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 14px;
      transition-duration: .5s;
      &:hover {
        cursor: pointer;
        transform: rotate(180deg);
      }
    }
`

const HeaderMain = styled.div`
  position: absolute;
  margin: 0px auto;
  max-width: 100%;
  width: 100%;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
`

const MainLayout = styled.div`
  &.mobileOpen {
    ${MainContent} {
      left: -270px;
    }
    ${SidebarMenu} {
      right: 0;
    }
  }
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
  margin-right: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    &:focus {
      outline: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout