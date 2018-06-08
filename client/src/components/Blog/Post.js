import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Assets
import Header from '../Header/Header';
import './Posts.css';

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: ''
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;

    const URL = process.env.REACT_APP_WP_POST + `slug:${slug}`;

    fetch(URL)
      .then(res => res.json())
      .then(async post => {
        return {
          ...post,
          tags: await this.getTags(post.tags)
        };
      })
      .then(post => this.setState({ post }));
  }

  getTags(arr) {
    const URL = process.env.REACT_APP_WP_TAGS;

    return fetch(URL)
      .then(data => data.json())
      .then(() => Object.values(arr));
  }

  render() {
    const { post } = this.state;

    return (
      <div className="container">
        <Header />

        <div className="wrapper post-wrapper">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-tags">
            {post !== '' && post.tags.map(tag => `#${tag.name} `)}
          </div>
          <div className="user-meta">
            <div className="user-meta__date">
              <p>February 21, 2018</p>
            </div>
            <div className="user-meta__share" />
          </div>

          <section
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    );
  }
}

export default Post;
