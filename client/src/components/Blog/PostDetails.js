import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SocialIcons from '../SocialIcons/SocialIcons';
import Icon from '../SocialIcons/Icon';
// Assets
import Header from '../Header/Header';
import './Posts.css';

class PostDetails extends Component {
  constructor() {
    super()

    this.state = {
      post: ''
    }

    this.content = React.createRef();
  }

  componentDidMount() {
    const { slug } = this.props.match.params

    const URL = process.env.REACT_APP_WP_POST + `slug:${slug}`;

    fetch(URL)
      .then(res => res.json())
      .then(async post => {
        return {
          ...post,
          tags: await this.getTags(post.tags),
          date: await this.convertDate(post.date),
          headTitle: await this.headTitle(post.title)
        }
      })
      .then(post => this.setState({ post }))
  }

  headTitle(title) {
    return title.replace('&amp;', '&')
  }

  getTags(arr) {
    const URL = process.env.REACT_APP_WP_TAGS

    return fetch(URL)
      .then(data => data.json())
      .then(() => Object.values(arr))
  }

  convertDate(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const convertDate = new Date(date);
    const month = months[convertDate.getMonth()];
    const year = convertDate.getFullYear();
    const day = convertDate.getDate();

    return `${month} ${day}, ${year}`;
  }

  socialAction(obj) {
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
  }

  render() {
    const { post } = this.state;

    const twttrData = {
      text: post.headTitle,
      url: window.location.href
    }

    const twttr = `https://twitter.com/intent/tweet?${this.socialAction(twttrData)}`;

    const fbData = {
      u: window.location.href
    }

    const facebook = `https://www.facebook.com/sharer/sharer.php?${this.socialAction(fbData)}`;

    return (
      <div className="container">
        <Helmet>
          <title>{post.headTitle}</title>
          <meta property="og:url"                content={window.location.href} />
          <meta property="og:type"               content="article" />
          <meta property="og:title"              content={post.headTitle} />
          <meta property="og:description"        content={post.excerpt} />
          <meta property="og:image"              content={post.featured_image} />
        </Helmet>

        <Header />

        <div className="wrapper">
          <div className="post-wrapper">
            <h1
              className='post-title'
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            <div className="post-meta">
              <div className="post-createdAt">
                {post.date}
              </div>

              <SocialIcons location='footer-social'>
                <Icon
                  link={twttr}
                  icon="fab fa-twitter"
                  alt="Share on Twitter"
                  color="#1da1f2"
                  share="true"
                />
                <Icon
                  link={facebook}
                  icon="fab fa-facebook"
                  alt="Share on Facebook"
                  color="#0070AD"
                  share="true"
                />
              </SocialIcons>
            </div>

            <p ref={this.content} className='post-content' dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetails;
