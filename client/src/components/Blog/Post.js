import React from 'react';
import { Link } from 'react-router-dom';

const Post = props => (
  <article className="posts">
    <div className="posts-content">
      <div className="posts-description">
        <Link to={`/blog/${props.post.slug}`}>
          <h4
            className="posts-title"
            dangerouslySetInnerHTML={{
              __html: props.post.title.rendered
            }}
          />
        </Link>
        <div className="posts-meta">{props.post.categories}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: props.post.excerpt.rendered
          }}
        />
      </div>
      <div className="user-meta">
        <div className="user-meta_pic">
          <Link to="">{/* <img src={Profile} alt="Profile" /> */}</Link>
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
);

export default Post;
