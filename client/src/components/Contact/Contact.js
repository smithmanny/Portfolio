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
      companyName: '',
      website: '',
      number: '',
      projectCost: '$1,000 - $3,000',
      message: '',
      sent: '',
      msg: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async handleSubmit(event) {
    event.preventDefault();

    const {
      name,
      email,
      message,
      companyName,
      website,
      number,
      projectCost
    } = this.state;

    const captcha = document.querySelector('#g-recaptcha-response').value;

    const form = await axios.post('/api/form', {
      name,
      email,
      companyName,
      website,
      number,
      projectCost,
      message,
      captcha
    });

    // Check captcha status
    if (form.data.success === false) {
      this.setState({ sent: false, msg: form.data.msg });
    } else {
      this.setState({ sent: true });
      await this.clearForm();
    }
  }

  // Clear Form after submit
  clearForm() {
    this.setState({
      name: '',
      email: '',
      companyName: '',
      website: '',
      number: '',
      projectCost: '$1,000 - $3,000',
      message: ''
    });
  }

  renderStatus() {
    switch (this.state.sent) {
      case false:
        return <ErrorView text={this.state.msg} />;
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
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={this.state.companyEmail}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input
                type="url"
                name="website"
                placeholder="https://shakhorsmith.com"
                value={this.state.website}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <input
                type="number"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectCost">Project Cost</label>
              <select
                name="projectCost"
                value={this.state.projectCost}
                onChange={this.handleChange}>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$4,000">$4,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message/Comment</label>
              <textarea
                name="message"
                rows="10"
                value={this.state.message}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <div
                className="g-recaptcha"
                data-sitekey="6LfWPTMUAAAAAO-5cU6hv9bHBX08DVUrvIrvnrRl"
              />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
