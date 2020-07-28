import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import "./layout.css"
import PageTransition from 'gatsby-plugin-page-transitions';

import Footer from "../components/footer"

class NewsLayout extends Component {

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
                        <main>{children}</main>
                        <Footer/>
                    </MainContent>
                    </PageTransition>

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

const MainLayout = styled.div`

`

NewsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NewsLayout