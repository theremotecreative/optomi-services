import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Modal from 'react-modal';

class LocationsSection extends Component {

    constructor(props) {
      super(props);
      this.state = { activeModal:99 };
    }
    
    handleOpenModal (index) {
        let num = index;
        this.setState({ activeModal: num });
    }
    
    handleCloseModal () {
        this.setState({ activeModal: 99 });
    }
    
    render () {
        const { data } = this.props; 

      return (
          <LocationsMain>
            {data.allWordpressWpLocation.edges.map((post, i) => (
            <div>
                <Location>
                    <button 
                    id={"selector_" + i}
                    onClick={() => this.handleOpenModal(i)}
                    aria-label="Open"
                    >
                        <h3>{post.node.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                    </button>
                </Location>
                <CustomModal 
                    id={"modal_" + i}
                    className= {i === this.state.activeModal ? "active" : "inactive"}
                    isOpen={i === this.state.activeModal ? true : false}
                    data-sal="zoom-in"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                >
                    <ModalContent>
                    <button onClick={() => this.handleCloseModal()} class={"close"} aria-label="Close">×</button>
                    <iframe title="location map" src={post.node.acf.iframe} width={"100%"} height={"650"} frameborder={"0"} style={{ border: "0" }} allowfullscreen={""} aria-hidden={"false"}></iframe>
                    </ModalContent>
                </CustomModal>
            </div>
            ))}
          </LocationsMain>
      );
    }
  }

const LocationsMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
      width: 50%;
      text-align: center;
  }
  @media(max-width:767px) {
    max-width: 500px;
    margin: 0 auto;
    > div {
      width: 100%;
    }
  }
`
const Location = styled.div`
  button {
      background: transparent;
      border: none;
      outline: 0;
      text-align: left;
      margin: 0 auto;
      margin-bottom: 35px;
      max-width: 350px;
      width: 100%;
      p,
      h3 {
        font-family: "Helvetica Thin";
        font-size: 20px;
        font-weight: 100;
        color: #fff;
        letter-spacing: 1px;
        line-height: 28px;
        transition-duration: .3s;
        margin-bottom: 0;
      }
      &:hover {
        cursor: pointer;
        p,
        h3 {
        color: #61b1e8;
      }
    }
  }
`

const CustomModal = styled(Modal)`
    position: fixed;
    z-index: 1;
    padding: 20px;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    padding-bottom: 40px;
    border: 1px solid #888;
    max-width: 1440px;
    width: 100%;
    position: relative;
    border-radius: 20px;
    .close {
        font-family: "Raleway Bold";
            line-height: 28px;
            color: #aaaaaa;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: transparent;
            border: none;
            outline: 0;
            padding: 0;
            &:hover {
                cursor: pointer;
                color: #000;
            }
    }
    @media(max-width:767px) {
      iframe {
        height: 400px;
      }
    }
`
  
  export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpLocation {
                edges {
                    node {
                        title
                        content
                        acf {
                            iframe
                        }
                    }
                }
            }
        }
      `}
      render={data => <LocationsSection data={data} {...props} />}
    />
  );