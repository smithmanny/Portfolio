import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pic from '../../img/blogger.png';

class Post extends Component {
  constructor() {
    super();

    this.text = React.createRef();
  }

  componentDidMount() {
    const html = this.text.current.textContent;
    const excerpt = html.substring(0, 200) + '...';

    this.text.current.textContent = excerpt;
  }

  render() {
    return (
      <article className="post-container">
        <Link className='post-link' to={`/blog/${this.props.post.slug}`}>
          <div className="post-image">
            <img src={this.props.post.featured_media_url || Pic} alt="" />
          </div>
          <div className="post-info">
            <h2
              className="post-title"
              dangerouslySetInnerHTML={{
                __html: this.props.post.title.rendered
              }}
            />
            <p
              ref={this.text}
              className="post-text"
              dangerouslySetInnerHTML={{
                __html: this.props.post.excerpt.rendered
              }}
            />
          </div>
        </Link>

        <div className="post-meta">
          <div className="post-category">{`#` + this.props.post.categories}</div>
          <div className="post-date">{this.props.post.date}</div>
        </div>
      </article>
    );
  }
}

export default Post;
