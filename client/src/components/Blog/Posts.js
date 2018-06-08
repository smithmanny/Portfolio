import React, { Component } from 'react';
import Header from '../Header/Header';
import Post from './Post';
// Assets
import './Posts.css';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const URL = process.env.REACT_APP_WP_POSTS;

    // Fetch all blog posts
    fetch(URL)
      .then(res => res.json())
      .then(posts => {
        return Promise.all(posts.map(async post => {
          return {
            ...post,
            categories: await this.getCategory(...post.categories).then(res => res.name),
            categoryLink: await this.getCategory(...post.categories).then(res => res.link)
          };
        }));
      })
      .then(posts => this.setState({ posts }))
      .catch(err => console.log(err));
  }

  getCategory(id) {
    const URL = process.env.REACT_APP_WP_CATEGORIES+id;

    return fetch(URL)
      .then(data => data.json())
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container">
        <Header />

        <div className="wrapper">
          <section className="posts-wrapper">
            {posts.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default Posts;
