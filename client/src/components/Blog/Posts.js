import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Assets
import Header from '../Header/Header';
import Comp from '../../img/comp.jpg';
import './Posts.css';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('http://portfolio.local/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(post => this.setState({ posts: post }));
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container">
        <Header />

        <div className="wrapper">
          <section className="post-wrapper">
            {posts.map((post, index) => (
              <article className="post" key={index}>
                <div className="post-img">
                  <img src={Comp} alt="Computer picture"/>
                </div>
                <div className="post-content">
                  <div className="post-description">
                    <div className="post-meta">Tag</div>
                    <Link to="">{post.title.rendered}</Link>
                    <div className="post-excerpt-wrapper">
                      <p>This is where the description goes</p>
                    </div>
                    <div className="user-meta">
                      <Link to="">Pic</Link>
                      <Link to="">Shakhor</Link>
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
