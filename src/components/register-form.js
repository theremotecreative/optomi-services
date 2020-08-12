import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Register",
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
        <form
          name="Register"
          method="post"
          action="/registration-success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Register" aria-label="Input" />
          <p class={"hidden"}>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} aria-label="Input" />
            </label>
          </p>
          <p class={"full"}>
            <label htmlFor="name">
              Name
              <input type="text" name="name" placeholder="Enter your name" onChange={this.handleChange} aria-label="Input" required/>
            </label>
          </p>
          <p class={"full"}>
            <label  htmlFor="title">
              Title
              <input type="text" name="title" placeholder="Enter your title" onChange={this.handleChange} aria-label="Input" required />
            </label>
          </p>
          <p class={"full"}>
            <label  htmlFor="company">
              Company
              <input type="text" name="company" placeholder="Enter your company" onChange={this.handleChange} aria-label="Input" required />
            </label>
          </p>
          <p class={"full"}>
            <label  htmlFor="email">
              Email
              <input type="email" name="email" placeholder="Enter your email" onChange={this.handleChange} aria-label="Input" required />
            </label>
          </p>
          <p class={"button"}>
            <button type="submit" class={"submit"} aria-label="Submit">Send</button>
          </p>
        </form>
    );
  }
}