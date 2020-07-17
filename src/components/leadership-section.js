import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import { FaLinkedin } from 'react-icons/fa'

class LeadershipSection extends Component {

    constructor(props) {
        super(props);
        this.state = { activeSlide: 0 };
    }

    clickSelector(index) {
        let num = index;
        this.setState({ activeSlide: num});
    }

    render() {
        const { data } = this.props; 

        return(
            <LeadershipFull>
                <LeadershipTop>
                    <div 
                        className={"flex-box"}
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <div className={"left-col"}>
                            <h2>Leadership</h2>
                        </div>
                        <div className={"right-col"}>
                            <p>We are a team of innovative thinkers, industry disruptors and refreshingly enterprising strategists influencing a more purpose-driven world.</p>
                        </div>
                    </div>
                </LeadershipTop>
                <LeadershipMenu>
                    {data.allWordpressWpTeamMember.edges.map((post, i) => (
                        <LeadershipLink>
                            <button id={"selector_" + i} class={"team-selector"} onClick={() => this.clickSelector(i)}>{post.node.acf.menu_title}</button>
                        </LeadershipLink>
                    ))}
                </LeadershipMenu>
                <LeadershipSlider>
                    {data.allWordpressWpTeamMember.edges.map((post, i) => (
                        <LeadershipSlide id={"slide_" + i} className= {i === this.state.activeSlide ? "active" : "inactive"}>
                            <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                            <div class={"slide-overlay"}>
                                <div class={"slide-row"}>
                                    <div class={"slide-content"}>
                                        <h3>{post.node.title}</h3>
                                        <p class={"full-title"}>{post.node.acf.full_title}</p>
                                        <hr/>
                                        <MemberCopy dangerouslySetInnerHTML={{ __html: post.node.content }}></MemberCopy>
                                        <hr/>
                                        <a href={post.node.acf.linkedin_link} target="_blank" rel="noopener noreferrer"><FaLinkedin/>LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </LeadershipSlide>
                    ))}
                </LeadershipSlider>
            </LeadershipFull>
        );
    }
}

const LeadershipFull = styled.div`
    position: relative;
    z-index: 1;
`

const LeadershipTop = styled.div`
    background-color: #8b8f91;
    .flex-box {
        max-width: 1140px;
        width: 100%;
        padding: 60px 20px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .left-col {
            margin-right: 30px;
            h2 {
                font-family: "Helvetica Thin";
                color: #fff;
                font-weight: normal;
                font-size: 55px;
                line-height: 55px;
                text-transform: capitalize;
                font-weight: 100;
                margin-bottom: 0;
            }
        }
        .right-col {
            p {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 0;
            }
        }
    }
`

const LeadershipMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const LeadershipLink = styled.div`
    background-color: #52555b;
    align-self: stretch;
    flex: 1;
    button {
        font-family: "Helvetica Thin";
        background-color: transparent;
        height: 100%;
        width: 100%;
        text-align: center;
        border: none;
        outline: 0;
        padding: 20px;
        color: #fff;
        &:hover {
            cursor: pointer;
        }
    }
    &:hover {
        background-color: #63666b;
    }
`
const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100vw;
    img {
        margin-bottom: 0;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }
`

const LeadershipSlider = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const MemberCopy = styled.div``

const LeadershipSlide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    .slide-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: rgba(0,0,0,.6);
        .slide-row {
            max-width: 1140px;
            width: 100%;
            padding-right: 20px;
            padding-left: 20px;
            margin: 0 auto;
            display: flex;
        }
        .slide-content {
            z-index: 1;
            h3 {
                font-family: "Helvetica Thin";
                font-size: 30px;
                line-height: 38px;
                color: #fff;
                font-weight: 100;
                margin: 0;
                margin-bottom: 5px;
            }
            .full-title {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 18px;
                line-height: 22px;
                margin-bottom: 0;
            }
            hr {
                margin-top: 15px;
                margin-bottom: 15px;
                background-color: #ffffff;
                height: 1px;
                width: 32%;
            }
            ${MemberCopy} {
                p {
                    font-family: "Helvetica Thin";
                    color: #fff;
                    margin-bottom: 0;
                }
            }
            a {
                font-family: "Helvetica Thin";
                color: #5ab3e8;
                text-decoration: none !important;
                display: flex;
                align-items: center;
                svg {
                    margin-right: 5px;
                }
            }
        }
    }
    &.active {
        opacity: 1;
        visibility: visible;
    }
    &.inactive {
        opacity: 0;
        visibility: hidden;
    }
    &:first-child {
        .slide-row {
            justify-content: flex-end;
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpTeamMember {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            full_title
                            menu_title
                            linkedin_link
                        }
                    }
                }
            }
        }
      `}
      render={data => <LeadershipSection data={data} {...props} />}
    />
  );