import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Assets
import Header from '../Header/Header';
import Profile from '../../img/profile.jpg';
import './Posts.css';

class Post extends Component {
  constructor() {
    super()

    this.state = {
      post: ''
    }


  }

  componentDidMount() {
    const { slug } = this.props.match.params

    const URL = process.env.REACT_APP_WP_POST+`slug:${slug}`;

    fetch(URL)
      .then(res => res.json())
      .then(post => {
        this.setState({ post })

        console.log(post)
      })
  }

  render() {
    const { post } = this.state;

    return (
      <div className="container">
        <Header />

        <div className="wrapper">
          <h1 className='post-title'>{post.title}</h1>
          <div className="post-tags">#React #Heroku #JavaScript</div>
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
      </div>
    );
  }
}

export default Post;
