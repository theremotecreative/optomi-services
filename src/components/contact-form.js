import React from "react"

const ContactForm = (props) => (
    <form name="Contact" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact" aria-label="Input" />
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
            <button type="submit" name="submit" class={"submit"}  aria-label="Send">Send</button>
        </p>
    </form>
)

export default ContactForm