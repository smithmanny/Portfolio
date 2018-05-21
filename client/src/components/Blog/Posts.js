import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Assets
import Header from '../Header/Header';
import Profile from '../../img/profile.jpg';
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
              <article className="posts" key={index}>
                <div className="posts-content">
                  <div className="posts-description">
                  <Link to={`/blog/${post.slug}`}>
                    <h4
                      className="posts-title"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered
                      }}
                    />
                  </Link>
                    <div className="posts-meta">{post.categories}</div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered
                      }}
                    />
                  </div>
                  <div className="user-meta">
                    <div className="user-meta_pic">
                      <Link to="">
                        <img src={Profile} alt="Profile" />
                      </Link>
                    </div>
                    <div className="user-meta_info">
                      <Link to="">
                        Shakhor <span className="user-meta_info_on">on</span>
                      </Link>
                      <time>February 21, 2018</time>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default Posts;
