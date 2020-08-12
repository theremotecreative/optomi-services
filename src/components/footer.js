import React from "react"
import styled from "styled-components"

import FooterLogo from "../components/logos/footer-logo"
import InstaFeed from "../components/insta-feed"
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => (
    <FooterMain>
      <FooterRow>
        <FooterCol>
            <FooterLogo/>
            <h4>Headquarters</h4>
            <p>One Glenlake Parkway<br/>
                Suite 1250<br/>
                Atlanta, Ga 30328<br/>
                www.optomi.com<br/>
                678-250-0820</p>
            <div class={"socials"}>
                <a href="https://twitter.com/OptomiServices" target="_blank" rel="noopener noreferrer" aria-label="Link"><FaTwitter/></a>
                <a href="https://www.linkedin.com/company/27003541/" target="_blank" rel="noopener noreferrer" aria-label="Link"><FaLinkedinIn/></a>
                <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer" aria-label="Link"><FaInstagram/></a>
            </div>
        </FooterCol>
        <FooterCol>
            <h4>News</h4>
            <ul>
                <li><a href="https://optomi.com/press/" target="_blank" rel="noopener noreferrer">Optomi press</a></li>
                <li><a href="http://www.linkedin.com/company/optomi?trk=tabs_biz_home" target="_blank" rel="noopener noreferrer">Optomi on LinkedIn</a></li>
                <li><a href="https://www.linkedin.com/company-beta/16182234/" target="_blank" rel="noopener noreferrer">Provalus on LinkedIn</a></li>
                <li><a href="https://www.linkedin.com/company/santekahealthcaretalent" target="_blank" rel="noopener noreferrer">Santeka on LinkedIn</a></li>
                <li><a href="https://optomi.com/press/awards/" target="_blank" rel="noopener noreferrer">Optomi awards and recognitions</a></li>
            </ul>
        </FooterCol>
        <FooterCol>
            <h4>Connect with Us</h4>
            <ul>
                <li><a href="https://optomi.com/" target="_blank" rel="noopener noreferrer">Optomi website</a></li>
                <li><a href="https://www.optomi.com/services" target="_blank" rel="noopener noreferrer">Optomi services</a></li>
                <li><a href="https://www.provalus.com/" target="_blank" rel="noopener noreferrer">Provalus website</a></li>
                <li><a href="http://www.santeka.com/" target="_blank" rel="noopener noreferrer">Santeka</a></li>
            </ul>
        </FooterCol>
        <FooterCol>
            <h4>Experience OPS</h4>
            <InstaFeed/>
        </FooterCol>
      </FooterRow>
        <FooterBottom>
            <p>© <a href="https://optomiservices.com/" target="_blank" rel="noopener noreferrer">OPTOMI PROFESSIONAL SERVICES.</a> | All rights reserved.</p>
        </FooterBottom>
    </FooterMain>
)

const FooterMain = styled.div`
    background-color: #262626;
    padding-top: 50px;
    position: relative;
    z-index: 1;
`

const FooterRow = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
    margin: 0 auto;
    display: flex;
    @media(max-width:1200px) {
        max-width: 990px;
    }
    @media(max-width:700px) {
        flex-wrap: wrap;
    }
`

const FooterCol = styled.div`
    width: 25%;
    .gatsby-image-wrapper {
        width: 150px;
        height: 74px;
        margin-bottom: 15px;
        @media(max-width:700px) {
            margin: 0 auto;
            margin-bottom: 15px;
        }
    }
    h4 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 15px;
        line-height: 1;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        font-family: "Helvetica Thin";
        color: #818181;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 600;
    }
    a {
        font-family: "Helvetica Thin";
        color: #818181;
        text-decoration: none !important;
        transition-duration: .3s;
        font-weight: 600;
        &:hover {
            color: #fff;
        }
    }
    ul {
        list-style: none;
        padding-left: 0;
        margin-left: 0;
        li {
            font-family: "Helvetica Thin";
            font-size: 14px;
            margin-bottom: 15px;
        }
    }
    svg {
        color: #818181;
        margin-right: 15px;
    }
    @media(max-width:700px) {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }
`

const FooterBottom = styled.div`
    background-color: #1b1b1b;
    padding: 10px 20px;
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        font-size: 12px;
        line-height: 22px;
        color: #818181;
        margin-bottom: 0;
        a {
            color: #5ab3e8;
            font-weight: 600;
            text-decoration: none !important;
        }
    }
`

export default Footer