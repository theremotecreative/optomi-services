import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Modal from 'react-modal';
import SEO from "../components/seo"
import WebinarLayout from "../components/webinar-layout"
import RegisterForm from "../components/register-form"

class BioPage extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
        const { data } = this.props; 
        
        return (
            <WebinarLayout>
                {data.allWordpressWpCustomPage.edges.map(post => (
                    <div>
                        <SEO 
                        title={post.node.acf.meta_title} 
                        description={post.node.acf.meta_description}
                        image={post.node.featured_media.localFile.childImageSharp.sizes}
                        />
                        <div
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <WebinarImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                        </div>
                        <WebinarBio>
                            <h1
                            data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >{post.node.acf.speaker_name}</h1>
                            <hr
                            data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            />
                            <h3
                            data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >{post.node.acf.speaker_title}</h3>
                            <div>
                                <SpeakerImg sizes={post.node.acf.speaker_image.localFile.childImageSharp.sizes} alt={post.node.acf.speaker_name} />
                                <MainBio dangerouslySetInnerHTML={{ __html: post.node.content}}></MainBio>
                            </div>
                            <RegisterButton
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <button onClick={this.handleOpenModal}>Click Here to Register<br/><span>(Free)</span></button>
                            </RegisterButton>
                        </WebinarBio>
                        <CustomModal 
                            isOpen={this.state.showModal}
                            contentLabel="Minimal Modal Example"
                        >
                            <ModalContent>
                                <button onClick={this.handleCloseModal} class={"close"}>×</button>
                                <h2>Register Now</h2>
                                <RegisterForm/>
                            </ModalContent>
                        </CustomModal>
                        <div type="hidden" style={{ display: 'none' }}>
                        <form
                            name="Register"
                            method="post"
                            action="/registration-success/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input type="hidden" name="form-name" value="Register" aria-label="Input"/>
                            <p class={"hidden"}>
                                <label>
                                Don’t fill this out:{" "}
                                <input name="bot-field" aria-label="Input" />
                                </label>
                            </p>
                            <p class={"full"}>
                                <label htmlFor="name">
                                Name
                                <input type="text" name="name" placeholder="Enter your name" aria-label="Input" required/>
                                </label>
                            </p>
                            <p class={"full"}>
                                <label  htmlFor="title">
                                Title
                                <input type="text" name="title" placeholder="Enter your title" aria-label="Input" required/>
                                </label>
                            </p>
                            <p class={"full"}>
                                <label  htmlFor="company">
                                Company
                                <input type="text" name="company" placeholder="Enter your company" aria-label="Input" required/>
                                </label>
                            </p>
                            <p class={"full"}>
                                <label  htmlFor="email">
                                Email
                                <input type="email" name="email" placeholder="Enter your email" aria-label="Input" required/>
                                </label>
                            </p>
                            <p class={"button"}>
                                <button type="submit" class={"submit"}>Send</button>
                            </p>
                            </form>
                        </div>
                    </div>
                ))}
            </WebinarLayout>
        );
    }
}


const WebinarImg = styled(Img)`
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 50px;
`

const WebinarBio = styled.div`
    max-width: 890px;
    width: 100%;
    padding: 50px 20px;
    margin: 0 auto;
    p {
        font-family: "Helvetica Thin";
        font-size: 30px;
        line-height: 1.5;
        color: #fff;
        margin-bottom: 30px;
        @media(max-width:480px) {
            font-size: 20px;
        }
    }
    h1 {
        font-size: 74px;
        letter-spacing: 9px;
        font-weight: 800;
        font-family: auto;
        color: #fff;
        text-transform: capitalize;
        position: relative;
        letter-spacing: 5px;
        margin-bottom: 0;
        @media(max-width:480px) {
            font-size: 32px;
        }
    }
    hr {
        background-color: #fff;
        height: 2.5px;
        max-width: 65%;
        width: 100%;
        margin: 15px 0;
    }
    h3 {
        font-family: 'Antonio';
        font-weight: bold;
        font-style: normal;
        font-size: 50px;
        line-height: 1.4;
        max-width: 850px;
        margin: 40px auto;
        letter-spacing: 3px;
        color: #fff;
        text-transform: uppercase;
        @media(max-width:480px) {
            font-size: 30px;
        }
    }
`

const SpeakerImg = styled(Img)`
    float: left;
    margin-right: 20px;
    margin-top: 5px;
    width: 427px;
    @media(max-width:800px) {
        float: none;
        max-width: 427px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`

const MainBio = styled.p`
    color: #fff;
`


const RegisterButton = styled.div`
    padding: 0 20px;
    text-align: center;
    margin: 50px 0;
    button {
        font-family: "Raleway";
        padding: 42px 34px;
        display: inline-block;
        background: #67B1E2;
        color: #fff;
        border: 7px solid white;
        font-size: 31px;
        line-height: 1.3;
        font-weight: bold;
        font-style: italic;
        letter-spacing: 5px;
        transition: all ease-in-out .3s;
        text-align: center;
        outline: 0;
        text-transform: uppercase;
        span {
            text-transform: capitalize;
        }
        &:hover {
            background: #fff;
            color: #67B1E2;
            cursor: pointer;
        }
        @media(max-width:480px) {
            font-size: 20px;
            padding: 20px;
        }
    }
`

const CustomModal = styled(Modal)`
    position: fixed;
    z-index: 1;
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
    border: 1px solid #888;
    width: 50%;
    position: relative;
    @media(max-width:1200px) {
        width: 75%;
    }
    @media(max-width:900px) {
        width: 90%;
    }
    form {
        width: 60%;
        margin: 0 auto;
        @media(max-width:800px) {
            width: 100%;
        }
    }
    h2 {
        font-family: "Raleway";
        text-align: center;
        margin-bottom: 30px;
        font-size: 30px;
        line-height: 1.25em;
    }
    p {
        &.hidden {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            height: 0;
            width: 0;
            z-index: -1;
        }
        width: 50%;
        display: inline-block;
        padding: 0 15px;
        @media(max-width:470px) {
            width: 100%;
        }
        &.full {
            width: 100%;
        }
        &.button {
            width: 100%;
            text-align: center;
        }
        label {
            font-family: "Raleway";
            font-size: 14px;
            line-height: 26px;
            font-weight: 600;
            color: #000;
        }
        input {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            &:placeholder {
                color: #aaa;
            }
        }
        select {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            background: transparent;
        }
        textarea {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            &:placeholder {
                color: #aaa;
            }
        }
    }
    button {
        &.close {
            font-family: "Raleway Bold";
            line-height: 28px;
            color: #aaaaaa;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            top: 20px;
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
        &.submit {
            background: #fff;
            color: #0c62fb;
            font-size: 16px;
            display: inline-block;
            min-width: 6.5rem;
            cursor: pointer;
            text-align: center;
            border: .1rem solid #0c62fb;
            font-family: "Raleway";
            transition: all 0.2s ease;
            border-radius: 0;
            padding: 10px;
            margin: 0 auto;
            &:hover {
                color: #fff;
                background: #0c62fb;
                cursor: pointer;
                }
            }
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 23}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 600) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            speaker_name
                            speaker_title
                            speaker_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 427) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            meta_title
                            meta_description
                        }
                    }
                }
            }
        }
      `}
      render={data => <BioPage data={data} {...props} />}
    />
  );