import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import "./layout.css"
import PageTransition from 'gatsby-plugin-page-transitions';

import LogoLarge from "../components/logos/logo-large"
import SideMainMenu from "../components/sidebar-menu"
import Footer from "../components/footer"

class BlogLayout extends Component {

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
                <MainLayout className={headerName}>

                    <PageTransition>
                    <MainContent>
                        <HeaderMain>
                            <Link
                                to="/"
                                >
                              <LogoLarge/>
                            </Link>
                            <MenuRight>
                                <button onClick={() => this.toggleMenu()} aria-label="Open">
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
                        <Footer/>
                    </MainContent>
                    </PageTransition>

                    <SidebarMenu>
                        <button onClick={() => this.toggleMenu()} aria-label="Close">X</button>
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
    background-color: #000;
`

const MainContent = styled.div`
    width: 100%;
    position: relative;
    top:0;
    left:0;
    transition-duration: .3s;
    main {
      background-color: #fff;
      padding-top: 100px;
    }
`

const SidebarMenu = styled.div`
    position: fixed;
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
      font-family: "Helvetica Thin";
      background: transparent;
      border: none;
      outline: 0 !important;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
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
  padding: 5px 40px;
  display: flex;
  background-color: #000;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  .gatsby-image-wrapper {
    width: 183px;
    height: 90px;
    img {
      margin-bottom: 0;
    }
    @media(max-width:600px) {
      width: 71px;
      height: 35px;
    }
  }
  @media(max-width:600px) {
    padding: 1.45rem 1.0875rem;
  }
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
    font-family: "Helvetica Thin";
    font-size: 13px;
    line-height: 15px;
    font-weight: 700;
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

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout