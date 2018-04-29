import React, { Component } from 'react';
import axios from 'axios';

// Form Views
import DefaultView from './form/DefaultView';
import ErrorView from './form/ErrorView';
import SentView from './form/SentView';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      sent: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async handleSubmit(event) {
    event.preventDefault();

    const api = 'https://forms.hubspot.com/uploads/form/v2/3958169/7921dc0e-05ff-4e2a-adbb-9c174dd4b583';

    const { name, email, message } = this.state;

    const data = JSON.stringify({
      firstname: name,
      email,
      message
    });

    const headers = {
    headers: {
        'Postman-Token': '01bb319c-7720-4558-bb43-b17a8b44ca7e',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
    // const captcha = document.querySelector('#g-recaptcha-response').value;

    const form = await axios.post(api, data, headers)
      .then(data => this.setState({ state: true }))
      .catch(err => console.log(err));

    // Check captcha status
    // if (form.data.success === false) {
    //   this.setState({ sent: false, msg: form.data.msg });
    // } else {
    //   this.setState({ sent: true });
    //   await this.clearForm();
    // }
  }

  // Clear Form after submit
  clearForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      error: ''
    });
  }

  renderStatus() {
    switch (this.state.sent) {
      case false:
        return <ErrorView text='Error! Please try again.' />;
      case true:
        return <SentView />;
      default:
        return <DefaultView />;
    }
  }

  render() {
    return (
      <section className="wrapper">
        <div className="contact-wrapper">
          {/* Render Form paragraph with sent status */}
          {this.renderStatus()}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message/Comment</label>
              <textarea
                name="message"
                rows="10"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>
            {/* <div>
              <div
                className="g-recaptcha"
                data-sitekey="6LfWPTMUAAAAAO-5cU6hv9bHBX08DVUrvIrvnrRl"
              />
            </div> */}
            <button className="btn">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
