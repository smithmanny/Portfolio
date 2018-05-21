import React, { Component } from 'react';
import Header from '../Header/Header';

class Post extends Component {
  constructor() {
    super()


  }

  componentDidMount() {
    const { slug } = this.props.match.params

    const URL = process.env.REACT_APP_WP_POST+`slug:${slug}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="container">
        <Header />

        <div className="wrapper">post page</div>
      </div>
    );
  }
}

export default Post;
