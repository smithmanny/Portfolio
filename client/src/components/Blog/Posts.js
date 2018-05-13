import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Assets
import Header from '../Header/Header';
import Comp from '../../img/comp.jpg';
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
                  <img src={Comp} alt="Computer" />
                </div>
                <div className="post-content">
                  <div className="post-description">
                    <div className="post-meta">Tag</div>
                    <h4 className="post-title">
                      <Link to="">{post.title.rendered}</Link>
                    </h4>
                    <div
                      className="post-excerpt-wrapper"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered
                      }}
                    />
                  </div>
                  <div className="user-meta">
                    <div className='user-meta_pic'>
                      <Link to=""><img src={Profile} alt="Profile"/></Link>
                    </div>
                    <div className='user-meta_info'>
                      <Link to="">Shakhor <span className='user-meta_info_on'>on</span></Link>
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
