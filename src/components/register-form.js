import React from "react"

export default () => (
    <form name="Register" method="post" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
        <input type="hidden" name="form-name" value="Register" />
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p class={"full"}>
            <label>Name <input type="text" name="name" placeholder="Enter your name"/></label>   
        </p>
        <p class={"full"}>
            <label>Title <input type="text" name="title" placeholder="Enter your title"/></label>   
        </p>
        <p class={"full"}>
            <label>Company <input type="text" name="company" placeholder="Enter your company name"/></label>   
        </p>
        <p class={"full"}>
            <label>Your Email <input type="email" name="email" placeholder="Enter your email"/></label>
        </p>
        <p class={"button"}>
            <button type="submit" name="submit" class={"submit"}>Send</button>
        </p>
    </form>
)