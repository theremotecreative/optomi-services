import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';

import ContactForm from "../components/contact-form"

class PostFooter extends Component {
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
        //const { data } = this.props; 
        
      return (
          <FooterRow>
              <div class={"footer-copy"}>
                  <h3>Let's drive tomorrow's technology together.</h3>
              </div>
            <div class={"contact-button"}>
            <button onClick={this.handleOpenModal} aria-label="Open">Let's Talk</button>
            </div>
            <CustomModal 
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
            >
                <ModalContent>
                    <button onClick={this.handleCloseModal} class={"close"} aria-label="Close">×</button>
                    <h2>Let's Talk</h2>
                    <ContactForm/>
                </ModalContent>
            </CustomModal>
            <div type="hidden" style={{ display: 'none' }}>
                <form name="Contact" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                    <input type="hidden" name="form-name" value="Contact" aria-label="Input"/>
                    <p class="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                    </p>
                    <p>
                        <label htmlFor="name">Name* <input type="text" name="name" placeholder="Enter your name" aria-label="Input" required/></label>   
                    </p>
                    <p>
                        <label htmlFor="country">Country* 
                            <select name="country" required>
                                <option value="united states">United States</option>
                                <option value="canada">Canada</option>
                                <option value="united kingdom">United Kingdom</option>
                                <option value="other">Other</option>
                            </select>
                        </label>   
                    </p>
                    <p>
                        <label htmlFor="email">Your Email* <input type="email" name="email" placeholder="Enter your email" aria-label="Input" required/></label>
                    </p>
                    <p>
                        <label htmlFor="city">City* <input type="text" name="city" placeholder="Enter your city name" aria-label="Input" required/></label>   
                    </p>
                    <p>
                        <label htmlFor="phone">Phone* <input type="text" name="phone" placeholder="Enter your phone number" aria-label="Input" required/></label>   
                    </p>
                    <p class={"full"}>
                        <label htmlFor="message">Message <textarea name="message" placeholder="Enter your message" aria-label="Input"></textarea></label>
                    </p>
                    <p class={"button"}>
                        <button type="submit" name="submit" class={"submit"} aria-label="Send">Send</button>
                    </p>
                </form> 
            </div>
          </FooterRow>
      );
    }
  }

  const FooterRow = styled.div`
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
        font-family: "Raleway";
        color: #818181;
        font-size: 3rem;
        line-height: 4rem;
        font-weight: 100;
        max-width: 600px;
        @media(max-width:640px) {
            font-size: 42px;
            line-height: 1.2;
        }
    }
    .contact-button {
        button {
            font-family: "Raleway";
            color: #0c62fb;
            border: .1rem solid #0c62fb;
            padding-left: 30px;
            padding-right: 30px;
            min-width: 6.5rem;
            padding: 1rem 3rem;
            font-size: 16px;
            background: #fff;
            transition-duration: .3s;
            &:hover {
                color: #fff;
                background: #0c62fb;
                cursor: pointer;
            }
            @media(max-width:640px) {
                padding: 10px 30px;
            }
        }
    }
    @media(max-width:900px) {
        flex-wrap: wrap;
        .footer-copy {
            width: 100%;
            h3 {
                text-align: center;
                margin: 0 auto;
                margin-bottom: 35px;
            }
        }
        .contact-button {
            width: 100%;
            text-align: center;
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
  
  export default PostFooter